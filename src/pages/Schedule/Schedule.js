import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/16/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

import MobileDayView from '../MobileDayView/MobileDayView';
import AnalyticsIcon from "./analytics.svg";
import HomeIcon from "./Home.svg";
import CameraIcon from "./Camera.svg";
import ProfileIcon from "./Profile.svg";

function Schedule() {
    return (
        <div className='m-4 h-screen'>
            <div className='flex items-center font-semibold text-xl mt-6'>
                <Link to='/tracker' className='w-5 h-5 bg-gray-200 rounded-md justify-start'><ChevronLeftIcon className='' /></Link>
                <span className='flex justify-center w-full'>Workout Schedule</span>
            </div>
            <div className='flex justify-center items-center mt-4'>
                <ChevronLeftIcon className='w-4 h-4' />
                <span className='text-xs font-semibold mx-3'>Feb 2024</span>
                <ChevronRightIcon className='w-4 h-4' />
            </div>

            <div className='mt-4 w-full flex justify-center items-center'>
                <div className='rounded-xl w-16 h-20 mr-2'>
                    <div className='mt-2 text-sm mx-auto flex justify-center'>Sun</div>
                    <div className='text-2xl mx-auto flex justify-center'>5</div>
                </div>
                <div className='rounded-xl w-16 h-20 mr-2 bg-gradient-to-l from-[#8DA4FF] to-[#D1DBFF]'>
                    <div className='mt-2 text-sm text-white mx-auto flex justify-center'>Mon</div>
                    <div className='text-2xl text-white mx-auto flex justify-center'>6</div>
                </div>
                <div className='rounded-xl w-16 h-20 mr-2'>
                    <div className='mt-2 text-sm mx-auto flex justify-center'>Tue</div>
                    <div className='text-2xl mx-auto flex justify-center'>7</div>
                </div>
                <div className='rounded-xl w-16 h-20 mr-2'>
                    <div className='mt-2 text-sm mx-auto flex justify-center'>Wed</div>
                    <div className='text-2xl mx-auto flex justify-center'>8</div>
                </div>
                <div className='rounded-xl w-16 h-20 mr-2'>
                    <div className='mt-2 text-sm mx-auto flex justify-center'>Thu</div>
                    <div className='text-2xl mx-auto flex justify-center'>9</div>
                </div>
            </div>

            <MobileDayView />
            <div className='fixed bottom-32 z-10 right-12 rounded-full bg-gradient-to-r from-[#E9B1E0] to-[#D3A5F2] h-16 w-16 flex justify-center items-center'><PlusIcon className='text-white font-normal h-9 w-9' /></div>
            <div className="fixed bottom-0 z-10 w-full h-20 bg-white text-[#7F7F7F] p-4 flex items-center">
                <div className='flex items-center justify-center w-10 h-10 mt-4 mb-7'>
                    <img className='' src={HomeIcon} />
                </div>
                <div className='flex items-center justify-center w-10 h-10 mt-4 mb-7 ml-9 mr-[7.5rem]'>
                    <img className='' src={AnalyticsIcon} />
                </div>
                <div className='fixed left-[42%] bottom-12 w-16 h-16 rounded-full justify-center bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]'>
                        <div className='m-auto flex items-center justify-center w-16 h-16'>
                            <MagnifyingGlassIcon className='text-xl text-white w-5' />
                        </div>
                </div>
                <div className='flex items-center justify-center w-10 h-10 mt-4 mb-7'>
                    <img className='' src={CameraIcon} />
                </div>
                <div className='flex items-center justify-center w-10 h-10 mt-4 mb-7 ml-9'>
                    <img className='' src={ProfileIcon} />
                </div>
            </div>
        </div>
    );
}

export default Schedule;