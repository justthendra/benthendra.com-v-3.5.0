import Image from "next/image";
import javas from "../img/javas.png"
import react from "../img/react.png"
import next from "../img/next.png"
import node from "../img/nodejs.png"
import html from "../img/html.png"
import css from "../img/css.png"
import php from "../img/php.png"
import csharp from "../img/csharp.png"
import cpp from "../img/cpp.png"
import python from "../img/py.png"
import mdb from "../img/mongo.png"
import tail from "../img/tailwind.png"
import font from "../img/font.png"
import git from "../img/github-mark.png"
import java from "../img/java.png"
import kotlin from "../img/kotlin.png"
import express from "../img/express.png"
import perl from "../img/perl.png"
import lua from "../img/lua.png"
import { FaCubes } from "react-icons/fa6";


export default function Technologies() {

  return (
        <>
          <section id="languages">
          <div className="py-24 max-w-6xl w-full mx-auto">
          <h1 className="flex items-center text-2xl sm:text-4xl text-start tracking-tight">
                <FaCubes className="w-8 h-8 dark:text-gray-300" />
                <span className="dark:text-gray-300 text-3xl font-[Oceanwide]">
                  &nbsp;Technologies I Use
                </span>
              </h1>
      <p className="font-[galano] dark:text-gray-400 tracking-tight text-sm sm:text-base">
      I listed the programming languages I know. I&apos;m still learning some of them.
              </p>
      <div className="grid grid-cols-1 max-w-[1170px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-12">
      <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center space-x-3">
              <Image src={react} width="34" height="34" className="p-1 rounded-md" alt="React" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">React</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center space-x-3">
              <Image src={next} width="34" height="34" className="p-1 rounded-md" alt="Next.js" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Next.js</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={node} width="34" height="34" className="p-1 rounded-md" alt="Node.js" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Node.js</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={javas} width="34" height="34" className="p-1 rounded-md" alt="Javascript" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Javascript</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={html} width="34" height="34" className="p-1 rounded-md" alt="HTML" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">HTML</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={css} width="34" height="34" className="p-1 rounded-md" alt="CSS" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">CSS</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center space-x-3">
              <Image src={php} width="34" height="34" className="p-1 rounded-md" alt="PHP" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">PHP</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={csharp} width="34" height="34" className="p-1 rounded-md" alt="C#" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">C#</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={cpp} width="34" height="34" className="p-1 rounded-md" alt="C++" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">C++</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={python} width="34" height="34" className="p-1 rounded-md" alt="Python" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Python</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={mdb} width="34" height="34" className="p-1 rounded-md" alt="MongoDB" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">MongoDB</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 bg-gray-300 hover:bg-gray-400/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={tail} width="34" height="34" className="p-1 rounded-md" alt="TailwindCSS" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">TailwindCSS</span>
              </div>
              </div>
        <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={font} width="34" height="34" className="p-1 rounded-md" alt="Font Awesome" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Font Awesome</span>
              </div>
              </div>
        <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={git} width="34" height="34" className="p-1 rounded-md" alt="Github" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Github</span>
              </div>
              </div>
        <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={java} width="34" height="34" className="p-1 rounded-md" alt="Java" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Java</span>
              </div>
              </div>
        <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={kotlin} width="34" height="34" className="p-1 rounded-md" alt="Kotlin" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Kotlin</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center mt-[-5px] space-x-3">
              <Image src={perl} width="34" height="34" className="p-1 rounded-md" alt="Perl" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Perl</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center space-x-3">
              <Image src={express} width="34" height="34" className="p-1 rounded-md" alt="Express" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Express</span>
              </div>
              </div>
              <div className="p-2 border w-[273px] h-[45px] dark:border-black/5 dark:bg-zinc-900/20 bg-gray-300 hover:bg-gray-400/50 dark:hover:bg-zinc-900/40 backdrop-blur-lg rounded-lg transition-all duration-200 cursor-pointer">
            <div className="jsx-ed981c243ab0ceaf flex items-center space-x-3">
              <Image src={lua} width="34" height="34" className="p-1 rounded-md" alt="Lua" />
              <span className="jsx-ed981c243ab0ceaf ml-2 dark:text-gray-300 font-[galano]">Lua</span>
              </div>
              </div>
      </div>
    </div>
    </section>
          
        </>
  )
}
