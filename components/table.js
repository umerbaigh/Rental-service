export default function Table({ headers, data }) {
    return (
        <div className=" overflow-x-auto   border rounded-lg shadow-sm">
            <table className="min-w-full divide-y" style={{ borderRadius: "10px" }}>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                className="px-2 py-3 text-center text-xs leading-4 font-medium text-gray-600 tracking-wider"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white">
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-6 border-r border-b py-4 whitespace-no-wrap text-center text-sm leading-5 font-medium text-gray-900"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
