"use client"
import useSWR from 'swr'
import React, { useEffect } from 'react'
import style from './style.module.css'
import Image from 'next/image'
import sortImg from '@/../../public/interlining.svg'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import defaultImg from '@/../../public/2.webp'
import logoBlack from '@/../../public/logo-no-background.svg'
import blogging from '@/../../public/blogging.png'
import whatsapp from '@/../../public/whatsapp.png'
import youtube from '@/../../public/youtube.png'
import dashboard from '@/../../public/dashboard.png'
import operator from '@/../../public/operator.png'
import writeBlog from '@/../../public/writing.png'
import profile from '@/../../public/profile.png'

import Link from 'next/link'
import Loader from '@/components/loader/Loader'
import DashboardDropdown from '@/components/dashboardDropdown/DashboardDropdown'

function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(
    `/api/blogs?email=${session?.data?.user?.email}`,
    fetcher);
  useEffect(() => {
    if (session.status == "unauthenticated") {
      router?.push("/dashboard/login")
    }
  }, [session.status,router])

  if (session.status == "loading") {
    return <Loader />
  }
  if (session.status == "authenticated") {
    return (
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div className={style.leftBody}>
            <div className={style.logoBlack}>
              <Image src={logoBlack} alt='ReadMe.com' />
            </div>
            <Link href={"/dashboard/blogaction"}>
              <div className={style.writeBlog}>

                <Image height={30} width={30} alt='image' src={writeBlog} />
                <span>Write Blog</span>

              </div>
            </Link>
            <ul className={style.iconList}>
              <Link href={"/dashboard/profile"}>
                <li className={style.listItem}>
                  <Image height={30} width={30} alt='image' src={profile} />
                  <span>Profile</span>
                </li>
              </Link>
              <li className={style.listItem}>
                <Image height={30} width={30} alt='image' src={dashboard} />
                <span>Dashboard</span>
              </li>
              <Link href={"/blog"}>
                <li className={style.listItem}>
                  <Image height={30} alt='image' width={30} src={blogging} />
                  <span>Blogs</span>
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className={style.listItem}>
                  <Image height={30} alt='image' width={30} src={operator} />
                  <span>Contact Us</span>
                </li>
              </Link>
              <li className={style.hLine} />

              <li className={style.listItem}>
                <Image height={30} alt='image' width={30} src={whatsapp} />
                <span>Join group</span>
              </li>
              <li className={style.listItem}>
                <Image height={30} alt='image' width={30} src={youtube} />
                <span>Subscribe</span>
              </li>
              <button className={style.listItem}
                onClick={(e) => (e.preventDefault(), signOut())}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>
                <span>Sign Out</span>
              </button>
            </ul>
          </div>
        </div>
        <div className={style.midContainer}>
          <div className={style.midBody}>

            <div className={style.midHeader}>
              <div className={style.midHeaderContent}>
                <div className={style.midHeaderDropDown}>
                  <DashboardDropdown />
                </div>
                <div className={style.midHeaderSearch}>
                  <input placeholder='Search here' type="text" />
                </div>
                <div className={style.midHeaderFilter}>
                  <div className={style.sortBy}>
                    <p style={{ display: 'flex' }}>Sort By(Date)
                      <Image src={sortImg} style={{ marginLeft: '1px' }} alt='Image' height={20} />
                    </p>
                  </div>
                </div>

              </div>
            </div>
            <div className={style.midContent}>
              {/* Tailblocks */}
              <section className="text-gray-600 body-font">
                <div className="container px-5 -auto">
                  <div className="flex flex-wrap -m-4">

                    {isLoading ? <Loader /> : data.map((item) => (
                      <div key={item._id} className="p-4 md:w-1/2">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <div className=" w-full object-cover object-center">
                            <Image width={1000} height={1000} src={item?.img ? item?.img : defaultImg} alt="blog" />
                          </div>

                          <div className="p-3">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                            <p className="leading-relaxed mb-3">{item.desc ? item.desc : item.body}</p>
                            <div className="flex items-center flex-wrap " >
                              <Link href={`blog/${item._id}`} className="text-indigo-500  inline-flex items-center md:mb-2 lg:mb-0" style={{ cursor: 'pointer' }}>Learn More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </Link>
                              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>1.2K
                              </span>
                              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>6
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))}

                  </div>
                </div>
              </section>

              {/* <div className={style.card}>
              <div className={style.cardHeader}>
                <div className={style.cardImg}>
                  <Image src={twitter} alt='Image' />
                </div>

                <div className={style.cardBody}>
                  <div className={style.cardBodyHeader}>
                    <button className={style.deleteBtn}>Delete</button>
                    <div className={style.shareIcon}><Image src={shareIcon} alt='share' /></div>
                  </div>
                  <div className={style.textArea}>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iste dolorem officiis architecto deserunt non!</p>
                  </div>

                </div>

              </div>

              <div className={style.cardFooter}>
                <div className={style.cardInfo}>
                  •Posted 4 September 2023
                </div>
                <div className={style.cardButtons}>
                  <button className={style.viewBtn}>View Blog</button>
                  <button className={style.editBtn}>Edit Blog</button>

                </div>
              </div>
            </div> */}

            </div>

          </div>
        </div>
      </div>
    )
  }


};

export default Dashboard
