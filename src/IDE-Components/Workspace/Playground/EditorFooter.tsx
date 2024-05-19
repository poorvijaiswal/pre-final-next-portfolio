import React from 'react'
import { BsChevronUp } from 'react-icons/bs';

type EditorFooterProps = {}

const EditorFooter = (props: EditorFooterProps) => {
    return (
        <div className='flex bg-color-dark-layer-1 absolute bottom-0 z-10 w-full'>
            <div className='mx-5 my-[10px] flex justify-between w-full'>
                <div className='mr-2 flex flex-1 flex-nowrap items-center space-x-4'>
                    <button className='px-3 py-1.5 font-medium items-center transition-all inline-flex bg-color-dark-fill-3 text-sm hover:bg-color-dark-fill-2 text-color-dark-label-2 rounded-lg pl-3 pr-2'>
                        Console
                        <div className='ml-1 transform transition flex items-center'>
                            <BsChevronUp className='fill-gray-6 mx-1 fill-color-dark-gray-6' />
                        </div>
                    </button>
                </div>
                <div className='ml-auto flex items-center space-x-4'>
                    <button
                        className='px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-color-dark-fill-3  hover:bg-color-dark-fill-2 text-color-dark-label-2 rounded-lg'
                    // onClick={handleSubmit}
                    >
                        Run
                    </button>
                    <button
                        className='px-3 py-1.5 font-medium items-center transition-all focus:outline-none focus:border-none inline-flex text-sm text-white bg-color-dark-green-s hover:bg-green-600 rounded-lg'
                    // onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditorFooter
