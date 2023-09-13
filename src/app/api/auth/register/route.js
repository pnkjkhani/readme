// import connectDb from "@/utils/db";
import prisma from '@/utils/connect';
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
// import User from "@/models/User";
export const POST = async (req, res) => {
    // return new NextResponse("working",{status:200})
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
        return new NextResponse("Please provide all credentials", { status: 403 })
    }
    try {
        // await connectDb();
        // const isUser= await User.findOne({email});
        // if(isUser){
        //     return new NextResponse("User already exists", { status: 404 })
        // }
        // const hashedPassword = await bcrypt.hash(password, 5);
        // const newUser = new User({
        //     name,
        //     email,
        //     password: hashedPassword,
        // });
        // try {
        //     await newUser.save()
        //     return new NextResponse("User has been created", { status: 201 })
        // } catch (error) {
        //     return new NextResponse("server error", { status: 500 })
        // }
        const user = await prisma.User.findUnique({
            where: {
                email,
            },
        });
        console.log(email)

        if (user) {
            console.log(user)
            return new NextResponse("User already exists", { status: 404 })
        }
        const passwordHash = bcrypt.hashSync(password, 10);

        try {

            await prisma.User.create({
                data: {
                    name,
                    email,
                    password: passwordHash,
                },
            });
            return new NextResponse("User has been created", { status: 201 })
        } catch (error) {
            return new NextResponse("server error", { status: 500 })
        }
    } catch (error) {
        return new NextResponse("Server Error", { status: 500 })
    }

}
