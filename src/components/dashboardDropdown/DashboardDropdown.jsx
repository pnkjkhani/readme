import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import whatsapp from '@/../../public/whatsapp.png'
import youtube from '@/../../public/youtube.png'
import Image from 'next/image';
const DashboardDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="Link"
                    onClick={toggleDropdown}
                    className="inline-flex justify-between align-center  rounded-md border border-gray-200 shadow-sm px-2 py-1 bg-gray-100 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
                    </svg>

                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className='py-1' role="none">

                        <Link
                            href="/dashboard/blogaction"
                            className="block px-4 py-2 flex gap-2  w-full  text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                            Write Blog
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-4 py-2  w-full flex gap-2  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>

                            Contact Us
                        </Link>
                        <Link
                            href="/dashboard/profile"
                            className="block px-4 py-2  w-full flex gap-2 text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            Profile
                        </Link>
                        <Link
                            href="/dashboard"
                            className="block px-4 py-2  w-full flex gap-2  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            <Image height={30} alt='image' width={30} src={whatsapp} />

                            Join Group
                        </Link>
                        <Link
                            href="/dashboard"
                            className="block px-4 py-2  w-full flex gap-2  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            <Image height={30} alt='image' width={30} src={youtube} />

                            Subscribe
                        </Link>
                        <div className='h-1 w-full bg-gray-600' />
                        <button className="block px-4 py-2  w-full flex gap-2  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                            onClick={(e) => (e.preventDefault(), signOut())}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            <span>Sign Out</span>
                        </button>

                    </div>
                </div>
            )}
        </div>
    )
}

export default DashboardDropdown
