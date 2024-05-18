"use client";
import { authModalState } from '@/atoms/authModalAtom';
import { auth } from '@/firebase/firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';

type LoginProps = {};

const Login = (props: LoginProps) => {
    const router = useRouter();
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = (type: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({ ...prev, type }));
    };
    const [inp, setInputs] = useState({ email: '', password: '' });


    const handleChangeINP = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(inp);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inp.email || !inp.password)
            return toast.error("Please ensure no fields are left empty.", { position: 'top-center', autoClose: 4000, theme: 'colored' });
        // alert("Please ensure no fields are left empty.")
        try {
            const existuser = await signInWithEmailAndPassword(inp.email, inp.password);
            if (!existuser) return;
            router.push('/codepage');
        } catch (error: any) {
            toast.error(error.message, { position: "top-center", autoClose: 4000, theme: 'colored' });
            // alert(error.message);
        }
    };
    // console.log(user, "user");
    useEffect(() => {
        if (error) {
            toast.error(error.message, { position: "top-center", autoClose: 4000, theme: 'colored' });
            // alert(error.message);
        }
    }, [error]);

    return <form className='space-y-6 px-6 py-4' onSubmit={handleLogin}>
        <h3 className='text-xl font-medium text-white'>Sign in to Leetcode</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>Your Email</label>
            <input type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 mb-4 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='abc@gmail.com' onChange={handleChangeINP} />

            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Your Password</label>
            <input type="password" name='password' id='password' onChange={handleChangeINP}
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white'
                placeholder='* * * * * *' />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-color-brand-orange hover:bg-color-brand-orange-s'>
            {loading ? "loading" : "Login"}
        </button>
        <button className='flex w-full justify-end' onClick={() => handleClick("forgotPassword")}>
            <a href='#' className='text-sm block text-color-brand-orange hover:underline text-right'>Forgot Password</a>
        </button>
        <div className='text-sm font-medium text-gray-300'>
            Not Registered?{" "}
            <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("register")}> Create account</a>
        </div>
    </form>
}

export default Login;
