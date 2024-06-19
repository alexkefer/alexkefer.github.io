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
import {IoLogoJavascript} from "react-icons/io";
import {SiAstro, SiC, SiCsharp, SiExpress, SiJest, SiMongodb, SiTailwindcss, SiVite} from "react-icons/si";
import {TbBrandMysql} from "react-icons/tb";

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
                <img src={'./bearValley.JPG'} alt=" A gorgeous winter scene of snow-capped mountains and pine trees in Bear Valley, California. The sky is bright blue and the sun is shining. The trees are bare, but the snow-covered ground is pristine."
                     className={'flex-auto rounded-3xl transition duration-300  drop-shadow-2xl'}/>
                <div className={'full-width-text-box'}>
                    <h1 className="title">About Me</h1>
                    <p>
                        Hi, I am Alex Kefer. I am a software engineer with a passion for web development.
                        I will graduate from Western Washington University in the spring of 2024 with a Bachelors of Science in Computer Science and a certificate in Web Programming.
                        I am currently seeking entry-level software engineering positions.
                    </p>
                    <div className={'flex'}>
                        <Link to="/about" className="gradient-button">Learn more about me</Link>
                    </div>
                </div>
                    <div className={`full-width-text-box`}>
                        <div className={'flex flex-row justify-between'}>
                            <h1 className="title">Resume</h1>
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
                    <div className={'full-width-text-box'}>
                        <h1 className="title">Projects</h1>
                        <p>
                            I have worked on a variety of projects, ranging from web development to game development.
                            I am always looking for new projects to work on and new technologies to learn.
                        </p>
                        <div className={'flex'}>
                            <Link to="/projects"
                                  className="gradient-button">View my projects</Link>
                    </div>
                </div>
                <div className={'full-width-text-box'}>
                    <h1 className="title">Skills</h1>
                    <dl className={'text-lg text-left text-white'}>
                        <dt className={'font-semibold'}>Languages</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <row-icon><FaJava className={'mt-1'}/> Java,</row-icon>
                            <row-icon><IoLogoJavascript className={'mt-1'}/> JavaScript,</row-icon>
                            <row-icon><FaGolang className={'mt-1'}/> Golang,</row-icon>
                            <row-icon><FaPython className={'mt-1'}/> Python,</row-icon>
                            <row-icon><SiC className={'mt-1'}/> C,</row-icon>
                            <row-icon><SiCsharp className={'mt-1'}/> C#,</row-icon>
                            <row-icon><FaHtml5 className={'mt-1'}/> HTML,</row-icon>
                            <row-icon><FaCss3Alt className={'mt-1'}/> CSS</row-icon>
                        </dd>
                        <dt className={'font-semibold'}>Frameworks</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <row-icon><FaReact className={'mt-1'}/> React,</row-icon>
                            <row-icon><FaNodeJs className={'mt-1'}/> Node.js,</row-icon>
                            <row-icon><SiExpress className={'mt-1'}/> Express,</row-icon>
                            <row-icon><SiJest className={'mt-1'}/> Jest,</row-icon>
                            <row-icon><SiVite className={'mt-1'}/> Vite,</row-icon>
                            <row-icon><SiAstro className={'mt-1'}/> Astro,</row-icon>
                            <row-icon><SiTailwindcss className={'mt-1'}/> Tailwind CSS</row-icon>
                        </dd>
                        <dt className={'font-semibold'}>Tools</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <row-icon><FaGitAlt className={'mt-1'}/> Git,</row-icon>
                            <row-icon><FaGithub className={'mt-1'}/> GitHub,</row-icon>
                            <row-icon><FaDocker className={'mt-1'}/> Docker,</row-icon>
                            <row-icon><TbBrandMysql className={'mt-1'}/> SQL,</row-icon>
                            <row-icon><SiMongodb className={'mt-1'}/> MongoDB,</row-icon>
                            <row-icon><FaAws className={'mt-1'}/> AWS</row-icon>
                        </dd>
                        <dt className={'font-semibold'}>Operating Systems</dt>
                        <dd className={'flex flex-row gap-1'}>
                            <row-icon><FaLinux className={'mt-1'}/> Linux,</row-icon>
                            <row-icon><FaWindows className={'mt-1'}/> Windows,</row-icon>
                            <row-icon><FaApple className={'mt-1'}/> Mac</row-icon>
                        </dd>
                    </dl>
                </div>
                <div className={'full-width-text-box'}>
                    <h1 className="title">Contact</h1>
                    <p>
                        I am always open to new opportunities and connections. Feel free to reach out to me.
                    </p>
                    <div className={'flex'}>
                        <Link to="/contact" className="gradient-button">Contact me</Link>
                    </div>
                </div>
                </div>
            </Layout>
        </>
    );
}

export default HomePage;