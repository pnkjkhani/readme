import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from 'bcryptjs'
export const POST = async (req, res) => {
    // return new NextResponse("working",{status:200})
    const { name, email, password } = await req.json();
    if (name && email && password) {
        try {
            await connectDb();
            const hashedPassword = await bcrypt.hash(password, 5);
            const newUser = new User({
                name,
                email,
                password: hashedPassword,
            });
            try {
                await newUser.save()
                return new NextResponse("User has been created", { status: 201 })
            } catch (error) {
                return new NextResponse("server error", { status: 500 })
            }

        } catch (error) {
            return new NextResponse("Server Error", { status: 500 })
        }
    } else {
        return new NextResponse("Please provide all credentials", { status: 403 })

    }
}