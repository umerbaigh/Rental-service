"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, SelectField } from '@/components';
import { countries, cities } from '@/constants/countries';

const schema = Yup.object().shape({
    propertyName: Yup.string().required('property name is required'),
    line: Yup.string().required('line is required'),
    country: Yup.string().required('country is required'),
    city: Yup.string().required('city is required'),
    postalCode: Yup.string().matches(/^[a-zA-Z0-9]+$/, 'Only alphabets and numbers are allowed').required('postal code is required'),
    closeDate: Yup.date().required('close date is required')

});

export default function PropertyDetailForm({ onNextStep, onFormDataChange, formData }) {
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

    const { errors, touched, values, handleChange, handleSubmit } = formik;
    return (
        <div>
            <p className="text-xl font-semibold">Property details</p>
            <p className="text-sm font-medium mt-2">Property Detail</p>
            <form onSubmit={handleSubmit} method="POST">
                <div className='mt-4' >

                    <Input
                        type="text"
                        name="propertyName"
                        id="propertyName"
                        label="Property Name"
                        value={values.propertyName}
                        onChange={handleChange}
                        error={touched.propertyName && errors.propertyName}
                    />


                    <Input
                        type="text"
                        name="line"
                        id="line"
                        label="Address Line"
                        value={values.line}
                        onChange={handleChange}
                        error={touched.line && errors.line}
                    />
                    <div className='grid lg:grid-cols-3 md:grid-cols-3  sm:grid-cols-2 grid-col-1' style={{ gap: '10px' }} >

                        <SelectField
                            type="text"
                            name="country"
                            id="country"
                            label="Country"
                            value={values.country}
                            onChange={handleChange}
                            error={touched.country && errors.country}
                            options={countries}
                        />
                        <SelectField
                            type="text"
                            name="city"
                            id="city"
                            label="City"
                            value={values.city}
                            onChange={handleChange}
                            error={touched.city && errors.city}
                            options={cities}
                        />

                        <Input
                            type="text"
                            name="postalCode"
                            id="postalCode"
                            label="Postal Code"
                            value={values.postalCode}
                            onChange={handleChange}
                            error={touched.postalCode && errors.postalCode}
                            className="uppercase"
                        />

                    </div>

                    <Input
                        type="date"
                        name="closeDate"
                        id="closeDate"
                        label="Close Date"
                        value={values.closeDate}
                        onChange={handleChange}
                        error={touched.closeDate && errors.closeDate}
                    />
                </div>
                <div className='flex mt-4 float-right' >
                    <Button>
                        Continue
                    </Button>
                </div>

            </form>
        </div>
    );
}
