import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const MenuDropdownNav = () => {
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
                    className="inline-flex justify-between align-center  rounded-md border border-gray-600 shadow-sm px-2 py-1 bg-gray-800 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className='py-1' role="none">

                        <Link
                            href="/"
                            className="block px-4 py-2  w-full  text-sm text-white hover:bg-gray-400 hover:text-gray-900"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="block px-4 py-2  w-full  text-sm text-white hover:bg-gray-400 hover:text-gray-900"
                        >
                            About
                        </Link>
                        <Link
                            href="/blog"
                            className="block px-4 py-2  w-full  text-sm text-white hover:bg-gray-400 hover:text-gray-900"
                        >
                            Blogs
                        </Link>
                        <Link
                            href="/dashboard"
                            className="block px-4 py-2  w-full  text-sm text-white hover:bg-gray-400 hover:text-gray-900"
                        >
                            Dashboard
                        </Link>

                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDropdownNav
