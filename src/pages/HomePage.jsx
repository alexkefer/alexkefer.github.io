import {useEffect, useState} from "react";
import Layout from "../Layout.jsx";
import {Link} from "react-router-dom";
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
import { pdfjs } from 'react-pdf';
import {IoLogoJavascript} from "react-icons/io";
import {SiAstro, SiC, SiCsharp, SiExpress, SiJest, SiMongodb, SiTailwindcss, SiVite} from "react-icons/si";
import {TbBrandMysql} from "react-icons/tb";
import './HomePage.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const HomePage = () => {
    const [isPDFOpen, setIsPDFOpen] = useState(false);

    const togglePDF = () => {
        setIsPDFOpen(!isPDFOpen);
    }

    useEffect(() => {
        document.title = 'Alex Kefer';
    }, []);

    return (
        <>
            <Layout>
                <div className={'flex flex-col gap-6'}>
                <img src={'./bearValley.JPG'} alt="Photo captured at Bear Valley, California by Alex Kefer"
                     className={'flex-auto rounded-3xl hover:scale-[101%] transition duration-300  drop-shadow-2xl hover:ring-4'}/>
                <div className={'flex p-5 flex-col gap-5 rounded-3xl bg-black bg-opacity-15 hover:scale-[101%] hover:ring-2'}>
                    <h1 className="text-3xl font-bold text-left text-white">About Me</h1>
                    <p className="text-lg text-left text-white">
                        Hi, I am Alex Kefer. I am a software engineer with a passion for web development.
                        I will graduate from Western Washington University in the spring of 2024 with a Bachelors of Science in Computer Science and a certificate in Web Programming.
                        I am currently seeking entry-level software engineering positions.
                    </p>
                    <div className={'flex'}>
                        <Link to="/about" className="transition p-2 bg-gradient-to-tl from-violet-600 via-blue-600 to-green-600 text-left text-white hover:scale-105 hover:underline rounded-2xl drop-shadow-2xl hover:ring-4 font-semibold animated-button">Learn more about me</Link>
                    </div>
                </div>
                    <div className={`p-5 flex-col gap-5 rounded-3xl bg-black bg-opacity-15 transition hover:ring-2`}>
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
                    <div className={'flex p-5 flex-col gap-5 rounded-3xl bg-black bg-opacity-15 hover:scale-[101%] transition hover:ring-2'}>
                        <h1 className="text-3xl font-bold text-left text-white">Projects</h1>
                        <p className="text-lg text-left text-white">
                            I have worked on a variety of projects, ranging from web development to game development.
                            I am always looking for new projects to work on and new technologies to learn.
                        </p>
                        <div className={'flex'}>
                            <Link to="/projects"
                                  className="animated-button transition p-2 bg-gradient-to-tl from-violet-600 via-blue-600 to-green-600 text-left text-white hover:scale-105 hover:underline rounded-2xl drop-shadow-2xl hover:ring-4 font-semibold">View my projects</Link>
                    </div>
                </div>
                <div className={'flex p-5 flex-col gap-5 rounded-3xl bg-black bg-opacity-15 hover:scale-[101%] transition hover:ring-2'}>
                    <h1 className="text-3xl font-bold text-left text-white">Skills</h1>
                    <dl className={'text-lg text-left text-white'}>
                        <dt className={'font-semibold'}>Languages</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <div className={'flex-row flex gap-1.5'}><FaJava className={'mt-1'}/> Java,</div>
                            <div className={'flex-row flex gap-1.5'}><IoLogoJavascript className={'mt-1'}/> JavaScript,</div>
                            <div className={'flex-row flex gap-1.5'}><FaGolang className={'mt-1'}/> Golang,</div>
                            <div className={'flex-row flex gap-1.5'}><FaPython className={'mt-1'}/> Python,</div>
                            <div className={'flex-row flex gap-1.5'}><SiC className={'mt-1'}/> C,</div>
                            <div className={'flex-row flex gap-1.5'}><SiCsharp className={'mt-1'}/> C#,</div>
                            <div className={'flex-row flex gap-1.5'}><FaHtml5 className={'mt-1'}/> HTML,</div>
                            <div className={'flex-row flex gap-1.5'}><FaCss3Alt className={'mt-1'}/> CSS</div>
                        </dd>
                        <dt className={'font-semibold'}>Frameworks</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <div className={'flex-row flex gap-1.5'}><FaReact className={'mt-1'}/> React,</div>
                            <div className={'flex-row flex gap-1.5'}><FaNodeJs className={'mt-1'}/> Node.js,</div>
                            <div className={'flex-row flex gap-1.5'}><SiExpress className={'mt-1'}/> Express,</div>
                            <div className={'flex-row flex gap-1.5'}><SiJest className={'mt-1'}/> Jest,</div>
                            <div className={'flex-row flex gap-1.5'}><SiVite className={'mt-1'}/> Vite,</div>
                            <div className={'flex-row flex gap-1.5'}><SiAstro className={'mt-1'}/> Astro,</div>
                            <div className={'flex-row flex gap-1.5'}><SiTailwindcss className={'mt-1'}/> Tailwind CSS</div>
                        </dd>
                        <dt className={'font-semibold'}>Tools</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <div className={'flex-row flex gap-1.5'}><FaGitAlt className={'mt-1'}/> Git,</div>
                            <div className={'flex-row flex gap-1.5'}><FaGithub className={'mt-1'}/> GitHub,</div>
                            <div className={'flex-row flex gap-1.5'}><FaDocker className={'mt-1'}/> Docker,</div>
                            <div className={'flex-row flex gap-1.5'}><TbBrandMysql className={'mt-1'}/> SQL,</div>
                            <div className={'flex-row flex gap-1.5'}><SiMongodb className={'mt-1'}/> MongoDB,</div>
                            <div className={'flex-row flex gap-1.5'}><FaAws className={'mt-1'}/> AWS</div>
                        </dd>
                        <dt className={'font-semibold'}>Operating Systems</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <div className={'flex-row flex gap-1.5'}><FaLinux className={'mt-1'}/> Linux,</div>
                            <div className={'flex-row flex gap-1.5'}><FaWindows className={'mt-1'}/> Windows,</div>
                            <div className={'flex-row flex gap-1.5'}><FaApple className={'mt-1'}/> Mac</div>
                        </dd>
                    </dl>
                </div>
                <div className={'flex p-5 flex-col gap-5 rounded-3xl bg-black bg-opacity-15 hover:scale-[101%] transition hover:ring-2'}>
                    <h1 className="text-3xl font-bold text-left text-white">Contact</h1>
                    <p className="text-lg text-left text-white">
                        I am always open to new opportunities and connections. Feel free to reach out to me.
                    </p>
                    <div className={'flex'}>
                        <Link to="/contact" className="animated-button transition p-2 bg-gradient-to-tl from-violet-600 via-blue-600 to-green-600 text-left text-white hover:scale-105 hover:underline rounded-2xl drop-shadow-2xl hover:ring-4 font-semibold">Contact me</Link>
                    </div>
                </div>
                </div>
            </Layout>
        </>
    );
}

export default HomePage;