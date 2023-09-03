'use client'
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import img from '@/../../public/contactImg.webp'
import Footer from '@/components/footer/Footer'
import { toast } from 'react-toastify';
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value
    const email = e.target[1].value
    const subject = e.target[2].value
    const body = e.target[3].value
    if (name && email && subject && body) {
      try {
        const res = await fetch("http://127.0.0.1:3000/api/contactus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            body,
          })
        })
        res.status == 201 && toast.success("Thanks for contacting us!", {
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
      } catch (error) {
        toast.error("Internal server error", {
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
    else {
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
    // const name=session.data.
  }
  return (
    <div className={style.container}>
      <div className={style.header}>
        <span>Contact Us</span>
        <p>Don’t Be a Stranger</p>
      </div>
      <div className={style.body}>
        <div className={style.imgContainer}>
          <Image src={img} className={style.img} alt='Did`n load Img!' />
        </div>
        <div className={style.form}>
          <span>500 Terry Francine Street <br />
            San Francisco, CA 94158
            <br /><br />
            123-456-7890
            <br /><br />
            info@mysite.com
          </span>
          <form onSubmit={handleSubmit} className={style.formArea}>
            <input type="text" className={style.txt} name='name' placeholder='Name' />

            <input type="email" className={style.txt} name='email' placeholder='Email' />

            <input type="text" className={style.txt} name='subject' placeholder='Subject' />

            <input type="text" className={style.txtMsg} name='body' placeholder='Type your message here..' />
            <div className={style.btnContainer}>
              <button type='submit' className={style.btn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* {res.status==201 && <Toaster/>} */}
      <Footer />
    </div>
  )
}

export default Contact
