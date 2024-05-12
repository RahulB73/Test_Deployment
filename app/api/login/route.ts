import connect from '@/app/utils/db';
import Client from '@/app/models/Client';
import { NextResponse } from "next/server";


export async function POST(request: Request) {

    const { email, password } = await request.json();

    if (!email || !password) {
        return new NextResponse('Email and password are required', { status: 400 });
    }

    try {
        await connect();
        const client = await Client.findOne({ email });

        if (!client) {
            return new NextResponse('Invalid Credentials', { status: 400 });
        }

        const isMatch = client.password;

        if (isMatch != password) {
            return new NextResponse('Invalid Credentials', { status: 400 });
        }

        return new NextResponse('Client is Logged In', { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, { status: 500 });
    }
}

