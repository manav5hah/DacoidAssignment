import * as React from 'react';
import GoogleImage from './Google.svg';
import FacebookImage from './Facebook.svg';
import { Link } from 'react-router-dom';
import { EyeSlashIcon } from '@heroicons/react/24/outline';

function Login() {
    return (
        <div className='m-4 h-screen'>
            <div className='font-semibold text-xl mt-[1.5rem]'>
                Welcome Back
            </div>
            <form className='mt-[2.5rem]' >
                <input type="email" id="email" pattern=".+@example\.com" placeholder='Email' className="h-12 my-3 w-full p-5 text-sm placeholder:text-sm placeholder:font-semibold rounded-xl border-0 bg-[#F1F1F1] text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700" required />
                <label className='flex' ><input type="password" id="passsword" placeholder='Password' className="h-12 my-3 w-full p-5 text-sm placeholder:text-sm placeholder:font-semibold rounded-xl border-0 bg-[#F1F1F1] text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700 z-0" required /><EyeSlashIcon className='w-6 text-gray-400 absolute top-[11.8rem] right-[2rem] z-50' /></label>
                <a className='text-xs text-gray-400 ml-1 underline decoration-gray-400' href='#'>Forgot your passsword?</a>
                <Link to='/goals'><button className='mt-64 rounded-xl w-full h-12 font-semibold text-white bg-gradient-to-l from-[#7B91FF] to-[#95BEFF]' type='submit'>Sign In</button></Link>
            </form>
            <div className='mt-8 w-full text-center border leading-[0.001em] border-gray-100 text-sm'><span className='bg-white px-3 font-medium text-gray-500'>Or</span></div>
            <div className='flex justify-center'>
                <button className='border border-gray-300 rounded-lg w-10 h-10 flex justify-center items-center mt-8 mr-2'><img className='w-5 h-5' src={GoogleImage} /></button>
                <button className='border border-gray-300 rounded-lg w-10 h-10 flex justify-center items-center mt-8 ml-2'><img className='w-5 h-5' src={FacebookImage} /></button>
            </div>
            <div className='flex justify-center text-sm mt-6'>
            Don’t have an account yet? <Link className="underline decoration-[#9FB2FF] text-[#9FB2FF] ml-1" to='/signup'>Create an account</Link>
            </div>
        </div>
    );
}

export default Login;