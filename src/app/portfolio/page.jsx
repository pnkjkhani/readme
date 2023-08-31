"use client"
import React, { useEffect } from 'react'
import useSWR from 'swr'
import style from './style.module.css'
const axios = require('axios');
// async function getData() {
//   // const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
//   //   cache:"no-store",
//   // })
//   let res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyAaIWDDc9Mq_3aazxjetCDPHNOiGv8DInY`,{
//     cache:"no-store",
//   })

//   if (!res.ok) {
//     throw new Error('Failed to fetch blogs. Serve side error..')
//   }
//   // console.log(res)
//   return res.json()
// }




const Portfolio = () => {
  const getData=async ()=>{
    const options = {
      method: 'POST',
      url: 'https://article-extractor2.p.rapidapi.com/article/parse',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd8343038f6msh53496dcdf663d7ep1afb44jsnf69294a441f7',
        'X-RapidAPI-Host': 'article-extractor2.p.rapidapi.com'
      },
      data: {
        url: 'https://css-tricks.com/empathetic-animation/',
        word_per_minute: 300,
        desc_truncate_len: 210,
        desc_len_min: 180,
        content_len_min: 200
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getData()
  },[])
  // console.log(await getData())
  return (
    <div className={style.container}>
      <div className={style.leftContainer}>
      <div className={style.leftBody}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eius consectetur ratione voluptate repellat ea mollitia, 
      </div>
    </div>
    <div className={style.rightContainer}>
      <div className={style.rightBodyContainer}>
        <div className={style.rightBodyLeft}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error id ullam ratione omnis quam excepturi llo, quas. Fugiat consequuntur quae earum voluptates, illo laborum asperiores ad assumenda reiciendis ratione rem.
          nam distinctio commodi. Reiciendis repudiandae ducimus, officiis quod facere hic quia minima, dignissimos amet possimus accusamus nostrum dolores nulla labore distinctio quos incidunt eum voluptas libero repellat officia
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint impedit neque maxime? Cum facere recusandae earum quisquam repellat magni et ut laudantium nostrum? Necessitatibus in quidem nemo aperiam! Consequuntur fuga libero, numquam fugit omnis nesciunt minus iure rem ea aliquid eligendi, placeat excepturi porro rerum assumenda voluptatibus quibusdam! Impedit facere quibusdam cum, distinctio accusamus voluptatum! Illum saepe modi possimus, optio culpa quo maxime dolorem expedita labore architecto dolore? Tempora, impedit? Minima rerum tempora molestiae vero quibusdam, id nobis dicta earum nihil eum, neque dolorem eligendi mollitia repellat veniam provident facere distinctio. Beatae ut excepturi perspiciatis id cumque, nisi minus corporis deserunt aut in assumenda. Numquam, dolore! Illum sunt saepe distinctio ducimus officia inventore animi voluptatem eligendi nobis omnis, beatae est excepturi cumque tenetur commodi asperiores sequi voluptas ea odit non, cupiditate autem quidem quas sapiente. Incidunt praesentium illum, esse aperiam ipsa ut earum quidem laudantium obcaecati cumque excepturi commodi, libero doloribus, provident odit eaque nobis aspernatur recusandae eum veritatis. Expedita quia dolore provident sint ducimus tempore impedit, veritatis sunt amet qui magnam, dignissimos laboriosam dolor repellendus perferendis quos? Amet perspiciatis corporis accusamus esse ab autem nemo tempora possimus repudiandae, quos sunt similique quibusdam sint consectetur ipsum obcaecati dolorum distinctio incidunt at maiores illo! Ea impedit cum nemo, consequatur, nostrum possimus eveniet vitae sunt aperiam illum repellat quo vel voluptates. Illo, quas. Fugiat consequuntur quae earum voluptates, illo laborum asperiores ad assumenda reiciendis ratione rem.
        </div>
      </div>
    </div>
    </div>
  )
}

export default Portfolio
