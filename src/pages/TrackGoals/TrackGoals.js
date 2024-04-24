import * as React from 'react';
import ManRunning from "./ManRunning.png"
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import "./TrackGoals.css";


function TrackGoals() {
    return (
    <div className='m-4 h-screen'>
        <Link className='text-base underline decoration-[#9FB2FF] text-[#9FB2FF] flex justify-end' to="/signup">Skip</Link>
        <div className='mx-8 mt-[4.5rem] flex justify-center'>
            <img className='h-72 w-72' src={ManRunning} />
        </div>
        <div className='font-semibold text-xl mt-14'>
            Track Your Goal
        </div>
        <div className='font-medium font-base mt-1 text-[#787878]'>
        Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals
        </div>
        <div className='flex justify-end mt-24'>
                <Link className='w-16 rounded-full goals-circle-border' to="/burns" >
                    <ChevronRightIcon className='p-1 rounded-full w-16 text-white bg-gradient-to-r from-white to-[#89A1FF]' />
                </Link>
        </div>
    </div>
    );
}

export default TrackGoals;