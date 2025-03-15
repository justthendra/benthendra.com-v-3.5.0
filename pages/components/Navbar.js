import { useEffect, useState } from "react";
import Link from "next/link";
import { FaHome, FaProjectDiagram, FaMoon, FaSun } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 grid grid-cols-3 max-w-6xl mx-auto mt-4 p-1 px-2 translate-y-0 rounded-full transition-all duration-200 ${
          isScrolled ? "bg-[#bbbbbb] dark:bg-[#050505]" : "bg-gray-300 dark:bg-[#020202]"
        }`}
      >
        <div className="flex items-center ml-5 space-x-3">
          <div className="w-10 h-10 rounded-full flex items-center bg-gray-400/30 dark:bg-zinc-900/60 justify-center text-center ml-[-20px] ">
            <p className="dark:text-gray-200 text-gray-500 text-xl font-bold">T</p>
          </div>
          <div className="sm:flex-col flex">
            <h1 className="dark:text-gray-200 text-xl text-gray-500 font-semibold font-[Galano]">
              Thendra
            </h1>
            <p className="items-center justify-center text-xs dark:text-gray-300 w-14 font-[Oceanwide] tracking-tight py-px rounded-full text-gray-500 bg-gray-400/30 dark:bg-gray-600/10 flex">
              v3.5.0
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="flex space-x-2">
          <Link href="/">
            <div className="flex flex-row items-center">
                <div className="py-1 px-3 dark:hover:bg-zinc-700/20 dark:text-gray-400 rounded-full bg-gray-400/30 dark:bg-zinc-900/60 text-gray-500 hover:text-gray-600 hover:bg-gray-500/30 transition-all duration-200 cursor-pointer">
                  <FaHome className="w-6 h-6 dark:text-gray-400 dark:hover:text-gray-300"/>
                </div>
            </div>
          </Link>
          <Link href="/projects">
            <div className="flex flex-row items-center">
                <div className="py-1 px-3 dark:hover:bg-zinc-700/20 dark:text-gray-400 rounded-full bg-gray-400/30 dark:bg-zinc-900/60 text-gray-500 hover:text-gray-600 hover:bg-gray-500/30 transition-all duration-200 cursor-pointer">
                <FaProjectDiagram className="w-6 h-6 dark:text-gray-400 dark:hover:text-gray-300"/>
                </div>
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex flex-row items-center">
                <div className="py-1 px-3 dark:hover:bg-zinc-700/20 dark:text-gray-400 rounded-full bg-gray-400/30 dark:bg-zinc-900/60 text-gray-500 hover:text-gray-600 hover:bg-gray-500/30 transition-all duration-200 cursor-pointer">
                <IoMdContact className="w-6 h-6 dark:text-gray-400 dark:hover:text-gray-300"/>
                </div>
            </div>
        </Link>
          </div>
        </div>
        <div className="flex justify-end items-center">
        <div className="flex flex-row items-center">
        <button onClick={toggleTheme}>
          <div className="py-1 px-3 dark:hover:bg-zinc-700/20 dark:text-gray-400 justify-center items-center bg-gray-400/30 dark:bg-zinc-900/60 text-gray-500 hover:text-gray-600 hover:bg-gray-500/30 flex flex-col rounded-full transition-all duration-200 cursor-pointer">
           {theme === 'dark' ? <FaMoon className="w-6 h-6"/> : <FaSun className="w-6 h-6"/>}
            </div>
        </button>
            </div>
            </div>
      </div>
    </>
  );
}
