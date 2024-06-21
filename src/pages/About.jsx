import { useEffect } from "react";
import Layout from "../Layout";
import AboutMe from "../components/AboutMe";
import PDFSection from "../components/PDFSection.jsx";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Hobbies from "../components/Hobbies.jsx";
import SkillsSidebar from "../components/SkillsSidebar.jsx";

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
        <SkillsSidebar className={"split-30"} />
      </div>
      <Education />
      <Hobbies />
      <PDFSection />
    </Layout>
  );
};

export default About;
