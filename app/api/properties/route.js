import { NextResponse } from 'next/server'
import { sleep } from '@/utils/sleep';
const properties = []

export async function POST(request) {
    const res = await request.json()
    // Simulate server-side delay
    await sleep(1500);
    properties.push(res)


    return NextResponse.json({ res })
}

export async function GET() {
    // Simulate server-side delay
    await sleep(1500);
    return NextResponse.json(properties);
}