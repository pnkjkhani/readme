import React from 'react'
import style from './style.module.css'
import Link from 'next/link';
import BlogDropDown from '../BlogDropdown/BlogDropDown';
const links = [
    {
        id: 1,
        title: "All Posts",
        url: "/blog"
    },
    {
        id: 4,
        title: "coding",
        url: "?cat=coding"
    },

    {
        id: 2,
        title: "Style",
        url: "?cat=style"
    },

    {
        id: 3,
        title: "Fashion",
        url: "?cat=fashion"
    },

    {
        id: 4,
        title: "Food",
        url: "?cat=food"
    },
    {
        id: 4,
        title: "Culture",
        url: "?cat=culture"
    },
    {
        id: 4,
        title: "Teavel",
        url: "?cat=travel"
    },
    
];
const getData=async ()=>{
    const res=await fetch('http://localhost:3000/api/category',{
        cache:'no-cache',
    });
    if(!res?.ok){
        throw new Error('categories not found')
    }
    return res.json();
}
const Bloghead =async () => {
    // const data=await getData();
    // console.log(data)
    return (
        <div className={style.container}>
            
            <div className={style.left}>
                {links.map((link) => (
                    // {console.log(link.title)}
                    <Link className={style.link} key={link.id} href={link.url}> {link.title} </Link>
                ))}
            </div>
            <div className={style.right}>
                <input placeholder='Search blog here..' className={style.search} type="text" />
            </div>
            <div className={style.menuNav}>
                <BlogDropDown/>
            </div>

        </div>
    )
}

export default Bloghead
