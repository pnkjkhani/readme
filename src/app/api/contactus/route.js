import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
export const POST = async  (req, res)=> {
    const {name,email,subject,body}=await req.json()
    // return new NextResponse("working",{status:200})
    console.log(req.body);
    try {
        await connectDb();
        const contact = new Contact(
            {name,email,subject,body});
        try {  
            await contact.save()
            return new NextResponse("Your query has been sent", { status: 201 })
        } catch (error) {
            return new NextResponse(error.message, { status: 500 })
        }
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}