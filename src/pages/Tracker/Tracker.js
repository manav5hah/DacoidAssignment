import * as React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { ExclamationTriangleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import WomanLifting from "./WomanLifting.png";
import WomanYoga from "./WomanYoga.png";
import WomanLunges from "./WomanLunges.png";
import AnalyticsIcon from "./analytics.svg";
import HomeIcon from "./Home.svg";
import CameraIcon from "./Camera.svg";
import ProfileIcon from "./Profile.svg";
import { Link } from 'react-router-dom';


function Tracker() {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Tooltip
    );

    const options = {
        responsive: true,
        plugins: {},
    };

    const labels = ['12:00', '12:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.number.int({ min: 0, max: 900 })),
                backgroundColor: '#8099FF',
            }
        ],
    };

    return (
        <div className='m-4 h-screen'>
            <div className='flex items-center font-semibold text-xl mt-6'>
                <Link to='/goals' className='w-5 h-5 bg-gray-200 rounded-md justify-start'><ChevronLeftIcon className='' /></Link>
                <span className='flex justify-center w-full'>Workout Tracker</span>
            </div>
            <Link className='mt-20 ' to="/schedule">
                <Bar className='w-full' options={options} data={data} />
            </Link>
            <div className='flex items-center justify-center rounded-xl mt-6 p-2 bg-gradient-to-r from-[#819DFF]/[.28] to-white'>
                <span className='p-2'><ExclamationTriangleIcon className='text-[#819DFF] w-6 h-6' /></span>
                <span className='text-xs'>You've burned fewer calories than yesterday. Time to get moving! </span>
            </div>
            <div className='flex items-center mt-14'>
                <span className='justify-start font-semibold text-base'>Upcoming Workout</span>
                <span className='justify-end font-medium text-gray-400 ml-auto text-sm'>See more</span>
            </div>
            <div className='mt-4 flex items-center shadow-lg rounded-xl'>
                <div className='rounded-full w-12 h-12 bg-[#819AFF]/[0.15] m-4'>
                    <img src={WomanLifting} className='' />
                </div>
                <div className=''>
                    <div className='mt-4 font-medium text-sm'>
                        Full Body Workout
                    </div>
                    <div className='mb-6 text-gray-400 text-xs font-medium'>
                        Today 3pm
                    </div>
                </div>
                <div className='ml-auto mr-4'>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8099FF]"></div>
                    </label>
                </div>
            </div>
            <div className='mt-4 flex items-center shadow-lg rounded-xl'>
                <div className='rounded-full w-12 h-12 overflow-hidden bg-[#819AFF]/[0.15] m-4'>
                    <img src={WomanYoga} className='' />
                </div>
                <div className=''>
                    <div className='mt-4 font-medium text-sm'>
                        Upper Body Workout
                    </div>
                    <div className='mb-6 text-gray-400 text-xs font-medium'>
                        4 Feb, 3:30 pm
                    </div>
                </div>
                <div className='ml-auto mr-4'>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8099FF]"></div>
                    </label>
                </div>
            </div>
            <div className='mt-4 flex items-center justify-start font-semibold text-base'>
                What Do You Want to Train
            </div>
            <div className='flex items-center mt-4 h-32 rounded-xl bg-[#8CB1FF]/[0.6]'>
                <div className=''>
                    <div className='mx-4 my-2 font-medium text-sm'>
                        Full Body Workout
                    </div>
                    <div className='mx-4 my-2 font-medium text-xs'>
                        Arms
                    </div>
                    <div className='mx-4 my-2 font-medium text-xs'>
                        Chest
                    </div>
                    <div className='mx-4 my-2 font-medium text-xs'>
                        Legs
                    </div>
                </div>
                <div className='w-28 h-28 rounded-full bg-white/[0.48] ml-auto m-4'>
                    <img className='' src={WomanLunges} />
                </div>

            </div>
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

export default Tracker;