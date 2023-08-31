import React from 'react'
import style from './style.module.css'
import Link from 'next/link';
const links = [
    {
        id: 1,
        title: "All Blogs",
        url: "/"
    },

    {
        id: 2,
        title: "Technology",
        url: "/portfolio"
    },

    {
        id: 3,
        title: "Entertainment",
        url: "/blog"
    },

    {
        id: 4,
        title: "Education",
        url: "/about"
    },
];
const Bloghead = () => {
    return (
        <div className={style.container}>
            <div className={style.left}>
                {links.map((link) => (
                    // {console.log(link.title)}
                    <Link className={style.link} key={link.id} href={link.url}> {link.title} </Link>
                ))}
            </div>
            <div className={style.right}>
                <input placeholder='Search blog here..' className={style.search} type="text"/>
            </div>
        </div>
    )
}

export default Bloghead
