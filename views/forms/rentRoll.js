"use client";
import React from 'react';
import { Button, Table } from '@/components';
import { TableHeaders, TableData } from '@/constants/data';
import { ArrowDownOnSquareIcon, ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";


export default function RentRollForm({ onNextStep, onPreviousStep }) {
    return (
        <div>
            <div className='flex items-center lg:flex-nowrap flex-wrap justify-between' >
                <p className="text-xl font-semibold ">Rent Roll</p>
                <div className='flex items-center gap-2' >
                    <p className='text-xs font-semibold flex items-center gap-1 cursor-pointer  bg-none hover:bg-gray-100 p-2 rounded-md' ><ArrowDownOnSquareIcon className='h-4 w-4' /> Export template</p>
                    <p className='text-xs font-semibold flex items-center gap-1 cursor-pointer bg-none hover:bg-gray-100 p-2 rounded-md' ><ArrowUpOnSquareIcon className='h-4 w-4' /> Import file</p>

                </div>
            </div>
            <div className='mt-6 w-full' >
                <Table headers={TableHeaders} data={TableData} />

            </div>
            <div className='flex mt-4 float-right gap-4' >
                <button className='font-semibold' onClick={onPreviousStep} >
                    Back
                </button>
                <Button onClick={onNextStep} >
                    Continue
                </Button>
            </div>
        </div>
    );
}

