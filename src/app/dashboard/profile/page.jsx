'use client'
import Loader from '@/components/loader/Loader';
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Profile = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.status == "unauthenticated") {
            router.push('/dashboard/login');
        }
    }, [session.status])

    if (session.status == "loading") {
        return <Loader/>;
    }
    if (session.status == "authenticated") {
        return (
            
            <div >
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                        <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded-2xl object-cover object-center rounded" alt="hero" src={session?.data?.user?.image} />
                        <div className="text-center lg:w-2/3 w-full">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{session?.data?.user?.name}</h1>
                            <p className="mb-8 leading-relaxed">{session?.data?.user?.email}</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><Link href={"/dashboard"}>Your Blogs</Link></button>
                                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><Link href={"/blog"}>All Blogs</Link></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default Profile
