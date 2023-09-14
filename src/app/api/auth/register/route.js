// import connectDb from "@/utils/db";
import prisma from '@/utils/connect';
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";
// import User from "@/models/User";
import nodemailer from 'nodemailer'

function generateRandom4DigitNumber() {
    const min = 1000;
    const max = 10000;
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    return randomNum;
}
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});
async function validateEmail(email) {
    try {
        const random4DigitNumber = generateRandom4DigitNumber();
        const info = await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Email verification',
            text:"please use "+ random4DigitNumber +' to verify your email address in readme.com',
        });
        if(info){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        return false
    }
};
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
        if (user) {
            return new NextResponse("User already exists", { status: 404 })
        }

        const isValidEmail = await validateEmail(email);
        if (!isValidEmail) {
            return new NextResponse("Email does not exist", { status: 409 })
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
