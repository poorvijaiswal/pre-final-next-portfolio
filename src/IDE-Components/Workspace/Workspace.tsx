"use client"
import React from 'react'
import Split from 'react-split'
import ProblemDesc from './ProblemDesc/ProblemDesc'
import Playground from './Playground/Playground'
import { Problem } from '@/utils/IDE-utils/types/problem'
import { problems } from '@/utils/IDE-utils/problems/index'

type WorkspaceProps = {
    problem: Problem;
    // params: { pid: string };
}

const Workspace = ({ problem }: WorkspaceProps) => {
    // console.log(problem, "Workspace");
    return (
        <Split
            className="split h-full" minSize={0}
        >
            <ProblemDesc problem={problem} />
            <Playground problem={problem} />
        </Split>

    )
}

export default Workspace
