import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


export default function Footer() {

    return (
        <div className="flex border-t-2 gap-5 justify-between self-stretch px-14 max-md:flex-wrap max-md:px-5 z-50 relative">
            <div className="flex-auto my-auto text-3xl font-bold text-violet-100">
                <div className="flex flex-col gap-1 mt-1 float-left text-lg font-bold tracking-wide uppercase text-violet-100 py-4 max-md:flex-wrap max-md:max-w-full">
                    <p>Designed and Built by Alex Kefer</p>
                    <p className={'text-sm font-normal'}>© 2024 Alex Kefer</p>
                </div>
                <div className="flex gap-10 float-right text-2xl font-bold tracking-wide uppercase text-violet-100 py-4 max-md:flex-wrap max-md:max-w-full">
                    <a href={"https://www.linkedin.com/in/alex-kefer-415b7b236/"} target="_blank" rel="noreferrer" className={'hover:scale-125 transition'}>
                        <FaLinkedin className="text-4xl" />
                    </a>
                    <a href={"https://www.github.com/alexkefer"} target="_blank" rel="noreferrer" className={'hover:scale-125 transition'}>
                        <FaGithub className="text-4xl" />
                    </a>
                    <a href={"https://www.twitter.com/alexkefer"} target="_blank" rel="noreferrer" className={'hover:scale-125 transition'}>
                        <FaTwitter className="text-4xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}