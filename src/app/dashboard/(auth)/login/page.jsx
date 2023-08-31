'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';
const Login = () => {
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session.status]);
  if (session.status === "loading") {
    return <div>Loading...</div>
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email || !password){
      return toast.error("Peovide all credentials!", {
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
      signIn("credentials", { email, password });
    } catch (error) {
      return toast.error("something went wrong", {
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
  if (session.status === "unauthenticated") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-800">
        <div className="bg-gray-400 p-8 rounded shadow-md w-full sm:w-96">
          <h1 className="text-2xl font-semibold text-black mb-6">Login</h1>
          <form onSubmit={handleSubmit}>
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
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border w-full rounded-md focus:ring focus:ring-blue-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2 text-black focus:outline-none"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 w-full px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>
          <Link className='text-gray-500' href={"/dashboard/register"}>create a new account</Link>
          <span className='text-gray-500'>|</span>
          <Link className='text-gray-500' href={"/dashboard/register"}>Forgot password?</Link>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <button
              onClick={() => signIn('google')}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              Google Login
            </button>
            {/* <button
              onClick={() => signIn('facebook')}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Facebook Login
            </button> */}
          </div>
        </div>
      </div>
    )
  }


}

export default Login
