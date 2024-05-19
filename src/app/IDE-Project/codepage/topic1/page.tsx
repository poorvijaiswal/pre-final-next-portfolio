"use client";
import ProblemTable from '@/IDE-Components/ProblemTable/ProblemTable'
import { firestore } from '@/firebase/firebase';
import { doc, setDoc } from '@firebase/firestore';
import React, { useState } from 'react'

type Topic1Props = {}

const Topic1 = (props: Topic1Props) => {

    const [loadingProblems, setLoadingProblems] = useState(true);

    // const [inputs, setInputs] = useState({
    //     id: '',
    //     title: '',
    //     difficulty: '',
    //     category: '',
    //     videoId: '',
    //     link: '',
    //     order: '',
    //     likes: 0,
    //     dislikes: 0,
    // });
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputs({
    //         ...inputs,
    //         [e.target.name]: e.target.value
    //     })
    // }
    // console.log(inputs);
    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const newProblem = {
    //         ...inputs,
    //         order: Number(inputs.order)
    //     }
    //     await setDoc(doc(firestore, "problems", inputs.id), newProblem);
    //     alert("Saved to Database");
    // }
    return <>
        <h1
            className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
            uppercase mt-10 mb-5'
        >
            &ldquo; QUALITY OVER QUANTITY &rdquo; 👇
        </h1>
        <div className='text-sm overflow-x-auto mx-auto px-5 pb-8 h-auto'>
            {loadingProblems && (
                <div className='animate-pulse'>{
                    [...Array(10)].map((_, idx) => (
                        <LoadingSkeleton key={idx} />
                    ))
                }</div>
            )}
            <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-2/3 w-full max-w-[1200px] mx-auto'>
                {!loadingProblems && (
                    <thead className='text-base text-gray-700 uppercase dark:text-gray-400 border-b '>
                        <tr>
                            <th scope='col' className='px-1 py-3 w-0 font-medium'>
                                Status
                            </th>
                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Title
                            </th>
                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Difficulty
                            </th>

                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Category
                            </th>
                            <th scope='col' className='px-6 py-3 w-0 font-medium'>
                                Solution
                            </th>
                        </tr>
                    </thead>
                )}
                <ProblemTable setLoadingProblems={setLoadingProblems} />

            </table>
        </div>
        {/* <form className='flex flex-col max-w-sm gap-3 m-auto text-black' onSubmit={handleSubmit}>
            <input onChange={handleInputChange} type='text' placeholder='problem id' name='id' />
            <input onChange={handleInputChange} type='text' placeholder='title' name='title' />
            <input onChange={handleInputChange} type='text' placeholder='difficulty' name='difficulty' />
            <input onChange={handleInputChange} type='text' placeholder='category' name='category' />
            <input onChange={handleInputChange} type='text' placeholder='order' name='order' />
            <input onChange={handleInputChange} type='text' placeholder='videoId?' name='videoId' />
            <input onChange={handleInputChange} type='text' placeholder='link?' name='link' />
            <button className='bg-cyan-600'>Save to Database</button>
        </form> */}
    </>

}

export default Topic1


const LoadingSkeleton = () => {
    return (
        <div className='flex items-center space-x-12 mt-4 px-6 mx-auto max-w-screen-md'>
            <div className='w-6 h-6 shrink-0 rounded-full bg-color-dark-layer-1'></div>
            <div className='h-4 sm:w-52  w-32  rounded-full bg-color-dark-layer-1'></div>
            <div className='h-4 sm:w-52  w-32 rounded-full bg-color-dark-layer-1'></div>
            <div className='h-4 sm:w-52 w-32 rounded-full bg-color-dark-layer-1'></div>
            <span className='sr-only '>Loading...</span>
        </div>
    );
};