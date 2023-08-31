'use client'
import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react'
import style from './style.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
const Register = () => {
  const session=useSession()
  const router = useRouter();
  // const [err, setErr] = useState(false)
  useState(()=>{
    if(session.status=="authenticated"){
      router.push("/dashboard/login?success:Account has been created")
    }
  },[session.status]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const confirmPassword = e.target[3].value
    if(name && email && password && confirmPassword){

    

    if (password === confirmPassword) {

      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          })
        })
        res.status == 201 && router.push("/dashboard/login?success:Account has been created");
      } catch (error) {
        toast.error("Server error!", {
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
      toast.error("Password does not matched", {
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
  }else{
    toast.error("Please fill all credentials", {
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

  return (
    <div className={style.container}>
      <form className={style.loginForm} onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='abc@xyz.com' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm password' />

        <button className={style.btn}>Register</button>
        <div>
          <Link href='/dashboard/login'>Already has an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default Register
