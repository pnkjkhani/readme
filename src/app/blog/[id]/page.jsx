import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import img from '@/../../public/blogImg.webp'
import { notFound } from 'next/navigation'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
const url = process.env.API_URL;

async function getData(id) {
  const res = await fetch(`${url}/api/blogs/${id}`, {
    cache: "no-store",
  })
  if (!res.status === 200) {
    return notFound()
  }
  return res.json()
}
//Dynamic meta data generator
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post?.title ? post?.title : "Readme.com",
    description: post?.desc ? post?.desc : "Readme.com",
  };
}

const BlogPost = async ({ params }) => {
  let id = null;
  id = params.id;
  const postData = await getData(id);
  if (postData === null) {
    return notFound()
  }
  return (
    <div className={style.container}>
      <section className="text-gray-200 body-font">
        <div className="container px-5 py-14 mx-auto flex flex-col">
          <div className=" mx-auto">
            {postData.img && <div className="rounded-lg h-64 overflow-hidden lg:flex justify-center">
              <div className="object-cover flex justify-center object-center h-full w-full lg:w-4/6">
                <Image className={style.imga} src={postData?.img} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
              </div>
            </div>}
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  {postData?.user?.image?
                    <Image className='rounded-full object-cover' src={postData?.user?.image} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
                    :
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  }
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-400 text-lg">Author: {postData?.user?.name ? postData?.user.name : "Unknown"}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">Title: {postData?.title && postData?.title}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                {/* <p className="leading-relaxed text-lg mb-4  whitespace-pre-wrap">{postData?.content ? postData?.content : postData?.body }</p> */}
                {/* <div className="leading-relaxed text-lg mb-4  whitespace-pre-wrap" dangerouslySetInnerHTML={ {__html: postData?.content}}/> */}
                <div className="leading-relaxed text-lg mb-4  whitespace-pre-wrap">{postData?.content?postData?.content:postData?.desc}</div>
                <Link className="text-indigo-500 inline-flex items-center" href={"/blog"}>Read More Blogs
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BlogPost

