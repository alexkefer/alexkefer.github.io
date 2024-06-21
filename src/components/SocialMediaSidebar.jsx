import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SocialMediaLink from "./SocialMediaLink";

const SocialMediaSidebar = () => {
  return (
    <aside className={"full-width-text-box split-25"}>
      <h1 className="title">Social Media</h1>
      <div className={"flex flex-col gap-4"}>
        <SocialMediaLink
          href={"https://www.linkedin.com/in/alex-kefer-415b7b236/"}
          icon={<FaLinkedin className="text-4xl fill-white" />}
          text={"alex-kefer-..."}
        />
        <SocialMediaLink
          href={"https://www.github.com/alexkefer"}
          icon={<FaGithub className="text-4xl fill-white" />}
          text={"@alexkefer"}
        />
        <SocialMediaLink
          href={"https://www.instagram.com/1kefer"}
          icon={<FaInstagram className="text-4xl fill-white" />}
          text={"@1kefer"}
        />
      </div>
    </aside>
  );
};

export default SocialMediaSidebar;
