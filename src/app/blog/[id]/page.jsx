
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import img from '@/../../public/blogImg.webp'
import { notFound } from 'next/navigation'
import Footer from '@/components/footer/Footer'

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

      <div className={style.post}>

        <div className={style.postDate}>
          <span>{postData.updatedAt ? postData.updatedAt : "20 Aug"}</span>
          <span>. 4 min</span>
          <div>{postData.username ? postData.username : "Unknown"}</div>
        </div>
        <h1>{postData.title}</h1>
        <Image className={style.imga} width={1000} height={1000} src={postData.img ? postData?.img : img} alt='loding image' />
        <div className={style.content} dangerouslySetInnerHTML={{ __html: postData?.content ? postData?.content : postData?.body }}></div>
      </div>

      <div className={style.recentPostHeader}>
        <span>Recent Posts</span>
        <p>see all</p>
      </div>

      <div className={style.recentPosts}>
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
      </div>
      <Footer />
    </div>
  )
}

export default BlogPost

