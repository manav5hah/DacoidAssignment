import * as React from 'react';
import { Link } from 'react-router-dom';

function Goals() {
    return (
        <div className='m-4 h-screen'>
            <div className='font-semibold text-xl mt-6 flex justify-center'>
                What are your goals?
            </div>
            <form className=''>
                <div class="inline-flex items-center mt-12 w-full bg-[#F1F1F1] h-14 rounded-xl">
                    <label class="flex justify-center items-center font-semibold text-sm text-black cursor-pointer select-none ml-5" htmlFor="check">
                        Weight Loss
                    </label>
                    <label className='relative flex items-center rounded-full cursor-pointer ml-auto mr-4'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-[#9FB2FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
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
                </div>
                <div class="inline-flex items-center mt-4 w-full bg-[#F1F1F1] h-14 rounded-xl">
                    <label class="flex justify-center items-center font-semibold text-sm text-black cursor-pointer select-none ml-5" htmlFor="check">
                        Muscle Gain
                    </label>
                    <label className='relative flex items-center rounded-full cursor-pointer ml-auto mr-4'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-[#9FB2FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
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
                </div>
                <div class="inline-flex items-center mt-4 w-full bg-[#F1F1F1] h-14 rounded-xl">
                    <label class="flex justify-center items-center font-semibold text-sm text-black cursor-pointer select-none ml-5" htmlFor="check">
                    Flexibility and Mobility
                    </label>
                    <label className='relative flex items-center rounded-full cursor-pointer ml-auto mr-4'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-[#9FB2FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
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
                </div>
                <div class="inline-flex items-center mt-4 w-full bg-[#F1F1F1] h-14 rounded-xl">
                    <label class="flex justify-center items-center font-semibold text-sm text-black cursor-pointer select-none ml-5" htmlFor="check">
                    General Fitness
                    </label>
                    <label className='relative flex items-center rounded-full cursor-pointer ml-auto mr-4'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-[#9FB2FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
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
                </div>
                <div class="inline-flex items-center mt-4 w-full bg-[#F1F1F1] h-14 rounded-xl">
                    <label class="flex justify-center items-center font-semibold text-sm text-black cursor-pointer select-none ml-5" htmlFor="check">
                    Event - specific training
                    </label>
                    <label className='relative flex items-center rounded-full cursor-pointer ml-auto mr-4'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-[#9FB2FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
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
                </div>
                <div class="inline-flex items-center mt-4 w-full bg-[#F1F1F1] h-14 rounded-xl">
                    <label class="flex justify-center items-center font-semibold text-sm text-black cursor-pointer select-none ml-5" htmlFor="check">
                    Mindfulness and Mental Health
                    </label>
                    <label className='relative flex items-center rounded-full cursor-pointer ml-auto mr-4'>
                        <input type="checkbox" id="horns" name="horns" className="h-6 w-6 before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-[#9FB2FF] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-rose-700 checked:bg-rose-500 checked:before:bg-rose-700" />
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
                </div>
            </form>
                <Link to='/tracker'><button className='mt-44 rounded-xl w-full h-14 font-semibold text-white bg-gradient-to-l from-[#7B91FF] to-[#95BEFF]' type='submit'>Confirm</button></Link>
        </div>
    );
}

export default Goals;