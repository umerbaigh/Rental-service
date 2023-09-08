"use client"
import React, { useState } from 'react'
import { Stepper } from '@/components'
import { Step1Form, Step2Form, Step3Form, Congratulations } from '@/views/forms'
import { Steps, Form1InitialValues, Form3InitialValues } from '@/constants/data';

export default function page() {
    const [step, setStep] = useState(0);
    const [stepStatus, setStepStatus] = useState(Steps);
    const [form1Data, setForm1Data] = useState(Form1InitialValues);
    const [form3Data, setForm3Data] = useState(Form3InitialValues);


    const handleNextStep = () => {
        if (step < stepStatus.length - 1) {
            setStep(step + 1);

            setStepStatus((prevStatus) => {
                const updatedStatus = [...prevStatus];
                updatedStatus[step].status = 'complete';
                updatedStatus[step + 1].status = 'current';
                return updatedStatus;
            });
        }
    };

    const handlePreviousStep = () => {
        if (step > 0) {
            setStep(step - 1);

            setStepStatus((prevStatus) => {
                const updatedStatus = [...prevStatus];
                updatedStatus[step].status = 'upcoming';
                updatedStatus[step - 1].status = 'current';
                return updatedStatus;
            });
        }
    };

    return (
        <div className='bg-white rounded-lg shadow-sm grid lg:grid-cols-4 md:col-span-3 col-span-2 min-h-[95vh] '>
            <div className='md:border-r border-none ' >
                <div className='p-10' >
                    <Stepper steps={stepStatus} />
                </div>
            </div>
            <div className='lg:col-span-3 md:col-span-2 col-span-1 overflow-x-auto  lg:p-8 md:p-6 p-4'>
                {step === 0 && <Step1Form onNextStep={handleNextStep} formData={form1Data}
                    onFormDataChange={(newFormData) => setForm1Data(newFormData)} />}

                {step === 1 && <Step2Form onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep} />}

                {step === 2 && <Step3Form onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep} formData={form3Data}
                    onFormDataChange={(newFormData) => setForm3Data(newFormData)} />}

                {step === 3 && <Congratulations onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />}
            </div>
        </div>
    )
}
