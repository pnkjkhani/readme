import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import dashboard from '@/../../public/dashboard.png'
import profile from '@/../../public/profile.png'
import Link from 'next/link';

const Profilecomponent = () => {
    const session = useSession()
    useState(() => {
        if (session.status === 'unauthenticated') {
            return null;
        }
    }, [session.status])

    return (
        <div

            // className="origin-top-right absolute  mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5"
            className="origin-top-right text-gray-600 absolute w-80 right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"

        >
            <div className="bg-white p-6 rounded-lg overflow-hidden shadow-lg">
                <div className='flex flex-row gap-2'>
                    <Image
                        width={1000}
                        height={1000}
                        src={session?.data?.user?.image} // Replace with your profile image URL
                        alt="Profile Picture"
                        className="w-12 h-12 rounded-full mx-auto"
                    />
                    <div >
                        <h1 className="text-md font-semibold ">{session?.data?.user?.name}</h1>
                        <p className="text-gray-600">{session?.data?.user?.email}</p>
                    </div>
                </div>


                <ul className="mt-4 space-y-2">
                    <Link href={"/dashboard/profile"}>
                        <li className='flex flex-row gap-2 m-2'>
                            <Image height={25} width={25} alt='image' src={profile} />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link href={"/dashboard"}>
                        <li className='flex flex-row gap-2 m-2'>
                            <Image height={25} width={25} alt='image' src={dashboard} />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                </ul>
                {/* <div className="mt-4 flex justify-center space-x-2">
                    <a
                        href="https://twitter.com/yourtwitter"
                        className="text-blue-500 hover:underline"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://github.com/yourgithub"
                        className="text-gray-700 hover:underline"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourlinkedin"
                        className="text-blue-800 hover:underline"
                    >
                        LinkedIn
                    </a>
                </div> */}
                <div className='w-full h-0.5 bg-gray-400 mt-8'/>
                <div className='cursor-pointer flex flex-col w-full align-center justify-center'>
                    
                    <span className='font-md text-center hover:text-black' 
                    onClick={(e) => (e.preventDefault(),session.status == "authenticated"? signOut():router.push("/dashboard/login"))}
                    >Sign Out</span>
                    <span className='font-md text-center'>{session?.data?.user?.email}</span>
                </div>
            </div>
        </div>
    );
};

export default Profilecomponent;
