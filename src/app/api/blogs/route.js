import connectDb from "@/utils/db";
import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import prisma from "@/utils/connect";
export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const email = searchParams.get('email')
    const POST_PER_PAGE = 3;
    const PAGE = searchParams.get('page');
    const CAT = searchParams.get('cat');
    console.log(CAT);
    if (email) {
        try {
            await connectDb();
            let blog = await Blog.find(email && { useremail: email });
            return new NextResponse(JSON.stringify(blog), { status: 200 })
        } catch (error) {
            return new NextResponse("Database Error", { status: 500 })
        }
    }

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (PAGE - 1),
        where: {
            ...(CAT && { catSlug: CAT })
        },
    }

    try {
        const [posts, count] = await prisma.$transaction(
            [
                prisma.Post.findMany(query),
                prisma.Post.count({where:query.where})
            ]
        );
        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({ message: "something went wrong" }, { status: 500 }));
    };
}

export const POST = async (req) => {

    const { title, desc, img, content, username, useremail, userprofilepic } = await req.json()
    if (title && desc && img && content && username && useremail) {
        try {
            await connectDb();
            const blog = new Blog(
                { title, desc, img, content, username, useremail, userprofilepic });
            try {
                await blog.save()
                return new NextResponse("Blog has been created", { status: 201 })
            } catch (error) {
                return new NextResponse(error.message, { status: 500 })
            }
        } catch (error) {
            return new NextResponse("Database Error", { status: 500 })
        }
    } else {
        return new NextResponse("Required All fields", { status: 403 })
    }

}


