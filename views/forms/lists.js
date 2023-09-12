"use client";
import React from 'react';
import { useRouter } from 'next/navigation'
import { Button, Table } from '@/components';
import { ListTableHeader } from '@/constants/data';

export default function Lists({ lists }) {
    const router = useRouter()
    return (
        <div>
            <div className='flex items-center lg:flex-nowrap flex-wrap justify-between' >
                <p className="text-xl font-semibold ">Properties List</p>

            </div>
            <div className='mt-6 w-full' >
                {lists ? (
                    <Table headers={ListTableHeader} data={lists} isChange={true} />

                ) : (
                    <div className='flex items-center lg:flex-nowrap flex-wrap justify-between' >
                        <p className="text-xl font-semibold ">No Property Added</p>

                    </div>
                )}

            </div>
            <div className='flex mt-4 float-right ' >
                <Button onClick={() => router.push("/")}   >
                    Add More
                </Button>

            </div>
        </div>
    );
}

