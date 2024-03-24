import {useEffect, useState} from 'react';
import Layout from "../Layout";
import {IoLogoJavascript} from "react-icons/io";
import {SiAstro, SiC, SiCsharp, SiExpress, SiJest, SiTailwindcss, SiVite, SiMongodb} from "react-icons/si";
import {TbBrandMysql} from "react-icons/tb";
import {FaFilePdf, FaGolang} from "react-icons/fa6";
import {
    FaApple,
    FaAws,
    FaCss3Alt, FaDocker,
    FaFileDownload,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaJava, FaLinux,
    FaNodeJs,
    FaPython,
    FaReact, FaWindows
} from "react-icons/fa";
import PDFViewer from "../components/PDFViewer.jsx";

const About = () => {
    const [isPDFOpen, setIsPDFOpen] = useState(false);

    const togglePDF = () => {
        setIsPDFOpen(!isPDFOpen);
    }
    useEffect(() => {
        document.title = 'Alex Kefer - About';
    }, []);

    return (
        <Layout>
            <div className={'flex flex-row gap-6'}>
                <div className={'flex flex-col gap-6'}>
                    <div
                        className={'flex p-5 flex-col gap-5 rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                        <h1 className="text-3xl font-bold text-left text-white">About Me</h1>
                        <p className="text-lg text-left text-white">
                            Hi, I am Alex Kefer. I am a software engineer with a passion for web development.
                            I will graduate from Western Washington University in the spring of 2024 with a Bachelors of
                            Science in Computer Science and a certificate in Web Programming.
                            I am currently seeking entry-level software engineering positions.
                        </p>
                    </div>
                    <div
                        className={'flex p-5 flex-col gap-5 rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                        <h1 className="text-3xl font-bold text-left text-white">Experience</h1>
                        <dl className={'text-lg text-left text-white flex flex-col'}>
                            <dt className={'text-left font-bold text-xl border-b-2 border-l-2 my-2 px-2 mr-[57%]'}>Web
                                Accessibility Intern
                            </dt>
                            <dd className={'text-left'}>
                                <div className={'flex justify-between font-semibold'}>
                                    <a href={'https://www.wwu.edu'}
                                       className={'p-1 hover:drop-shadow-2xl hover:cursor-pointer hover:bg-black hover:bg-opacity-15 rounded-lg'}
                                       target={'_blank'} rel={'noreferrer'}>Western Washington University</a>
                                    <p>January 2024 - March 2024</p>
                                </div>
                                <ul className={'pl-8 list-disc list-outside'}>
                                    <li>Translated legacy documents to webpages to improve accessibility</li>
                                    <li>Developed a proof-of-concept descriptive alternative text generator
                                        <ul className={'pl-6 list-disc list-outside'}>
                                            <li>Utilizes Azure AI and Gemini APIs to generate alternative text</li>
                                            <li>Includes prompting mechanism to allow users to provide information for
                                                improved results
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </dd>
                            <dt className={'text-left font-bold text-xl border-b-2 border-l-2 my-2 px-2 mr-[57%]'}>Bartender</dt>
                            <dd className={'text-left'}>
                                <div className={'flex justify-between font-semibold'}>
                                    <a href={'https://btownkitchen.com'}
                                       className={'p-1 hover:drop-shadow-2xl hover:cursor-pointer hover:bg-black hover:bg-opacity-15 rounded-lg'}
                                       target={'_blank'} rel={'noreferrer'}>B-Town @ Four Points Sheraton</a>
                                    <p>January 2024 - Present</p>
                                </div>
                                <ul className={'pl-8 list-disc list-outside'}>
                                    <li>Provided exceptional customer service to patrons</li>
                                    <li>Developed a strong understanding of mixology and drink preparation</li>
                                </ul>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className={'flex-col flex gap-6'}>
                    <div
                        className={'flex p-5 flex-col rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2 min-w-60 pb-8'}>
                        <h1 className="text-3xl font-bold mb-2 text-right text-white">Skills</h1>
                        <dl className={'text-lg text-left text-white flex flex-col'}>
                            <dt className={'text-right font-bold border-b-2 border-r-2 my-4 px-2 ml-[5%]'}>Languages</dt>
                            <dd className={'flex-col justify-end flex gap-2'}>
                                <div className={'flex gap-2 justify-end'}>
                                    <IoLogoJavascript className={'text-4xl'}/>
                                    <FaJava className={'text-4xl'}/>
                                    <FaPython className={'text-4xl'}/>
                                </div>
                                <div className={'flex gap-2 justify-end'}>
                                    <SiC className={'text-4xl'}/>
                                    <SiCsharp className={'text-4xl'}/>
                                    <FaGolang className={'text-4xl'}/>
                                </div>
                            </dd>
                            <dt className={'text-right font-bold border-b-2 border-r-2 my-4 px-2 ml-[5%]'}>Frameworks</dt>
                            <dd className={'flex-col flex gap-2'}>
                                <div className={'flex gap-2 justify-end '}>
                                    <FaHtml5 className={'text-4xl'}/>
                                    <FaCss3Alt className={'text-4xl'}/>
                                    <FaReact className={'text-4xl'}/>
                                    <FaNodeJs className={'text-4xl'}/>
                                </div>
                                <div className={'flex gap-2 justify-end'}>
                                    <SiTailwindcss className={'text-4xl'}/>
                                    <SiVite className={'text-4xl'}/>
                                    <SiExpress className={'text-4xl'}/>
                                </div>
                            </dd>
                            <dt className={'text-right font-bold border-b-2 border-r-2 my-4 px-2 ml-[5%]'}>Databases</dt>
                            <dd className={'justify-end flex gap-2'}>
                                <TbBrandMysql className={'text-4xl'}/>
                                <SiMongodb className={'text-4xl'}/>
                            </dd>
                            <dt className={'text-right font-bold border-b-2 border-r-2 my-4 px-2 ml-[5%]'}>Operating
                                Systems
                            </dt>
                            <dd className={'justify-end flex gap-2'}>
                                <FaApple className={'text-4xl'}/>
                                <FaWindows className={'text-4xl'}/>
                                <FaLinux className={'text-4xl'}/>
                            </dd>
                            <dt className={'text-right font-bold border-b-2 border-r-2 my-4 px-2 ml-[5%]'}>Tools</dt>
                            <dd className={'flex-col flex gap-2'}>
                                <div className={'flex gap-2 justify-end'}>
                                    <FaGithub className={'text-4xl'}/>
                                    <FaGitAlt className={'text-4xl'}/>
                                    <FaDocker className={'text-4xl'}/>
                                </div>
                                <div className={'flex gap-2 justify-end'}>
                                    <FaAws className={'text-4xl'}/>
                                    <SiJest className={'text-4xl'}/>
                                    <SiAstro className={'text-4xl'}/>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div
                className={'flex p-5 flex-col my-5 rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                <h1 className="text-3xl font-bold text-left text-white">Education</h1>
                <dl className={'text-lg text-left text-white flex flex-col'}>
                    <dt className={'text-left font-bold text-xl border-b-2 border-l-2 my-2 px-2 mr-[50%]'}>Bachelor
                        of Science in Computer Science
                    </dt>
                    <dd className={'text-left'}>
                        <div className={'flex justify-between font-semibold'}>
                            <a href={'https://www.wwu.edu'}
                               className={'p-1 hover:drop-shadow-2xl hover:cursor-pointer hover:bg-black hover:bg-opacity-15 rounded-lg'}
                               target={'_blank'} rel={'noreferrer'}>Western Washington University</a>
                            <p>September 2020 - June 2024</p>
                        </div>
                        <ul className={'pl-8 list-disc list-outside'}>
                            <li>Expected graduation date: June 2024</li>
                        </ul>
                    </dd>
                    <dt className={'text-left font-bold text-xl border-b-2 border-l-2 my-2 px-2 mr-[50%]'}>
                        Certificate in Web Programming
                    </dt>
                    <dd className={'text-left'}>
                        <div className={'flex justify-between font-semibold'}>
                            <a href={'https://www.wwu.edu'}
                               className={'p-1 hover:drop-shadow-2xl hover:cursor-pointer hover:bg-black hover:bg-opacity-15 rounded-lg'}
                               target={'_blank'} rel={'noreferrer'}>Western Washington University</a>
                            <p>September 2020 - June 2024</p>
                        </div>
                        <ul className={'pl-8 list-disc list-outside'}>
                            <li>Completed courses and internship related to web development</li>
                            <li>Expected graduation date: June 2024</li>
                        </ul>
                    </dd>
                </dl>
                <div
                    className={'flex flex-col'}>
                    <h2 className="text-2xl font-bold text-left text-white mt-5 my-4">Relevent Coursework</h2>
                    <ul className={'grid grid-cols-3 gap-2 text-lg text-center text-white'}>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Computer Systems I & II</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Web Scripting</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Mobile Device Programming</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Database Systems</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Operating Systems</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Analysis of Algorithms I & II</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Computer Networking</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Data Structures</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Human-Computer Interaction</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Object-Oriented Programming</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Game Programming</li>
                        <li className={'bg-black bg-opacity-15 rounded-xl p-2'}>Cloud Computing Fundamentals</li>
                    </ul>
                </div>
            </div>
            <div className={'flex-col my-6 p-5 rounded-2xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                <h1 className="text-3xl mb-4 font-bold text-left text-white">Hobbies</h1>
                <ul className={'flex gap-4'}>
                    <li className={'bg-black bg-opacity-25 rounded-2xl p-2 flex flex-col hover:ring-4 transition'}>
                        <img src={'./hobby1.JPG'} alt={'Skiing'}
                             className={'h-40 mb-4 object-cover rounded-xl drop-shadow-2xl'}/>
                        <p className={'text-lg text-center text-white max-w-xs'}>
                            I enjoy the mountains, specifically skiing and hiking. I have been on skis since I was a wee little lad and have been skiing ever since.
                        </p>
                    </li>
                    <li className={'bg-black bg-opacity-25 rounded-2xl p-2 flex flex-col hover:ring-4 transition'}>
                        <img src={'./hobby2.JPG'} alt={'Video Games'}
                             className={'h-40 mb-4 object-cover rounded-xl drop-shadow-2xl'}/>
                        <p className={'text-lg text-center text-white max-w-xs'}>
                            I grew up playing a lot a video games, and whilst I do not play as much anymore, I still
                            enjoy them and keeping up with the community.
                        </p>
                    </li>
                    <li className={'bg-black bg-opacity-25 rounded-2xl p-2 flex flex-col hover:ring-4 transition'}>
                        <img src={'./hobby3.jpg'} alt={'Basketball'}
                             className={'h-40 mb-4 object-cover rounded-xl drop-shadow-2xl'}/>
                        <p className={'text-lg text-white text-center max-w-xs'}>
                            I enjoy watching the NBA, specifically the Golden State Warriors. I also enjoy occasionally
                            playing basketball in my spare time.
                        </p>
                    </li>
                </ul>
            </div>
            <div className={`p-5 flex-col gap-5 rounded-2xl bg-black bg-opacity-15 transition hover:ring-2`}>
                <div className={'flex flex-row justify-between'}>
                    <h1 className="text-3xl mt-1 font-bold text-left text-white">Resume</h1>
                    <div className={'flex flex-row gap-2'}>
                        <a href={'./Alex_Kefer_Resume.pdf'} download={'Alex_Kefer_Resume.pdf'}
                           className={'p-2 rounded-lg hover:bg-black hover:bg-opacity-25'}>
                            <FaFileDownload className={'fill-white h-8 w-8 drop-shadow-xl'}/>
                        </a>
                        <div className={'p-2 rounded-lg hover:bg-black hover:bg-opacity-25 cursor-pointer'}>
                            <FaFilePdf className={'fill-white h-8 w-8 drop-shadow-xl'} onClick={togglePDF}/>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex mt-1 justify-center`}> {/* Adjust max-h-0 if needed */}
                    <div>
                        {isPDFOpen ? <PDFViewer/> : null}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;