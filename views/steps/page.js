"use client"
import React, { useState } from 'react'
import { Stepper } from '@/components'
import { Step1Form, Step2Form, Step3Form, Congratulations } from '@/views/forms'
import { Steps, Form1InitialValues, Form3InitialValues } from '@/constants/data';

export default function Page() {
    const [step, setStep] = useState(0); // State for the current step
    const [stepStatus, setStepStatus] = useState(Steps); // State for step status
    const [form1Data, setForm1Data] = useState(Form1InitialValues); // State for form1 data
    const [form3Data, setForm3Data] = useState(Form3InitialValues); // State for form3 data

    // Function to handle the next step in the form
    const handleNextStep = () => {
        if (step < stepStatus.length - 1) {
            setStep(step + 1);
            // Update step status for the current and upcoming steps
            setStepStatus((prevStatus) => {
                const updatedStatus = [...prevStatus];
                updatedStatus[step].status = 'complete';
                updatedStatus[step + 1].status = 'current';
                return updatedStatus;
            });
        }
    };
    // Function to handle the previous step in the form
    const handlePreviousStep = () => {
        if (step > 0) {
            setStep(step - 1);
            // Update step status for the current and previous steps
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
            <div className='border-r ' >
                <div className='p-10' >
                    <Stepper steps={stepStatus} />
                </div>
            </div>
            <div className='lg:col-span-3 md:col-span-2 col-span-1 overflow-x-auto  lg:p-8 md:p-6 p-4'>
                {step === 0 && <Step1Form onNextStep={handleNextStep} formData={form1Data}
                    onFormDataChange={(newFormData) => setForm1Data(newFormData)} />}

                {step === 1 && <Step2Form onNextStep={handleNextStep}
                    onPreviousStep={handlePreviousStep} />}

                {step === 2 && <Step3Form onNextStep={handleNextStep} form1Data={form1Data}
                    onPreviousStep={handlePreviousStep} formData={form3Data}
                    onFormDataChange={(newFormData) => setForm3Data(newFormData)} />}

                {step === 3 && <Congratulations onNextStep={handleNextStep} onPreviousStep={handlePreviousStep} />}
            </div>
        </div>
    )
}
