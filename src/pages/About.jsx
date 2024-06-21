import { useEffect } from "react";
import Layout from "../Layout";
import AboutMe from "../components/AboutMe";
import PDFSection from "../components/PDFSection.jsx";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies.jsx";
import SkillsSidebar from "../components/SkillsSidebar.jsx";
import SocialMediaSidebar from "../components/SocialMediaSidebar.jsx";

const About = () => {
  useEffect(() => {
    document.title = "Alex Kefer - About";
  }, []);

  return (
    <Layout>
      <div className={"split-70-30"}>
        <div className={"split-70"}>
          <AboutMe hasLink={false} />
          <Experience />
        </div>
        <div className={"split-30 flex-col justify-between"}>
          <SkillsSidebar />
          <SocialMediaSidebar />
        </div>
      </div>
      <Education />
      <Hobbies />
      <PDFSection />
    </Layout>
  );
};

export default About;
