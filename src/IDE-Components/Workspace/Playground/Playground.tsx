"use client"
import React, { useEffect, useState } from 'react'
import Split from 'react-split'
import PreferenceNav from './PreferenceNav/PreferenceNav'
import ReactCodeMirror from '@uiw/react-codemirror'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/IDE-utils/types/problem';
import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/firebase'
import { useRouter } from 'next/router'
import { problems } from '@/utils/IDE-utils/problems'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useParams } from 'next/navigation'
import { on } from 'events'

type PlaygroundProps = {
    problem: Problem;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setSolved: React.Dispatch<React.SetStateAction<boolean>>;
}

const Playground = ({ problem, setSuccess, setSolved }: PlaygroundProps) => {
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    let [userCode, setUserCode] = useState<string>(problem.starterCode);
    const [user] = useAuthState(auth);

    const { pid } = useParams();
    console.log(pid);
    // const {
    //     query: { pid },
    // } = useRouter();

    useEffect(() => {
        const code = localStorage.getItem(`code-${pid}`);
        if (user) {
            setUserCode(code ? JSON.parse(code) : problem.starterCode);
        } else {
            setUserCode(problem.starterCode);
        }
    }, [pid, user, problem.starterCode]);

    const onChange = (value: string) => {
        console.log(value);
        setUserCode(value);
        localStorage.setItem(`code-${pid}`, JSON.stringify(value));
    };

    const handleSubmit = async () => {
        if (!user) {
            toast.error("Please login to submit your code", {
                position: "top-center",
                autoClose: 4000,
                theme: "dark",
            });
            return;
        }
        try {
            userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
            console.log(userCode, "usser code");
            const cb = new Function(`return ${userCode}`)();
            console.log(cb, "cb");
            const handler = problems[pid as string].handlerFunction;
            console.log(handler, "handler");

            if (typeof handler === "function") {
                const success = handler(cb);
                if (success) {
                    console.log(success, "success");
                    toast.success("Congrats! All tests passed!", {
                        position: "top-center",
                        autoClose: 3000,
                        theme: "dark",
                    });
                    setSuccess(true);
                    setTimeout(() => {
                        setSuccess(false);
                    }, 4000);

                    const userRef = doc(firestore, "users", user.uid);
                    await updateDoc(userRef, {
                        solvedProblems: arrayUnion(pid),
                    });
                    setSolved(true);
                }
            }
        } catch (error: any) {
            console.log(error.message);
            if (
                error.message.startsWith("AssertionError [ERR_ASSERTION]: Expected values to be strictly deep-equal:")
            ) {
                toast.error("Oops! One or more test cases failed", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "dark",
                });
            } else {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "dark",
                });
            }
        }
    };

    return (<>
        <div className='flex flex-col bg-color-dark-layer-1 relative overflow-x-hidden overflow-y-hidden
         h-[calc(100vh-50px)]'>
            <PreferenceNav />
            <Split
                className="split1 w-full h-full "
                direction="vertical" sizes={[60, 40]} minSize={60}
            >
                <div className='w-full overflow-auto'>
                    <CodeMirror
                        theme={vscodeDark}
                        value={userCode}
                        extensions={[javascript()]}
                        onChange={onChange}
                        style={{ fontSize: 16 }}
                    />
                </div>

                {/* Test Cases  */}
                <div className='w-full px-5 overflow-auto'>
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col cursor-pointer justify-center'>
                            <div className='text-sm font-medium leading-5 text-white w-full'>Test case</div>
                            <hr className='absolute bottom-0 h-0.5 w-full rounded-full bg-white border-none' />
                        </div>
                    </div>

                    <div className="flex">

                        {/* case */}
                        {problem.examples.map((example, index) => (
                            <div className='mr-2 items-start mt-2 text-white' key={example.id}
                                onClick={() => setActiveTestCaseId(index)}>
                                <div className='flex flex-wrap items-center gap-y-4'>
                                    <div className={`font-medium items-center transition-all inline-flex bg-color-dark-fill-3 hover:bg-color-dark-fill-2 cursor-pointer whitespace-nowrap rounded py-1 px-4 ${activeTestCaseId === index ? "text-white" : "text-color-dark-label-2"}`}>Case {index + 1}</div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="font-semibold">
                        <p className='text-sm font-medium mt-4 text-white'>Input:</p>
                        <div className='w-full cursor-text rounded px-3 py-[10px] bg-color-dark-fill-3 text-white mt-2'>
                            {problem.examples[activeTestCaseId].inputText}
                        </div>

                        <p className='text-sm font-medium mt-4 text-white'>Output:</p>
                        <div className='w-full cursor-text rounded px-3 py-[10px] bg-color-dark-fill-3 text-white mt-2 mb-[105px]'>
                            {problem.examples[activeTestCaseId].outputText}
                        </div>
                    </div>
                </div>
            </Split>
            <EditorFooter
                handleSubmit={handleSubmit}
            />
        </div>
    </>

    )
}

export default Playground

// import React from 'react';
// import Split from 'react-split';

// const Playground = () => {
//     return (
//         <Split
//             className="split bg-red-500 h-full"
//             direction="vertical"
//             sizes={[50, 50]} // Set initial sizes for each pane
//             minSize={[100, 100]} // Set minimum sizes for each pane
//         >
//             <div>Code Editor</div>
//             <div>Testing area</div>
//         </Split>
//     );
// }

// export default Playground;
