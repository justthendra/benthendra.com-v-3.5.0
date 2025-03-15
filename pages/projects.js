import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaDiscord, FaGithub, FaLink, FaProjectDiagram } from "react-icons/fa";
import javas from "./img/javas.png";
import jolter from "./img/jolter.png";
import kodikas from "./img/Kodikas.jpg";
import Image from "next/image";

export default function Projects() {

  return (
    <>
    <Head>
          <title>heythendra - projects</title>
        </Head>
      <body>
        <main>
          <Navbar/>
          <div className="max-w-6xl mt-60 w-full mx-auto my-32">
          <div className="flex flex-col w-full items-start mb-12">
          <h1 className="flex items-center text-2xl sm:text-4xl text-start tracking-tight">
            <FaProjectDiagram className="dark:text-gray-300 mr-2" />
            <span className="dark:text-gray-300 text-3xl font-[Oceanwide]">
              My Projects
            </span>
          </h1>
          <p className="text-black/80 font-[galano] tracking-tight mt-2 text-normal max-w-md  dark:text-gray-400">On this page, you can see the projects that I have developed, which are actively ongoing or suspended.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-24">
          <a target="_blank" href="https://jolter.xyz">
          <div className="p-5 w-full dark:bg-gray-900/10 bg-[#dbdbdb] rounded-lg transition-all duration-200 hover:bg-gray-800/10 cursor-pointer">
          <div className="w-full h-32 rounded-lg overflow-hidden bg-cover bot-image bg-center">
          <div className="w-full h-full bg-black/10 backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center">
          <Image src={jolter} alt="Jolter" width="80" height="80" className="w-20 h-20 rounded-full"/>
          </div>
          </div>
          </div>
          <div className="flex flex-col max-w-sm w-full pt-4">
          <div className="flex items-center space-x-2">
          <h1 className="text-lg text-gray-700 dark:text-white/90 font-[Oceanwide] tracking-tight">Jolter</h1>
          </div>
          <p className="text-black/70 dark:text-white/60 text-[13px] font-[galano] tracking-tight mt-1 break-all h-6">A moderation and entertainment bot that will add privilege to your server.</p>
          </div>
          <div className="flex items-center justify-between pt-14 w-full">
          <div className="flex items-center space-x-1"><FaLink className="text-sm"/>
          <p className="text-xs font-[galano] tracking-tight">https://jolter.xyz</p>
          </div>
          <Image src={javas} alt="JavaScript" className="w-6 h-6 rounded-md false"/>
          </div>
          </div>
          </a>

          <a target="_blank" href="https://discord.gg/ekmek">
          <div className="p-5 w-full dark:bg-gray-900/10 bg-[#dbdbdb] rounded-lg transition-all duration-200 hover:bg-gray-800/10 cursor-pointer">
          <div className="w-full h-32 rounded-lg overflow-hidden bg-cover server-image bg-center">
          <div className="w-full h-full bg-black/10 backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center">
          <Image src={"https://cdn.discordapp.com/icons/1148358395003424908/56e7b1738f2c8fa064e19eb721937a2f.png?size=1024"} alt="Jolter" width="80" height="80" className="rounded-full"/>
          </div>
          </div>
          </div>
          <div className="flex flex-col max-w-sm w-full pt-4">
          <div className="flex items-center space-x-2">
          <h1 className="text-lg text-gray-700 dark:text-white/90 font-[Oceanwide] tracking-tight">Ekmek</h1>
          </div>
          <p className="text-black/70 dark:text-white/60 text-[13px] font-[galano] tracking-tight mt-1 break-all h-6">An entertainment server where people can easily chat and play games.</p>
          </div>
          <div className="flex items-center justify-between pt-14 w-full">
          <div class="flex items-center space-x-1"><FaLink className="text-sm"/>
          <p className="text-xs font-[galano] tracking-tight">https://discord.gg/ekmek</p>
          </div>
          <FaDiscord className="w-6 h-6 rounded-md false"/>
          </div>
          </div>
          </a>

          <a target="_blank" href="https://kodikas.org">
          <div className="p-5 w-full dark:bg-gray-900/10 bg-[#dbdbdb] rounded-lg transition-all duration-200 hover:bg-gray-800/10 cursor-pointer">
          <div className="w-full h-32 rounded-lg overflow-hidden bg-cover kodikas-image bg-center">
          <div className="w-full h-full bg-black/10 backdrop-blur-sm">
          <div className="w-full h-full flex items-center justify-center">
          <Image src={kodikas} alt="Jolter" width="80" height="80" className="w-20 h-20 rounded-full"/>
          </div>
          </div>
          </div>
          <div className="flex flex-col max-w-sm w-full pt-4">
          <div className="flex items-center space-x-2">
          <h1 className="text-lg text-gray-700 dark:text-white/90 font-[Oceanwide] tracking-tight">Kodikas</h1>
          </div>
          <p className="text-black/70 dark:text-white/60 text-[13px] font-[galano] tracking-tight mt-1 break-all h-6">An organization where people can <br/>develop their projects for a fee.</p>
          </div>
          <div className="flex items-center justify-between pt-14 w-full">
          <div className="flex items-center space-x-1"><FaLink className="text-sm"/>
          <p className="text-xs font-[galano] tracking-tight">https://kodikas.org</p>
          </div>
          <FaGithub className="w-6 h-6 rounded-md false"/>
          </div>
          </div>
          </a>
          </div>
          </div>
          <Footer/>
        </main>
      </body>
    </>
  )
  
}