import connect from '@/app/utils/db';
import Client from '@/app/models/Client';
import { NextResponse } from "next/server";


export const POST = async (request: any) => {

    const { clientName, email, password } = await request.json();
    await connect();

    const existingCient = await Client.findOne({ email });

    if (existingCient) {
        return new NextResponse("Email is already in use", { status: 400 });
    }

    const newClient = new Client({
        clientName,
        email,
        password
    })

    try {
        await newClient.save();
        return new NextResponse("Client is registered", { status: 200 });
    } catch (err: any) {
        return new NextResponse(err, {
            status: 500,
        });
    }
};

