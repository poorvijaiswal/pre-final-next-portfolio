"use client"
import React, { useEffect, useRef, useState } from 'react'
import Split from 'react-split'
import PreferenceNav from './PreferenceNav/PreferenceNav'
import { cpp } from "@codemirror/lang-cpp"
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript, snippets } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import EditorFooter from './EditorFooter';
import { CodeSnippets, Problem } from '@/utils/IDE-utils/types/problem';
import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '@/firebase/firebase'
import { problems } from '@/utils/IDE-utils/problems'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { useParams } from 'next/navigation'
import { executeCode } from "../../../app/IDE-Project/api/runCode"

type PlaygroundProps = {
    problem: Problem;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setSolved: React.Dispatch<React.SetStateAction<boolean>>;
}

const Playground = ({ problem, setSuccess, setSolved }: PlaygroundProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>('javascript');
    const handleLanguageChange = (lang: any) => {
        setLanguage(lang);
        setWindow("main");
        setHasRun(false);
        setInput('');
        // console.log(lang, "lang pg");
    };

    // Find starter code for a given language
    const findStarterCode = (language: string, snippets: CodeSnippets[]) => {
        const snippet = snippets.find(snippet => snippet.language === language);
        // console.log(snippet, "snippet1");
        return snippet ? snippet.starterFunctionName : null;

    };
    // Usage example
    const getCodeStarter = findStarterCode(language, problem.starterCode);
    if (getCodeStarter) {
        // console.log(`Starter code for ${language}:`);
        // console.log(getCodeStarter);
    } else {
        console.log(`No starter code found for ${language}`);
    }

    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);

    // console.log(getCodeStarter, "get code starter")

    let [userCode, setUserCode] = useState<any>(getCodeStarter);
    const [window, setWindow] = React.useState("main");

    const [user] = useAuthState(auth);
    const { pid } = useParams();

    // -----------
    const onChange = (value: string) => {
        console.log(value, "i am user value");
        setUserCode(value);
        // console.log(userCode, "code to run")
        // localStorage.setItem(`code-${pid}`, JSON.stringify(value));
    };

    useEffect(() => {
        // const findStarterFunction = (language: string) => problem.starterCode.find(snippet => snippet.language === language)?.starterFunctionName;
        // const NoChangeFunction = findStarterFunction(language)

        const savedCode = localStorage.getItem(`code-${pid}-${language}`);
        console.log(savedCode, "saved code")
        if (user && savedCode) {
            setUserCode(savedCode);
        } else {
            setUserCode(getCodeStarter);
        }
        setWindow('main');
    }, [language, user, getCodeStarter]);

    useEffect(() => {
        if (userCode) {
            localStorage.setItem(`code-${language}`, userCode);
        }
    }, [userCode, language]);

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
            console.log(userCode, "usser code");
            userCode = userCode.slice(userCode.indexOf(problem.starterFunctionName));
            console.log(userCode, " sliced usser code");
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

    const [output, setOutput] = useState(null)
    const [hasRun, setHasRun] = useState(false);
    const [input, setInput] = useState('');
    const [isError, setIsError] = useState(false);
    const Output = async (language: string, userCode: string) => {
        console.log("Output working")
        const runCode = async () => {
            console.log("runCode")
            setHasRun(true);
            const sourceCode = userCode;
            if (!sourceCode) return;
            try {
                setIsLoading(true);
                const result = await executeCode(language, sourceCode, input);
                // Access the 'run' property correctly
                const runResult = result.run;
                // console.log(runResult.output, "o/p"); // Log the 'output'
                setOutput(runResult.output); // Set the output state
                setWindow("output");
                // console.log(output, "o/p")
                runResult.stderr ? setIsError(true) : setIsError(false);
            } catch (error: any) {
                console.log(error);
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 4000,
                    theme: "dark",
                });
            }
            finally {
                setIsLoading(false);
            }
        }
        await runCode();
    }


    return (<>
        <div className='flex flex-col bg-color-dark-layer-1 relative overflow-x-hidden overflow-y-hidden
         h-[calc(100vh-50px)]'>
            <PreferenceNav handleLanguageChange={handleLanguageChange} window={window} setWindow={setWindow} />
            <Split
                className="split1 w-full h-full "
                direction="vertical" sizes={[60, 40]} minSize={[80, 80]}
            >
                <div className='w-full overflow-auto'>
                    {window === "main" && (<CodeMirror className='h-full w-full overflow-auto'
                        theme={vscodeDark}
                        value={userCode || ""}
                        extensions={[language === 'javascript' ? javascript() : language === 'python' ? python() : language === 'java' ? java() : cpp()]}
                        onChange={onChange}
                        style={{ fontSize: 16, height: "100%", width: "100%" }}
                    />)}
                    {window === "output" && (
                        <div className={`w-full h-full bg-color-dark-layer-1 
                        p-5 overflow-auto ${isError ? "text-red-500" : ""}`}
                        >
                            {hasRun ? (output ? <pre className={`${isError ? "text-red-500" : ""}`}>{output}</pre> : "") : "Click 'RUN' to see the output"}
                        </div>
                    )}
                    {window == "inputs" && (
                        <div className='w-full h-full bg-color-dark-layer-1 text-white p-5 overflow-auto'>
                            <textarea className='w-full h-full bg-color-dark-layer-1 text-white p-5 overflow-auto resize-none border-none focus:outline-none'
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Enter input values here"
                            />
                        </div>)
                    }
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
                runCode={Output}
                language={language}
                sourceCode={userCode}
                input={input}
                isLoading={isLoading}
            />
        </div>
    </>

    )
}

export default Playground

