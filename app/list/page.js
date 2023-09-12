"use client"
import Lists from "@/views/forms/lists"
import axios from "axios";


const getList = async () => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`)
    return await res?.data
}

export default async function Home() {

    const lists = await getList()

    return (
        <main className='p-4 bg-[#F5F5F5] min-h-screen' >
            <div className='bg-white rounded-lg shadow-sm  min-h-[95vh] '>
                <div className="p-4" >
                    <Lists lists={lists} />
                </div>
            </div>
        </main>

    )
}

