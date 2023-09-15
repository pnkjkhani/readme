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
    // <div className={style.container}>
    // <section className="text-gray-200 body-font">
    //   <div className="container px-5 py-14 mx-auto flex flex-col">
    //     <div className=" mx-auto">
    //       {postData.img && <div className="rounded-lg h-64 overflow-hidden lg:flex justify-center">
    //         <div className="object-cover flex justify-center object-center h-full w-full lg:w-4/6">
    //           <Image className='w-full object-cover' src={postData?.img} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
    //         </div>
    //       </div>}
    //       <div className="flex justify-center flex-col  mt-10">
    //         <div className=" text-center  sm:pr-8 sm:py-8">
    // <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
    //   {postData?.user?.image ?
    //     <Image className='rounded-full object-cover' src={postData?.user?.image} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
    //     :
    //     <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
    //       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    //       <circle cx="12" cy="7" r="4"></circle>
    //     </svg>
    //   }
    // </div>
    //           <div className="flex flex-col items-center text-center justify-center">
    //             <h2 className="font-medium title-font mt-4 text-gray-400 text-lg">Author: {postData?.user?.name ? postData?.user.name : "Unknown"}</h2>
    //             <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
    //             <p className="text-base">Title: {postData?.title && postData?.title}</p>
    //           </div>
    //         </div>
    //         <div className=" sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
    //           {/* <p className="leading-relaxed text-lg mb-4  whitespace-pre-wrap">{postData?.content ? postData?.content : postData?.body }</p> */}
    //           <div className="leading-relaxed text-center text-lg mb-4 lg:w-4/6 " dangerouslySetInnerHTML={{ __html: postData?.content }} />
    //           {/* <div className="leading-relaxed text-lg mb-4  whitespace-pre-wrap">{postData?.content?postData?.content:postData?.desc}</div> */}
    //           <Link className="text-indigo-500 inline-flex items-center" href={"/blog"}>Read More Blogs
    //             <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
    //               <path d="M5 12h14M12 5l7 7-7 7"></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    // <Footer />
    // </div>
    <div className=' flex flex-col justify-center font-400 text-black w-full h-full mt-[50px] bg-gray-100 font-sans'>
      <section className="container px-5 py-10 mx-auto w-full bg-gray-200 lg:w-4/6 flex flex-col">
        {postData.img && <div className="rounded-lg h-64 overflow-hidden  w-full lg:flex justify-center">
          <div className="object-cover flex justify-center object-center lg:w-4/6">
            <Image className='w-full object-cover' src={postData?.img} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
          </div>
        </div>}
        <h1 className='text-4xl font-bold text-center mt-10'>{postData?.title && postData?.title}</h1>
        <div className='flex w-full gap-5 mt-10 pl-10'>
          <div className="w-10 h-10 rounded-full  inline-flex items-center justify-center bg-gray-200 text-gray-400">
            {postData?.user?.image ?
              <Image className='rounded-full object-cover' src={postData?.user?.image} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
              :
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            }
          </div>
          <div className='flex flex-col'>
            <span>{postData?.user?.name}</span>
            <span className='font-thin '>May-16</span>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400 mt-5' />
        <div className='w-full p-3 flex justify-between'>
          <div>
            <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200 ">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>8
            </span>
            <span className="text-gray-600 inline-flex items-center leading-none text-sm hover:text-black">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
          <div className='flex gap-5'>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokelinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

            </span>
          </div>
        </div>
        <div className='w-full h-[1px] bg-gray-400 mb-2' />
        {/* <div className='font-normal text-xl leading-8 tracking-[-0.003em] break-words max-sm:leading-7 text-md whitespace-pre-wrap' dangerouslySetInnerHTML={{ __html: postData?.content }}/> */}
        <div  className='font-normal text-xl leading-8 tracking-[-0.003em] break-words max-sm:leading-7 text-md' dangerouslySetInnerHTML={{ __html:postData?.content }} />
      </section>
      
    </div>
  )
}

export default BlogPost

