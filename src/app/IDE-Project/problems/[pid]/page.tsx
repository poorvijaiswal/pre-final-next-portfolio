import Topbar from '@/IDE-Components/Topbar/Topbar'
import React from 'react'
import Workspace from '@/IDE-Components/Workspace/Workspace'
import { problems } from '@/utils/IDE-utils/problems'
import { Problem } from '@/utils/IDE-utils/types/problem'
// import useHasMounted from '@/hooks/useHasMounted'

//  SSG
// getStaticPaths => it create the dynamic routes
export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key },
    }));

    // console.log(paths);

    paths.forEach((key => {
        console.log(key);
    }));

    return {
        paths,
        fallback: false,
    };
}

type ProblemPageProps = {
    problem: Problem;
    // params: { params: { pid: string } }
    params: { pid: string };
    response: Problem
}

export async function getProblemById(pid: string) {
    let response = await fetch(`${process.env.NEXT_PUBLIC_PID_API_URL}/IDE-Project/api/problem/${pid}`,
        { method: 'GET', cache: 'no-store' });

    const responseFinal: Problem = await response.json();
    console.log(responseFinal, "give me updated data");
    // return {
    //     props: {
    //         response,
    //     },
    // };   
    return responseFinal;

}

async function ProblemPage({ problem, params }: ProblemPageProps) {
    // console.log(params, "i am param");
    const data = await getProblemById(params.pid);
    // console.log(data, "data success");
    return (
        <>
            <Topbar problemPage />
            <div className='pt-[50px] h-screen'>
                <Workspace problem={data} />
            </div>
        </>
    )
}

export default ProblemPage

// getStaticProps => it fetch the data

// export async function getServerSideProps({ params }: { params: { pid: string } }) {

//     console.log(params, "log params"); //here it shows undefined

//     const { pid } = params;
//     const problem = problems[pid];

//     if (!problem) {
//         return {
//             notFound: true,
//         };
//     }
//     problem.handlerFunction = problem.handlerFunction.toString();
//     return {
//         props: {
//             problem,
//         },

//     };
// }




