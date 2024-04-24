import * as React from 'react';
import GoogleImage from './Google.svg';
import FacebookImage from './Facebook.svg';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div className='m-4 h-screen'>
            <div className='font-semibold text-xl mt-[1.5rem]'>
                Create an account
            </div>
            <form className='mt-[2.5rem]' >
                <input type="text" id="first" placeholder='First Name' className="h-12 my-3 w-full p-5 text-sm placeholder:text-sm placeholder:font-semibold rounded-xl border-0 bg-[#F1F1F1] text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700" required />
                <input type="text" id="last" placeholder='Last Name' className="h-12 my-3 w-full p-5 text-sm placeholder:text-sm placeholder:font-semibold rounded-xl border-0 bg-[#F1F1F1] text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700" required />
                <input type="email" id="email" pattern=".+@example\.com" placeholder='Email' className="h-12 my-3 w-full p-5 text-sm placeholder:text-sm placeholder:font-semibold rounded-xl border-0 bg-[#F1F1F1] text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700" required />
                <input type="password" id="passsword" placeholder='Password' className="h-12 my-3 w-full p-5 text-sm placeholder:text-sm placeholder:font-semibold rounded-xl border-0 bg-[#F1F1F1] text-gray-900 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-700" required />
                <div className='flex mt-6 '>
                    <label className='relative flex items-center rounded-full cursor-pointer'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
                        <span
                            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </label>
                    <label for="terms-condition" className='text-sm leading-6 ml-[0.5rem] font-medium text-gray-500'>By proceeding, I agree to all <a href='#' className='underline decoration-[#9FB2FF] text-[#9FB2FF]'>T&C</a> and  <a href='#' className='underline decoration-[#9FB2FF] text-[#9FB2FF]'>Privacy Policy</a></label>
                </div>
                <Link to='/goals'><button className='mt-24 rounded-xl w-full h-12 font-semibold text-white bg-gradient-to-l from-[#7B91FF] to-[#95BEFF]' type='submit'>Create an account</button></Link>
            </form>
            <div className='mt-8 w-full text-center border leading-[0.001em] border-gray-100 text-sm'><span className='bg-white px-3 font-medium text-gray-500'>Or</span></div>
            <div className='flex justify-center'>
                <button className='border border-gray-300 rounded-lg w-10 h-10 flex justify-center items-center mt-8 mr-2'><img className='w-5 h-5' src={GoogleImage} /></button>
                <button className='border border-gray-300 rounded-lg w-10 h-10 flex justify-center items-center mt-8 ml-2'><img className='w-5 h-5' src={FacebookImage} /></button>
            </div>
            <div className='flex justify-center text-sm mt-6'>
            Already have an account? <Link className="underline decoration-[#9FB2FF] text-[#9FB2FF] ml-1" to='/login'>Login</Link>
            </div>
        </div>
    );
}

export default Signup;