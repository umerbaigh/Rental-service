export default function Input({
    label,
    type,
    name,
    placeholder,
    error,
    onChange,
    value,
    className
}) {
    const inputClassName = `block w-full pt-3 pb-3 rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} py-1.5 pl-3 pr-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-[1px] focus:ring-inset ${error ? 'focus:ring-red-500' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6 ${className}`;

    return (
        <div>
            <div className="relative rounded-lg mt-2">
                <div className="mt-2 mb-1">
                    <p className="text-[12px] text-gray-400 font-medium">{label}</p>
                    <input
                        type={type}
                        name={name}
                        id={name}
                        autoComplete="WHAT_IS_THE_AUTO_COMPLETE"
                        className={inputClassName}
                        placeholder={placeholder}
                        onChange={onChange}
                        error={error}
                        value={value}
                    />
                    {error && (
                        <p className=" text-red-500 text-[12px] font-medium">{error}</p>
                    )}
                </div>
            </div>
        </div>
    )
}
