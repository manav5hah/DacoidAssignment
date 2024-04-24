import * as React from 'react';
import ManCycling from './ManCycling.png'
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import "./Burns.css";


function TrackGoals() {
    return (
    <div className='m-4 h-screen'>
        <Link className='text-base underline decoration-[#9FB2FF] text-[#9FB2FF] flex justify-end' to="/signup">Skip</Link>
        <div className=' mt-[4.5rem] flex justify-center'>
            <img className='h-72' src={ManCycling} />
        </div>
        <div className='font-semibold text-xl mt-14'>
            Get Burn
        </div>
        <div className='font-medium font-base mt-1 text-[#787878]'>
        Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
        </div>
        <div className='flex justify-end mt-24'>
                <Link className='w-16 rounded-full burns-circle-border' to="/signup" >
                    <ChevronRightIcon className='p-1  rounded-full w-16 text-white bg-gradient-to-r from-white to-[#89A1FF]' />
                </Link>
        </div>
    </div>
    );
}

export default TrackGoals;