'use client'

import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react';
import logo from "@/../../public/logo-no-background.svg"
import Image from 'next/image';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },

  // {
  //   id: 2,
  //   title: "Portfolio",
  //   url: "/portfolio"
  // },

  {
    id: 3,
    title: "Blog",
    url: "/blog"
  },

  {
    id: 4,
    title: "About",
    url: "/about"
  },

  // {
  //   id: 5,
  //   title: "Contact",
  //   url: "/contact"
  // },

  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard"
  },
];

const Navbar = () => {
  const session = useSession();
  const router = useRouter()
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}>

          <Image height={50} priority={true} alt='ReadMe.com' src={logo} />

        </div>
        <div className={style.links}>
          {links.map((link) => (
            <Link className={style.link} key={link.id} href={link.url}> {link.title} </Link>
          ))}
          <div >
            {session.status == "loading" && <button className={style.auth} >Loading</button>}
            {session.status == "authenticated" &&
            <button className={style.auth} onClick={(e) => {e.preventDefault(), signOut() }}>logout</button>}
            {/* //   <Select>
            //     <SelectTrigger className="w-[180px]">
            //       <SelectValue placeholder="Theme" />
            //     </SelectTrigger>
            //     <SelectContent>
            //       <SelectItem value="light">Light</SelectItem>
            //       <SelectItem value="dark">Dark</SelectItem>
            //       <SelectItem value="system">System</SelectItem>
            //     </SelectContent>
            //   </Select> */}
            
            {session.status == "unauthenticated" && <button className={style.auth} onClick={() => router.push('/dashboard/login')}> login/signup</button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
