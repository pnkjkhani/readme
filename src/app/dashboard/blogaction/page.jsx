'use client'
import Loader from '@/components/loader/Loader';
// import {Success,Error} from '@/components/toasts/Toast';
import { useSession } from 'next-auth/react';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import React from 'react';
import { toast } from 'react-toastify';

const Blogaction = () => {
    const [imgId, setImgId] = useState("")
    const [evevt, setEvent] = useState("")
    const session = useSession();
    const router = useRouter();
    useEffect(() => {
        if (session.status === "unauthenticated") {
          router.push("/dashboard");
        }
      }, [session.status,router]);
    if (session == "loading") {
        return <Loader />
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userprofilepic=session?.data?.user?.image
        const username = session.data.user.name;
        const useremail = session.data.user.email;
        const title = e.target[0].value
        const desc = e.target[1].value
        const img = imgId
        const content = e.target[3].value
        if (title && desc && img && content && username && useremail) {


            try {
                const res = await fetch("http://localhost:3000/api/blogs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        useremail,
                        title,
                        desc,
                        img,
                        content,
                        userprofilepic,
                    })
                })
                if (res.status == 201) {
                    // <Success message={'🦄Congrats! Blog has been created'} />
                    toast.success('🦄Congrats! Blog has been created', {
                        position: "top-center",
                        autoClose: 5000,
                        draggablePercent: 60,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                } else {
                    // <Error message='Server Error!' />
                    toast.error('Server Error!', {
                        position: "top-center",
                        autoClose: 5000,
                        draggablePercent: 60,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
            } catch (error) {
                if (error) {
                    // <Error message={'🦄 Sorry! Your request not completed !'} />
                    toast.error('🦄 Sorry! Your request not completed !', {
                        position: "top-center",
                        autoClose: 5000,
                        draggablePercent: 60,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }
            }
        } else {
            
            toast.error("Please provide all fields!", {
                position: "top-center",
                autoClose: 5000,
                draggablePercent: 60,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }
    if (session.status == "authenticated") {
        return (
            <section className="text-white body-font relative">
                <div className="container px-5 py-10 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400 my-10">Suggestion: For better exprience you can write blog in your device and paste here.</p>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Create Your Blog</h1>

                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unlocking Ideas, One Word at a Time: Explore, Engage, Enrich..</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex  flex-wrap -m-2">
                            <form onSubmit={handleSubmit} className='w-full' encType="multipart/form-data" >
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-white">
                                            title
                                        </label>
                                        <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="text" className="leading-7 text-sm text-white">Description</label>
                                        <input type="text" id="desc" name="desc" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    </div>
                                </div>
                                <div className="p-2 w-full pointer ">
                                    <div className="leading-7 text-sm  text-white">Image </div>
                                    <div className="relative w-full h-auto flex gap-4 ">
                                        <label type="file" id="image" name="image" className="w-24 h-24 border flex 
                                     items-center justify-center gap-1 bg-gray-500 text-black pointer rounded-lg ">
                                            Upload
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                            </svg>
                                            <CldUploadButton
                                                onUpload={(result) => {
                                                    setImgId(result.info.url);
                                                    setEvent(result.event)
                                                }}
                                                uploadPreset="readme.com" className='hidden'
                                            />

                                        </label>
                                        {imgId && <CldImage
                                            width="400"
                                            height="400"
                                            src={imgId}
                                            sizes="100vw"
                                            alt="Description of my image"
                                        />}
                                    </div>
                                </div>

                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="blog" className="leading-7 text-sm text-white">Blog</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button type='submit' className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-inwhite rounded text-lg" >Submit</button>
                                </div>
                            </form>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-indigo-500">support@readme.com</a>
                                <p className="leading-normal my-5">KP-3,Greater Noida.
                                    <br />
                                    UP, Pin-201301
                                </p>
                                <span className="inline-flex">
                                    <a className="text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <rect strokeWidth="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                        </svg>
                                    </a>
                                    <a className="ml-4 text-white">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Blogaction
