'use client'

import Link from 'next/link'
import React from 'react'
import style from './style.module.css'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react';
import logo from "@/../../public/logo-no-background.svg"
import Image from 'next/image';
import DropDown from '../dropDownNav/DropDownNav'
import MenuDropdownNav from '../menuDropdown/MenuDropdownNav'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },

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
      <div className={style.outerContainer}>
        <div className={style.container}>
          <div className={style.logo}>
            <Image height={50} priority={true} alt='ReadMe.com' src={logo} />
          </div>
          <div className={style.links}>
            {links.map((link) => (
              <Link className={style.link} key={link.id} href={link.url}> {link.title} </Link>
            ))}
            <div className='flex flex-col z-50' >
              <DropDown  />
            </div>
          </div>
          <div className={style.mediumDeviceNav}>
            <div >
            <DropDown/>
            </div>
            <div className='flex flex-col z-50' >
              <MenuDropdownNav/>
            </div>
          </div>
        </div> 
      </div>
    </>

  )
}

export default Navbar
