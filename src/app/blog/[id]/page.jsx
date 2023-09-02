
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import img from '@/../../public/blogImg.webp'
import { notFound } from 'next/navigation'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
    cache: "no-store",
  })
  if (!res.ok) {
    return notFound()
  }
  return res.json()
}

//Dynamic meta data generator
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.body ? post.body : post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const postData = await getData(params.id);

  return (
    <div className={style.container}>

      {/* <div className={style.post}>

        <div className={style.postDate}>
          <span>{postData.updatedAt ? postData.updatedAt : "20 Aug"}</span>
          <span>. 4 min</span>
          <div>{postData.username ? postData.username : "Unknown"}</div>
        </div>
        <h1>{postData.title}</h1>
        <Image className={style.imga}Width={1000} height={1000} src={postData.img ? postData?.img : img} alt='loding image' />
        <div className={style.content} dangerouslySetInnerHTML={{ __html: postData?.content ? postData?.content : postData?.body }}></div>
      </div>

      <div className={style.recentPostHeader}>
        <span>Recent Posts</span>
        <p>see all</p>
      </div> */}

      {/* <div className={style.recentPosts}>
        <div className={style.blogPost}>
          <div className={style.imgContainer}>
            <Image className={style.imga} src={img} alt='loding image' />
          </div>
          <div className={style.txtArea}>
            <div className={style.postDate}>
              <span>22 Mar</span>
              <span>. 4 min</span>
            </div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga nobis fugit id. Esse, veniam.</p>
          </div>
        </div>
        <div className={style.blogPost}>
          <div className={style.imgContainer}>
            <Image className={style.imga} src={img} alt='loding image' />
          </div>
          <div className={style.txtArea}>
            <div className={style.postDate}>
              <span>22 Mar</span>
              <span>. 4 min</span>
            </div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga nobis fugit id. Esse, veniam.</p>
          </div>
        </div>
        <div className={style.blogPost}>
          <div className={style.imgContainer}>
            <Image className={style.imga} src={img} alt='loding image' />
          </div>
          <div className={style.txtArea}>
            <div className={style.postDate}>
              <span>22 Mar</span>
              <span>. 4 min</span>
            </div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga nobis fugit id. Esse, veniam.</p>
          </div>
        </div>
        <div className={style.blogPost}>
          <div className={style.imgContainer}>
            <Image className={style.imga} src={img} alt='loding image' />
          </div>
          <div className={style.txtArea}>
            <div className={style.postDate}>
              <span>22 Mar</span>
              <span>. 4 min</span>
            </div>
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga nobis fugit id. Esse, veniam.</p>
          </div>
        </div>
      </div> */}
      <section className="text-gray-200 body-font">
        <div className="container px-5 py-14 mx-auto flex flex-col">
          <div className=" mx-auto">
            <div className="rounded-lg h-64 overflow-hidden lg:flex justify-center">
              <div className="object-cover object-center h-full w-full lg:w-4/6">
                <Image className={style.imga} src={postData.img ? postData?.img : img} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  {postData?.userprofilepic ?
                    <Image className='rounded-full object-cover' src={postData?.userprofilepic} width={1000} height={1000} alt="https://dummyimage.com/1200x500" />
                    :
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  }
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-400 text-lg">{postData.username ? postData.username : "Unknown"}</h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">{postData.title}</p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 " dangerouslySetInnerHTML={{ __html: postData?.content ? postData?.content : postData?.body }}></p>
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

