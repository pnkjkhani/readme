"use client";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import Image from "next/image";
import styles from "./style.module.css";
import { useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
// import ReactQuill from "react-quill";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WritePage = () => {
    const session = useSession();
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [catSlug, setCatSlug] = useState("");



    if (session.status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (session.status === "unauthenticated") {
        router.push("/login");
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const userprofilepic = session?.data?.user?.image
        // const username = session.data.user.name;
        // const useremail = session.data.user.email;

        if (!title || !desc || !media || !value) {
            return toast.error("Please provide all fields!", {
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

        try {
            const res = await fetch("http://localhost:3000/api/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    slug: slugify(title),
                    title,
                    desc,
                    catSlug,
                    img: media,
                    content: value,
                })
            })
            if (res.status == 201) {
                toast.success('Congrats! Blog has been created', {
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
                router.push('/dashboard');
            } else {
                // <Error message='Server Error!' />
                return toast.error('Server Error!', {
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
                return toast.error('Sorry! Your request not completed !', {
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

    };

    return (
        <div className={styles.container}>
            <input
                type="text"
                placeholder="Title"
                className={styles.input}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                className={styles.desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    <Image src="/plus.png" alt="" width={16} height={16} />
                </button>
                {open && (
                    <div className={styles.add}>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                        <div className={styles.addButton}>
                            <label>
                                {/* <Image src="/image.png" alt="" width={16} height={16} /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                </svg>
                                {/* <CldUploadButton
                                    onUpload={(result) => {
                                        setMedia(result.info.url);
                                        console.log(result);
                                    }}
                                    uploadPreset="readme.com" className='hidden'
                                /> */}
                                <CldUploadButton
                                    onUpload={(result) => {
                                        setMedia(result.info.url);
                                        
                                    }}
                                    uploadPreset="readme.com" className='hidden'
                                />
                            </label>
                        </div>
                        <button className={styles.addButton}>
                            {/* <Image src="/external.png" alt="" width={16} height={16} /> */}
                        </button>
                        <button className={styles.addButton}>
                            {/* <Image src="/video.png" alt="" width={16} height={16} /> */}
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
            <button className={styles.publish} onClick={handleSubmit}>
                Publish
            </button>
        </div>
    );
};

export default WritePage;