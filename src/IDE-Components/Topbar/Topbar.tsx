"use client"
import { auth } from '@/firebase/firebase';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { useAuthState } from 'react-firebase-hooks/auth';
import Logout from '../buttons/Logout';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { BsList } from 'react-icons/bs';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Timer from '../Timer/Timer';


type TopbarProps = {
    problemPage?: boolean,
}

const Topbar = ({ problemPage }: TopbarProps) => {
    const [user] = useAuthState(auth);
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <RecoilRoot>
            <nav className='flex h-[50px] w-full flex-shrink-0 items-center px-5 bg-color-dark-layer-1 text-color-dark-gray-7 fixed top-0 p-4'>
                <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ''}`}>
                    <Link href='/' className='h-[22px] flex-1'>
                        {/* <img src='/logo-full.png' alt='Logo' className='h-full' /> */}
                        <Image src='/IDE-PROJ-IMG/logo-full.png' alt='Logo' width={100} height={100} style={{ width: "auto", height: "auto" }} priority />
                    </Link>

                    {problemPage && (
                        <div className='flex items-center gap-4 flex-1 justify-center'>
                            <Link
                                href='/IDE-Project/codepage/topic1'
                                className='flex items-center gap-2 font-medium max-w-[170px] text-color-dark-gray-8 cursor-pointer'
                            >
                                <div>
                                    <BsList />
                                </div>
                                <p>Problem List</p>
                            </Link>
                        </div>
                    )}

                    <div className='flex items-center flex-1 space-x-4 justify-end'>
                        <div>
                            <a
                                href='https://www.buymeacoffee.com/burakorkmezz'
                                target='_blank'
                                rel='noreferrer'
                                className='bg-color-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-color-brand-orange hover:bg-color-dark-fill-2'
                            >
                                Premium
                            </a>
                        </div>
                        {!user && (
                            <Link href='/IDE-Project/auth' className='cursor-pointer'
                                onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}
                            >
                                <button className='bg-color-dark-fill-3 py-1 px-2 cursor-pointer rounded '>Sign In</button>
                            </Link>
                        )}
                        {user && problemPage && <Timer />}
                        {user && (
                            <div className='cursor-pointer group relative'>
                                <Image src='/IDE-PROJ-IMG/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full z-50' />
                                <div
                                    className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-color-dark-layer-1 text-color-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out '
                                >
                                    <p className='text-sm'>{user.email}</p>
                                </div>
                            </div>
                        )}
                        {user && <Logout />}
                    </div>
                </div>
            </nav>
        </RecoilRoot>
    );
}

export default Topbar
