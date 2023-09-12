import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";

export const GET = async (req,{ params }) => {
    // return new NextResponse("working",{status:200})
    // try {
    //     const {id}=params;
    //     await connectDb();
    //     let blog =await Blog.findById(id);
    //     return new NextResponse(JSON.stringify(blog), { status: 200 })
    // } catch (error) {
    //     return new NextResponse("Database Error", { status: 500 })
    // }
    try {
        const {id}=params;
        const post = await prisma.Post.findUnique(
            {
                where:{ slug: id},
                include:{user:true} 
            }
            )
        return new NextResponse(JSON.stringify(post, { status: 200 }));

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "something went wrong" }, { status: 500 }));
    };
}