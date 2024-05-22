"use client"
import React, { useState } from 'react'
import Split from 'react-split'
import ProblemDesc from './ProblemDesc/ProblemDesc'
import Playground from './Playground/Playground'
import { Problem } from '@/utils/IDE-utils/types/problem'
import Confetti from 'react-confetti'
import { problems } from '@/utils/IDE-utils/problems/index'
import useWindowSize from '../hooks/useWindowSize'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil'

type WorkspaceProps = {
    problem: Problem;
    // params: { pid: string };
}

const Workspace = ({ problem }: WorkspaceProps) => {
    // console.log(problem, "Workspace");
    const { width, height } = useWindowSize();
    const [success, setSuccess] = useState(false);
    const [solved, setSolved] = useState(false);
    return (
        <div>
            <RecoilRoot>
                <ToastContainer />
                <Split
                    className="split h-full" minSize={0}
                >
                    <ProblemDesc problem={problem} _solved={solved} />
                    <div className='bg-color-dark-fill-2 max-h-screen'>
                        <Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
                        {success && <Confetti
                            gravity={0.3}
                            tweenDuration={4000} width={width - 8} height={height - 8} />}
                    </div>
                </Split>
            </RecoilRoot>
        </div>

    )
}

export default Workspace
