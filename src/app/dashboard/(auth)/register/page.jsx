'use client'
import React from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react';
const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const session = useSession()
  const router = useRouter();
  useState(() => {
    if (session.status == "authenticated") {
      router.push("/dashboard/login?success:Account has been created")
    }
  }, [session.status,router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password || !confirmPassword) {
      return toast.error("Please fill all credentials", {
        position: "top-center",
        autoClose: 5000,
        draggablePercent: 60,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }); // Add proper validation/error handling
    }
    if (password !== confirmPassword) {
      return toast.error("Password does not matched", {
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
      res.status == 201 && toast.success("Account has been created", {
        position: "top-center",
        autoClose: 5000,
        draggablePercent: 60,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      res.status == 404 && toast.error("User already exist!", {
        position: "top-center",
        autoClose: 5000,
        draggablePercent: 60,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
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
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    // <div className={style.container}>
    //   <form className={style.loginForm} onSubmit={handleSubmit}>
    //     <input type="text" placeholder='Name' />
    //     <input type="email" placeholder='abc@xyz.com' />
    //     <input type="password" placeholder='Password' />
    //     <input type="password" placeholder='Confirm password' />

    //     <button className={style.btn}>Register</button>
    //     <div>
    //       <Link href='/dashboard/login'>Already has an account?</Link>
    //     </div>
    //   </form>
    // </div>
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-800">
      <div className="bg-gray-400 p-8 rounded shadow-md w-full sm:w-96">
        <h1 className="text-2xl font-semibold text-black mb-6">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-black">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <Link className='mb-4 text-gray-800' href={"/dashboard/login"}>Already has an account?</Link>
          <button
            type="submit"
            className="bg-black text-white w-full py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
