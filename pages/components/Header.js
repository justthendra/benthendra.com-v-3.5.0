import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Discord from "./api/Discord";
import Activities from "./api/Activities";

export default function Header() {
    return (
        <>
            <div className="flex flex-row items-center justify-center py-44">
            <Link target="_blank" href="https://discord.com/users/267373400022843393">
            <Discord/>
            </Link>
                <div className="ml-5">
                    <h1 className="text-4xl font-semibold font-[Galano] text-gray-800 dark:text-gray-400">
                        Hi there 👋🏻,<br />
                        I&apos;m <span className="dark:text-blue-600">Thendra</span>.
                    </h1>
                    <p className="dark:text-gray-500 text-gray-800 mt-5 font-[oceanwide]">
                        I&apos;m Hasan and 19 years old. I&apos;m a Full-stack Developer,<br />
                        I have been working with software for about 7 years.<br />
                        I&apos;m trying to go further by learning new languages.
                    </p>
                    
                    <div className="flex items-center justify-start space-x-2 mt-10">
                        <Link
                            target="_blank"
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 dark:bg-zinc-900/20 dark:hover:bg-gray-50/10 bg-gray-400/40 hover:bg-gray-400/80"
                            href="https://discord.com/users/267373400022843393"
                        >
                            <FaDiscord className="w-5 h-5 dark:text-gray-400 text-gray-500 dark:hover:text-gray-300" />
                        </Link>
                        <Link
                            target="_blank"
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 dark:bg-zinc-900/20 dark:hover:bg-gray-50/10 bg-gray-400/40 hover:bg-gray-400/80"
                            href="https://github.com/justthendra"
                        >
                            <FaGithub className="w-5 h-5 dark:text-gray-400 text-gray-500 dark:hover:text-gray-300" />
                        </Link>
                        <Link
                            target="_blank"
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 dark:bg-zinc-900/20 dark:hover:bg-gray-50/10 bg-gray-400/40 hover:bg-gray-400/80"
                            href="https://instagram.com/heythendra"
                        >
                            <FaInstagram className="w-5 h-5 dark:text-gray-400 text-gray-500 dark:hover:text-gray-300" />
                        </Link>
                        <Link
                            target="_blank"
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 dark:bg-zinc-900/20 dark:hover:bg-gray-50/10 bg-gray-400/40 hover:bg-gray-400/80"
                            href="https://www.linkedin.com/in/hasannerdem/"
                        >
                            <FaLinkedin className="w-5 h-5 dark:text-gray-400 text-gray-500 dark:hover:text-gray-300" />
                        </Link>
                        <Link
                            target="_blank"
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 dark:bg-zinc-900/20 dark:hover:bg-gray-50/10 bg-gray-400/40 hover:bg-gray-400/80"
                            href="https://x.com/justhaasan"
                        >
                            <FaXTwitter className="w-5 h-5 dark:text-gray-400 text-gray-500 dark:hover:text-gray-300" />
                        </Link>
                        <Link
                            target="_blank"
                            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 dark:bg-zinc-900/20 dark:hover:bg-gray-50/10 bg-gray-400/40 hover:bg-gray-400/80"
                            href="https://youtube.com/@heythendra"
                        >
                            <FaYoutube className="w-5 h-5 dark:text-gray-400 text-gray-500 dark:hover:text-gray-300" />
                        </Link>
                    </div>
                        <Activities />
                </div>
            </div>
        </>
    );
}
