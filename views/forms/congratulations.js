'use client'
import React from 'react';
import { useRouter } from 'next/navigation'

export default function Congratulations({ onPreviousStep }) {
    const router = useRouter()
    return (
        <div className="flex rounded-lg flex-col p-4 items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
            <img
                src="/assets/confetti.png"
                alt="Congratulations Image"
                className="max-w-[300px] lg:ml-12 ml-0 rounded-lg"
            />
            <h1 className="text-4xl text-white mt-6 font-bold">Congratulations!</h1>
            <p className="text-lg text-white text-center mt-2">
                You've achieved something amazing.
            </p>
            <button className='font-semibold mt-2  p-3 rounded-md bg-secondary hover:bg-primary text-white' onClick={() => router.push("/list")} >
                View list
            </button>
            <button className='font-semibold mt-2' onClick={onPreviousStep} >
                Back
            </button>

        </div >
    );
};


