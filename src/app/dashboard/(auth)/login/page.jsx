'use client'
import React, { useEffect } from 'react'
import style from './style.module.css'
import Link from 'next/link'
import googleImg from '@/../../public/google.png'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const Login = () => {
  const session = useSession();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", { email, password });
  }
  
  useEffect(()=>{
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  },[session.status]);
  if (session.status === "loading") {
    return <div>Loading...</div>
  }
  if (session.status === "unauthenticated") {
    return (
      <div className={style.container}>
        <form className={style.loginForm} onSubmit={handleSubmit} action="">
          <input type="email" placeholder='abc@xyz.com' />
          <input type="password" placeholder='Password' />
          <button className={style.btn}>submit</button>
          <div>
            <Link href='/dashboard/register'>create new account</Link>
          </div>
          <button className={style.google} onClick={(e) => { e.preventDefault(); signIn("google") }}><Image src={googleImg} className={style.googleImg} alt='Login with google' /></button>
        </form>
      </div>
    )
  }
    
  
}

export default Login
