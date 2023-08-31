import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
export const GET = async (req) => {
    const url = new URL(req.url)
    const email = url.searchParams.get('email')
    try {
        await connectDb();
        let blog = await Blog.find(email && { useremail: email });
        return new NextResponse(JSON.stringify(blog), { status: 200 })
    } catch (error) {
        return new NextResponse("Database Error", { status: 500 })
    }
}

export const POST = async (req) => {

    const { title, desc, img, content, username, useremail } = await req.json()
    if (title && desc && img && content && username && useremail) {
        try {
            await connectDb();
            const blog = new Blog(
                { title, desc, img, content, username, useremail });
            try {
                await blog.save()
                return new NextResponse("Blog has been created", { status: 201 })
            } catch (error) {
                return new NextResponse(error.message, { status: 500 })
            }
        } catch (error) {
            return new NextResponse("Database Error", { status: 500 })
        }
    }else{
        return new NextResponse("Required All fields",{  status: 403 })
    }

}


