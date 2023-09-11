"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '@/components';
import { Tabs } from '@/constants/data';
import { TabComp } from '@/components';

const schema = Yup.object().shape({
    lender: Yup.array()
        .of(Yup.string().required('Lender is required'))
        .min(1, 'At least one lender is required'),
    loanAmount: Yup.number().required('Loan amount is required'),
    startDate: Yup.date().required('Start date is required'),
    rateType: Yup.string().required('Rate type is required'),
    interestRate: Yup.number().required('Interest rate is required'),
    capitalization: Yup.string().required('Capitalization is required'),
    interestOnlyPeriod: Yup.number().required('Interest-only period is required'),
    term: Yup.number().required('Term is required'),
    amortization: Yup.number().required('Amortization is required'),
    fees: Yup.number().required('Fees is required'),
});

export default function FinancingForm({ onNextStep, onFormDataChange, formData, onPreviousStep }) {
    const [lenders, setLenders] = useState(formData.lender || [''])
    const [tabIndex, setTabIndex] = useState(1);

    // Initialize formik form handling with validation schema

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formData,
        validationSchema: schema,
        onSubmit: async (values) => {
            onFormDataChange(values); // Update form data
            await onNextStep(); // Proceed to the next step
        },
    });

    const { errors, touched, values, handleChange, handleSubmit, setFieldValue } = formik;
    // Function to add a lender input field
    const addLender = () => {
        setLenders([...lenders, '']);
    };
    // Function to remove a lender input field
    const removeLender = (index) => {
        if (lenders.length > 1) {
            const updatedLenders = [...lenders];
            updatedLenders.splice(index, 1);
            setLenders(updatedLenders);
        }
    };

    return (
        <div>
            <p className="text-xl font-semibold">Financing</p>
            <TabComp Tabs={Tabs} tabIndex={tabIndex} setTabIndex={setTabIndex} />
            {tabIndex === 1 && <form onSubmit={handleSubmit} method="POST">
                <div className='mt-4' >
                    <div className='flex  gap-2' >
                        <div className='lg:w-[50%] w-full' >
                            {lenders.map((lender, index) => (
                                <div key={index}  >
                                    <Input
                                        type="text"
                                        name={`lender[${index}]`}
                                        id={`lender[${index}]`}
                                        label={`Lender ${index + 1}`}
                                        value={lender}
                                        onChange={(e) => {
                                            const updatedLenders = [...lenders];
                                            updatedLenders[index] = e.target.value;
                                            setLenders(updatedLenders);
                                            setFieldValue(`lender[${index}]`, e.target.value);
                                        }}
                                        error={
                                            touched.lender &&
                                            errors.lender &&
                                            errors.lender[index]
                                        }
                                    />
                                    {index !== lenders.length - 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeLender(index)}
                                            className='text-[12px] text-red-700 font-semibold  cursor-pointer mb-2'
                                        >
                                            Remove
                                        </button>
                                    )}
                                </div>
                            ))}

                        </div>
                        <div className='h-12 w-12 mt-[27px]' >

                            <button
                                type="button"
                                onClick={addLender}
                                className='border h-full w-full  rounded-md '
                            >
                                +
                            </button>
                        </div>

                    </div>
                    <div className='grid lg:grid-cols-2 grid-cols-1' >

                        <div className='grid lg:grid-cols-2 grid-cols-1  ' style={{ gap: '10px' }} >
                            <Input
                                type="number"
                                name="loanAmount"
                                id="loanAmount"
                                label="Loan Amount"
                                value={values.loanAmount}
                                onChange={handleChange}
                                error={touched.loanAmount && errors.loanAmount}
                            />

                            <Input
                                type="date"
                                name="startDate"
                                id="startDate"
                                label="Start Date"
                                value={values.startDate}
                                onChange={handleChange}
                                error={touched.startDate && errors.startDate}
                            />



                        </div>
                    </div>

                    <div className='mt-2'>
                        <p className="text-[12px] text-gray-400 font-medium">Type of Rate</p>
                        <div>
                            <div className='mt-2 flex' >
                                <button
                                    type="button"
                                    className={`w-[180px] px-4 py-2 border rounded-l-lg ${values.rateType === 'Fixed' ? 'bg-gray-200 text-black font-medium' : ''}`}
                                    onClick={() => {
                                        setFieldValue('rateType', 'Fixed');
                                    }}
                                >
                                    Fixed
                                </button>
                                <button
                                    type="button"
                                    className={`w-[180px] px-4 py-2 border rounded-r-lg ${values.rateType === 'Variable' ? 'bg-gray-200 text-black font-medium' : ''}`}
                                    onClick={() => {
                                        setFieldValue('rateType', 'Variable');
                                    }}
                                >
                                    Variable
                                </button>
                            </div>
                            {touched.rateType && errors.rateType && (
                                <p className=" text-red-500 text-[12px] font-medium">{errors.rateType}</p>
                            )}
                        </div>
                    </div>

                    <div className='lg:w-[34%] w-full' >
                        <Input
                            type="number"
                            name="interestRate"
                            id="interestRate"
                            label="Interest Rate"
                            value={values.interestRate}
                            onChange={handleChange}
                            error={touched.interestRate && errors.interestRate}
                        />
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-2'>
                        <div className='mt-2'>
                            <p className="text-[12px] text-gray-400 font-medium">Interest Capitalization</p>
                            <div>
                                <div className=' flex' >
                                    <button
                                        type="button"
                                        className={`w-full h-[50px] px-4 py-2 border rounded-l-lg ${values.capitalization === 'Monthly' ? 'bg-gray-200 text-black font-medium' : ''}`}
                                        onClick={() => {
                                            setFieldValue('capitalization', 'Monthly');
                                        }}
                                    >
                                        Monthly
                                    </button>
                                    <button
                                        type="button"
                                        className={`w-full px-4 py-2 border rounded-r-lg ${values.capitalization === 'Semi-Annual' ? 'bg-gray-200 text-black font-medium' : ''}`}
                                        onClick={() => {
                                            setFieldValue('capitalization', 'Semi-Annual');
                                        }}
                                    >
                                        Semi-Annual
                                    </button>
                                </div>
                                {touched.capitalization && errors.capitalization && (
                                    <p className=" text-red-500 text-[12px] font-medium">{errors.capitalization}</p>
                                )}
                            </div>
                        </div>
                        <div>
                            <Input
                                type="number"
                                name="interestOnlyPeriod"
                                id="interestOnlyPeriod"
                                label="Interest Only Period"
                                value={values.interestOnlyPeriod}
                                onChange={handleChange}
                                error={touched.interestOnlyPeriod && errors.interestOnlyPeriod}
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-2 gap-4' >
                        <Input
                            type="number"
                            name="term"
                            id="term"
                            label="Term"
                            value={values.term}
                            onChange={handleChange}
                            error={touched.term && errors.term}
                        />
                        <Input
                            type="number"
                            name="amortization"
                            id="amortization"
                            label="Amortization"
                            value={values.amortization}
                            onChange={handleChange}
                            error={touched.amortization && errors.amortization}
                        />
                        <Input
                            type="number"
                            name="fees"
                            id="fees"
                            label="Financing Fees"
                            value={values.fees}
                            onChange={handleChange}
                            error={touched.fees && errors.fees}
                        />
                    </div>

                </div>
                <div className='flex mt-4 float-right gap-4' >
                    <button className='font-semibold' onClick={onPreviousStep} >
                        Back
                    </button>
                    <Button  >
                        Continue
                    </Button>
                </div>

            </form >}
            {tabIndex === 2 && (
                <div className='mt-4' >
                    <h1>Under Construction</h1>
                </div>
            )}
        </div >
    );
}
