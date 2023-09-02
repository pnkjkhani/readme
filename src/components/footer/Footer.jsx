import React from 'react'
import logo from '@/../../public/footer-logo.svg'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font w-full" >
      <div style={{ minHeight: "fit-content" }} className="container px-5 py-10 mx-auto flex justify-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col" >
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image alt='Logo@Readme.com' src={logo} width={80} height={80}/>
            <span className="ml-3 text-xl text-white">ReadMe.com</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">"Elevate Your Thoughts: Where Words Come to Life"</p>
        </div>
        {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-400 hover:text-white cursor-pointer">Its me</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white cursor-pointer">Second Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white cursor-pointer">Third Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white cursor-pointer">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-100 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-slate-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div> */}
      </div>
      <div className='w-full'>
        <div className=" min-h-fit mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Readme —
            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@copyright</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href='https://www.linkedin.com/in/pankaj-khani-804299205/' target="_blank" className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/pankaj-khani-804299205/' target="_blank" className="ml-3 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/pankaj-khani-804299205/' target="_blank" className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect strokeWidth="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/pankaj-khani-804299205/' target="_blank" className="ml-3 text-white">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
