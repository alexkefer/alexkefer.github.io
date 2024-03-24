import Layout from "../Layout";
import {Link} from "react-router-dom";
import {FaGithub, FaJava, FaReact} from "react-icons/fa";
import {BsArrowRight} from "react-icons/bs";
import {SiAstro, SiC, SiCsharp, SiJavascript, SiVite} from "react-icons/si";
import {FaGolang, FaUnity} from "react-icons/fa6";
import {IoLogoJavascript} from "react-icons/io";
import {useEffect} from "react";

const Projects = () => {

    useEffect(() => {
        document.title = 'Alex Kefer - Projects';
    }, []);

    return (
        <Layout>
            <div className={'flex flex-row gap-6'}>
            <div className={'flex flex-col gap-6 max-w-max'}>
                <div
                    className={'flex p-5 flex-col gap-5 max-w-4xl rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                    <h1 className="text-3xl font-bold text-left text-white">Completed Projects</h1>
                    <dl className={'text-lg text-left text-white flex flex-col'}>
                        <dt className={'flex flex-row justify-between text-left font-bold text-xl border-b-2 border-l-2 my-2 pl-2'}>
                            Spell Checker
                            <FaJava/>
                        </dt>
                        <dd className={'text-left mb-5'}>
                            In Java I developed my own version of a spell checker, using a dictionary to check its existence and then if it doesn't exist to check for common mispellings.
                        </dd>
                        <dt className={'flex flex-row justify-between text-left font-bold text-xl border-b-2 border-l-2 my-2 pl-2'}>
                            Cowboy Speghetti Simulator 2023
                            <div className={'flex flex-row gap-2'}>
                                <SiCsharp/>
                                <FaUnity/>
                            </div>
                        </dt>
                        <dd className={'text-left mb-5'}>
                            <p className={'text-white text-lg'}>In Unity I worked with a small team to develop a proof-of-concept video game.</p>
                            <h2 className={'text-white text-lg font-bold'}>Responsibilities:</h2>
                            <ul className={'text-white text-lg list-disc list-inside'}>
                                <li>Developed the multiple enemy and boss behavior AI's</li>
                                <li>Optimized enemy damage and weaponry</li>
                                <li>White-boxed, designed, & developed the boss stage level design</li>
                            </ul>
                        </dd>
                        <dt className={'flex flex-row justify-between text-left font-bold text-xl border-b-2 border-l-2 my-2 pl-2'}>Class Registration System
                            <FaJava/>
                        </dt>
                        <dd className={'text-left mb-5'}>
                            <p className={'text-white text-lg'}>In Java I developed a class registration system connecting to a database using JDBC prepared statements to retrieve and send information to a SQL database.</p>
                        </dd>
                        <dt className={'flex flex-row justify-between text-left font-bold text-xl border-b-2 border-l-2 my-2 pl-2'}>LRU Cache Server & Client
                            <SiC/>
                            </dt>
                        <dd className={'text-left mb-5'}>
                            <p className={'text-white text-lg'}>In C I developed an LRU cache on a server in order to speed up access to the hash table I built with it to store data. I also built client commands specific to receive, set, edit, delete, and various other options.</p>
                        </dd>
                        <dt className={'flex flex-row justify-between text-left font-bold text-xl border-b-2 border-l-2 my-2 pl-2'}>Calculator App
                            <FaReact/>
                        </dt>
                        <dd className={'text-left mb-5'}>
                            <p className={'text-white text-lg'}>In React Native on JavaScript I developed a calculator alongside Jest test cases to check for edge cases that could fail the application.</p>
                        </dd>
                        <dt className={'flex flex-row justify-between text-left font-bold text-xl border-b-2 border-l-2 my-2 pl-2'}>Old Portfolio Website
                            <FaReact/>
                        </dt>
                        <dd className={'text-left mb-5'}>
                            <p className={'text-white text-lg'}>In React I developed my first portfolio website to showcase my projects and skills. I like to keep it as a completed project to go back to and to see how far I have come.</p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div className={'flex flex-col gap-5 p-5 text-right  rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                <h1 className="text-[25px] font-bold text-white">In Development</h1>
                <dl className={'flex flex-col'}>
                    <dt className={'flex flex-row justify-between text-xl font-bold text-white border-b-2 border-r-2 my-2 pr-2'}>
                        <div className={'flex flex-row gap-2'}>
                            <FaReact/>
                            <SiVite/>
                        </div>
                        Portfolio Website</dt>
                    <dd className={'text-white text-lg max-w-sm mb-5'}>This is in continuous development as my portfolio and knowledge base grows.</dd>
                    <dt className={'flex flex-row justify-between text-xl font-bold text-white border-b-2 border-r-2 my-2 pr-2'}>
                        <div className={'flex flex-row gap-1 mt-1'}>
                            <FaReact/>
                            <SiAstro className={'mt-0.5'}/>
                        </div>
                        Alt-text Generator</dt>
                    <dd className={'text-white text-lg max-w-sm mb-5'}>With a team I am developing an alt-text generator for images using React and Astro to generate alt-text for images.</dd>
                    <dt className={'flex flex-row justify-between text-xl font-bold text-white border-b-2 border-r-2 my-2 pr-2'}>
                        <FaReact/>
                        Nutrient Tracker</dt>
                    <dd className={'text-white text-lg max-w-sm mb-5'}>I am developing a react native mobile app nutrient tracker to track my daily intake of nutrients and calories.</dd>
                    <dt className={'flex flex-row justify-between text-xl font-bold text-white border-b-2 border-r-2 my-2 pr-2'}>
                        <div className={'flex flex-row gap-1 mt-1'}>
                            <FaGolang/>
                            <IoLogoJavascript/>
                        </div>
                        P2P Web Cache</dt>
                    <dd className={'text-white text-lg max-w-sm'}>For my senior project, I am developing a peer-to-peer web cache to store and retrieve data from other users using Golang for the backend, and a chrome extension for the front-end.</dd>
                </dl>
            </div>
            </div>
        </Layout>
    );
}

export default Projects;