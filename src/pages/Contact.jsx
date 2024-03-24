import Layout from "../Layout";
import {FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import {useEffect} from "react";

export default function Contact() {

    useEffect(() => {
        document.title = 'Alex Kefer - Contact';
    }, []);

    return (
        <Layout>
            <div className={'flex flex-row gap-6'}>
                <div className={'flex p-5 flex-row gap-5 rounded-3xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                    <img className={'w-48 rounded-3xl hover:scale-[101%] transition duration-300 drop-shadow-2xl hover:ring-4'} src={'./me.JPG'} alt={'Photo of Alex Kefer'}/>{/* eslint-disable-next-line react/no-unescaped-entities */}
                    <div className={'flex flex-col gap-5'}>
                    <h1 className="text-3xl font-bold text-left text-white">Contact Me</h1>
                    <p className="text-lg text-left text-white">
                        I am currently seeking entry-level software engineering positions. Please feel free to reach out to me via email or social media.
                    </p>
                    <div className={'flex gap-2'}>
                        <a href={'mailto:alexkefer@icloud.com'}
                            className={'p-2 bg-gradient-to-tl from-violet-600 via-blue-600 to-green-600 text-left text-white hover:scale-105 hover:underline rounded-2xl drop-shadow-2xl hover:ring-4 font-semibold animated-button'}>
                             Email Me
                        </a>
                    </div>
                    </div>
                </div>
                <div className={'flex p-5 flex-col gap-5 rounded-3xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2 min-w-fit'}>
                    <h1 className="text-3xl font-bold text-left text-white">Social Media</h1>
                    <div className={'flex flex-col gap-4'}>
                        <a href={"https://www.linkedin.com/in/alex-kefer-415b7b236/"} target="_blank" rel="noreferrer"
                           className={'text-lg flex flex-row justify-between hover:underline-offset-auto hover:underline text-white transition hover:bg-black hover:bg-opacity-15 p-2 rounded-xl'}>
                            <FaLinkedin className="text-4xl fill-white" />
                            <p className={'text-white text-center text-lg mt-1'}>alex-kefer-...</p>
                        </a>
                        <a href={"https://www.github.com/alexkefer"} target="_blank" rel="noreferrer"
                           className={'text-lg flex flex-row justify-between hover:underline-offset-auto hover:underline text-white transition hover:bg-black hover:bg-opacity-15 p-2 rounded-xl'}>
                            <FaGithub className="text-4xl fill-white" />
                            <p className={'text-white text-center text-lg mt-1'}>@alexkefer</p>
                        </a>
                        <a href={"https://www.twitter.com/alexkefer"} target="_blank" rel="noreferrer"
                            className={'text-lg flex flex-row justify-between hover:underline-offset-auto hover:underline text-white transition hover:bg-black hover:bg-opacity-15 p-2 rounded-xl'}>
                            <FaTwitter className="text-4xl fill-white" />
                            <p className={'text-white text-center text-lg mt-1'}>@alexkefer</p>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}