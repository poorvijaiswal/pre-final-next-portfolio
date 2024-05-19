"use client"
import React, { useState } from 'react'
import Split from 'react-split'
import PreferenceNav from './PreferenceNav/PreferenceNav'
import ReactCodeMirror from '@uiw/react-codemirror'
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';
import EditorFooter from './EditorFooter';
import { Problem } from '@/utils/IDE-utils/types/problem';

type PlaygroundProps = {
    problem: Problem;
}

const Playground = ({ problem }: PlaygroundProps) => {
    const [activeTestCaseId, setActiveTestCaseId] = useState<number>(0);
    return (<>
        <div className='flex flex-col bg-color-dark-layer-1 relative overflow-x-hidden overflow-y-hidden'>
            <PreferenceNav />
            <Split
                className="split1 w-full h-full "
                direction="vertical" sizes={[60, 40]} minSize={60}
            >
                <div className='w-full overflow-auto'>
                    <CodeMirror
                        theme={vscodeDark}
                        value={problem.starterCode}
                        extensions={[javascript()]}
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
                        <div className='w-full cursor-text rounded px-3 py-[10px] bg-color-dark-fill-3 text-white mt-2 mb-[72px]'>
                            {problem.examples[activeTestCaseId].outputText}
                        </div>
                    </div>
                </div>
            </Split>
            <EditorFooter
            // handleSubmit={handleSubmit} 
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
