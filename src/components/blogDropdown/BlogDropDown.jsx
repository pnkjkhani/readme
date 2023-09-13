'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const links = [
    {
        id: 1,
        title: "All Posts",
        url: "/blog"
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
        id: 5,
        title: "Culture",
        url: "?cat=culture"
    },
    {
        id: 6,
        title: "Travel",
        url: "?cat=travel"
    },
    {
        id: 7,
        title: "coding",
        url: "?cat=coding"
    },

];
const BlogDropDown = () => {
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
                    className="inline-flex justify-between align-center  rounded-md border border-gray-800 shadow-sm px-2 py-1 bg-black text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                >

                    {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>}

                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className='py-1' role="none">

                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={link.url}
                                className="block px-4 py-2  w-full  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                            >
                                {link.title}
                            </Link>
                        ))}
                        {/* <Link
                            href="/technology"
                            className="block px-4 py-2  w-full  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            Technology
                        </Link>
                        <Link
                            href="/entertainment"
                            className="block px-4 py-2  w-full  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            Entertainment
                        </Link>
                        <Link
                            href="/education"
                            className="block px-4 py-2  w-full  text-sm text-gray-600 hover:bg-gray-400 hover:text-gray-900"
                        >
                            Education
                        </Link> */}

                    </div>
                </div>
            )}
        </div>
    )
}

export default BlogDropDown
