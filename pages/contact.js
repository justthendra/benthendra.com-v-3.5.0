import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import { IoMdContact } from "react-icons/io";

function Contact() {
  return (
    <>
    <Head>
          <title>heythendra - contact</title>
        </Head>
        <body>
            <Navbar/>
            <div className="max-w-6xl mt-60 w-full mx-auto my-32">
          <div className="flex flex-col w-full items-start mb-12">
          <h1 className="flex items-center text-2xl sm:text-4xl text-start tracking-tight">
            <IoMdContact  className="dark:text-gray-300 mr-2" />
            <span className="dark:text-gray-300 text-3xl font-[Oceanwide]">
              Contact Me
            </span>
          </h1>
          <p className="text-black/80 font-[galano] tracking-tight mt-2 text-normal max-w-md  dark:text-gray-400">You can contact me by filling in the desired items..</p>
          </div>
        <div className="flex flex-col items-start mt-24">
        <input placeholder="Name" className="mt-2 placeholder:text-black/50 font-[galano] px-6 w-[20rem] sm:w-[25rem] md:w-[30rem] focus:text-black  dark:bg-gray-300 focus:placeholder:text-black focus:bg-gray-100/90 outline-none py-2.5 font-galano bg-gradient-to-br from-transparent to-gray-400/20 border border-black/10 rounded-lg transition-all duration-200 hover:bg-gray-100/90 hover:placeholder:text-black tracking-tight" type="text" value=""/>
        <input placeholder="E-mail" className="mt-2 placeholder:text-black/50 font-[galano] px-6 w-[20rem] sm:w-[25rem] md:w-[30rem] dark:bg-gray-300 focus:text-black focus:placeholder:text-black focus:bg-gray-100/90 outline-none py-2.5 font-galano bg-gradient-to-br from-transparent to-gray-400/20 border border-black/10 rounded-lg transition-all duration-200 hover:bg-gray-100/90 hover:placeholder:text-black tracking-tight" type="text" value=""/>
        <textarea placeholder="Message" className="mt-2 placeholder:text-black/50 font-[galano] px-6 w-[20rem] sm:w-[25rem] md:w-[30rem] focus:text-black dark:bg-gray-300 focus:placeholder:text-black focus:bg-gray-100/90 outline-none py-2.5 font-galano bg-gradient-to-br from-transparent to-gray-400/20 border border-black/10 rounded-lg transition-all duration-200 hover:bg-gray-100/90 hover:placeholder:text-black tracking-tight">
        </textarea>
        <button className="w-[20rem] sm:w-[25rem] md:w-[30rem] mt-5 py-2.5 bg-black/5 hover:bg-gray-400/30 transition-all duration-200 dark:bg-gray-300 font-[galano] dark:hover:bg-gray-300/80 rounded-lg text-black/80 font-galano tracking-tight opacity-100">Send</button>
        </div>
        </div>
        <br/>
        <Footer/>
        </body>
        </>
  )
}

export default Contact
