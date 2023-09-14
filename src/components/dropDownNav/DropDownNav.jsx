import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import React from 'react'
import blankProfilePic from "@/../../public/blank-profile-picture.webp"
import { useRouter } from 'next/navigation';
import Profilecomponent from '../profileComponent/Profilecomponent';
import Link from 'next/link';

const DropDownNav = () => {
    const session = useSession()
    const router=useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-between align-center w-fit rounded-md border border-gray-600 shadow-sm px-2 py-2  text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 md:w-44"
                    id="options-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                >


                    <Image className='rounded-full' width={25} height={25} src={session?.data?.user?.image ? session?.data?.user?.image : blankProfilePic} alt={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>} />
                    <div className='hidden md:contents'>
                        {session?.data?.user?.name ? session?.data?.user?.name : "Login Here"}
                    </div>
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>

                </button>
            </div>

            {isOpen && (
                session.status == "authenticated"?
                <Profilecomponent/>
                :
                <div
                    className="origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className='py-1 flex w-full justify-center cursor-pointer' role="none">
                        <Link href={"/dashboard/login"}>Login</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDownNav;
