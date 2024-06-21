import Layout from "../Layout";
import { useEffect } from "react";
import ContactMe from "../components/ContactMe.jsx";
import SocialMediaSidebar from "../components/SocialMediaSidebar.jsx";

export default function Contact() {
  useEffect(() => {
    document.title = "Alex Kefer - Contact";
  }, []);

  return (
    <Layout>
      <div className={"split-75-25"}>
        <div className={"split-75"}>
          <ContactMe />
        </div>
        <div className={"split-25"}>
          <SocialMediaSidebar />
        </div>
      </div>
    </Layout>
  );
}
