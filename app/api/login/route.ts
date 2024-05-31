import connect from '@/app/utils/db';
import Client from '@/app/models/Client';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest, res: NextResponse) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return new NextResponse('Invalid Email and Password', { status: 400 })
    }


    try {
        await connect();
        const client = await Client.findOne({ email }).exec();

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

