import React from 'react';

export default function SelectField({ options, label, onChange, value, name, error }) {
    const inputClassName = `block w-full pt-3 pb-3 h-[50px] rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} py-1.5 pl-2 pr-6 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[1px] focus:ring-inset ${error ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`;

    return (
        <div className="mt-2">
            <p className="text-[12px] text-gray-400 font-medium">{label}</p>
            <select
                className={inputClassName}
                onChange={onChange}
                value={value}
                name={name}
            >
                <option  defaultValue="Select Country">Select {label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            {error && (
                <p className=" text-red-500 text-[12px] font-medium">{error}</p>
            )}
        </div>
    );
};

