import { useEffect, useState } from "react";
import Layout from "../Layout";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAstro,
  SiC,
  SiCsharp,
  SiExpress,
  SiJest,
  SiTailwindcss,
  SiVite,
  SiMongodb,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaFilePdf, FaGolang } from "react-icons/fa6";
import {
  FaApple,
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaFileDownload,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaWindows,
} from "react-icons/fa";
import PDFViewer from "../components/PDFViewer.jsx";
import AboutMe from "../components/AboutMe";
import PDFSection from "../components/PDFSection.jsx";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies.jsx";
import SkillsSidebar from "../components/SkillsSidebar.jsx";

const About = () => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const togglePDF = () => {
    setIsPDFOpen(!isPDFOpen);
  };
  useEffect(() => {
    document.title = "Alex Kefer - About";
  }, []);

  return (
    <Layout>
      <div className={"split-75-25"}>
        <div className={"split-75"}>
          <AboutMe hasLink={false} />
          <Experience />
        </div>
        <SkillsSidebar />
      </div>
      <Education />
      <Hobbies />
      <PDFSection />
    </Layout>
  );
};

export default About;
