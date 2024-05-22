export type Example = {
    id: number;
    inputText: string;
    outputText: string;
    explanation?: string;
    img?: string;
};

export const playgroundOP = [
    {
        id: 0,
        name: "main"
    },

    {
        id: 1,
        name: "inputs"
    },
    {
        id: 2,
        name: "output"
    },
];



// local problem data
export type Problem = {
    id: string;
    title: string;
    problemStatement: string;
    examples: Example[];
    constraints: string;
    order: number;
    starterCode: CodeSnippets[];
    handlerFunction: ((fn: any) => boolean) | string;
    starterFunctionName: string;
};

export type CodeSnippets = {
    language: string
    starterFunctionName: string
}
export type handleStartFunc = {
    language: string;
    checkFunctionName: string;
}
export type DBProblem = {
    id: string;
    title: string;
    category: string;
    difficulty: string;
    likes: number;
    dislikes: number;
    order: number;
    videoId?: string;
    link?: string;
};