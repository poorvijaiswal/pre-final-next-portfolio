import { authModalState } from '../../atoms/authModalAtom';
import Link from 'next/link';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import Image from 'next/image';

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = () => {
        setAuthModalState((prev) => ({ ...prev, isOpen: true }));
    }

    return (
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-20 h-20">
            <Link href="/" className='flex items-center justify-between'>
                <Image src='/IDE-PROJ-IMG/logo.png' alt='leetcode' height={200} width={200} style={{ width: "100%", height: "auto" }} priority />
            </Link>
            <div className="flex items-center">
                <button
                    className="bg-color-brand-orange border-2 border-transparent text-white px-2 py-1 rounded-md sm:px-4 font-medium z-10 transition duration-300 ease-in-out hover:text-color-brand-orange hover:bg-white hover:border-color-brand-orange"
                    onClick={handleClick}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Navbar;
