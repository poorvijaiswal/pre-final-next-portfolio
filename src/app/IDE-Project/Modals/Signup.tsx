import { authModalState } from '@/atoms/authModalAtom';
import React, { HTMLInputAutoCompleteAttribute, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/firebase';
import { toast } from 'react-toastify';

type SignupProps = {

};

const Signup = (props: SignupProps) => {
    const router = useRouter();
    const setAuthModalState = useSetRecoilState(authModalState);
    const handleClick = (type: "login" | "register" | "forgotPassword") => {
        setAuthModalState((prev) => ({ ...prev, type }))
    }
    const [inputs, setInputs] = useState({ email: '', displayname: '', password: '' });
    const handleChangeINP = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        // console.log(inputs);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputs.email || !inputs.password || !inputs.displayname) return toast.error("Please ensure no fields are left empty.", { position: 'top-center', autoClose: 4000, theme: 'colored' });
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if (!newUser) return;
            router.push('/');
        } catch (error: any) {
            toast.error(error.message, { position: 'top-center', autoClose: 4000, theme: 'colored' });
        }
    }

    useEffect(() => {
        if (error) toast.error(error.message, { position: 'top-center', autoClose: 4000, theme: 'colored' });
    }, [error])

    return <form className='space-y-6 px-6 py-4' onSubmit={handleRegister}>
        <h3 className='text-xl font-medium text-white'>Register to Leetcode</h3>
        <div>
            <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'> Email</label>
            <input type="email" name='email' id='email' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 mb-4 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='abc@gmail.com' onChange={handleChangeINP} />

            <label htmlFor="displayname" className='text-sm font-medium block mb-2 text-gray-300'>Display Name</label>
            <input type="displayname" name='displayname' id='displayname' className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 mb-4 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' placeholder='Name' onChange={handleChangeINP} />

            <label htmlFor="password" className='text-sm font-medium block mb-2 text-gray-300'>Password</label>
            <input type="password" name='password' id='password'
                className='border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white' onChange={handleChangeINP}
                placeholder='* * * * * *' />
        </div>
        <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-color-brand-orange hover:bg-color-brand-orange-s'>
            {loading ? "Register in process" : "Register"}
        </button>
        <div className='text-sm font-medium text-gray-300'>
            Already have an account?{" "}
            <a href='#' className='text-blue-700 hover:underline' onClick={() => handleClick("login")}>Log in</a>
        </div>
    </form>
}

export default Signup;





