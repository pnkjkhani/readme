import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";

export const GET = async (req, {params}) => {
    // return new NextResponse("working",{status:200})
    try {
        const {id}=params;
        await connectDb();
        let blog =await Blog.findById(id);
        return new NextResponse(JSON.stringify(blog), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}