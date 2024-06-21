import { IoLogoJavascript } from "react-icons/io";
import {
  FaApple,
  FaAws,
  FaCss3Alt,
  FaDocker,
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
import {
  SiAstro,
  SiC,
  SiCsharp,
  SiExpress,
  SiJest,
  SiMicrosoftazure,
  SiMongodb,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";

const SkillsSidebar = () => {
  return (
    <aside>
      <div className={"full-width-text-box"}>
        <h1 className="title text-right">Skills</h1>
        <dl>
          <dt className={"right-list-heading"}>Languages</dt>
          <dd>
            <div className={"flex gap-2 justify-end"}>
              <IoLogoJavascript className={"text-4xl"} />
              <FaJava className={"text-4xl"} />
              <FaPython className={"text-4xl"} />
            </div>
            <div className={"flex gap-2 justify-end"}>
              <SiC className={"text-4xl"} />
              <SiCsharp className={"text-4xl"} />
              <FaGolang className={"text-4xl"} />
            </div>
          </dd>
          <dt className={"right-list-heading"}>Frameworks</dt>
          <dd>
            <div className={"flex gap-2 justify-end "}>
              <FaHtml5 className={"text-4xl"} />
              <FaCss3Alt className={"text-4xl"} />
              <FaReact className={"text-4xl"} />
              <FaNodeJs className={"text-4xl"} />
            </div>
            <div className={"flex gap-2 justify-end"}>
              <SiTailwindcss className={"text-4xl"} />
              <SiVite className={"text-4xl"} />
              <SiExpress className={"text-4xl"} />
              <SiAstro className={"text-4xl"} />
            </div>
          </dd>
          <dt className={"right-list-heading"}>Databases</dt>
          <dd className={"flex-row justify-end"}>
            <TbBrandMysql className={"text-4xl"} />
            <SiMongodb className={"text-4xl"} />
          </dd>
          <dt className={"right-list-heading"}>Operating Systems</dt>
          <dd className={"flex-row justify-end"}>
            <FaApple className={"text-4xl"} />
            <FaWindows className={"text-4xl"} />
            <FaLinux className={"text-4xl"} />
          </dd>
          <dt className={"right-list-heading"}>Tools</dt>
          <dd>
            <div className={"flex gap-2 justify-end"}>
              <FaGithub className={"text-4xl"} />
              <FaGitAlt className={"text-4xl"} />
              <FaDocker className={"text-4xl"} />
            </div>
            <div className={"flex gap-2 justify-end"}>
              <FaAws className={"text-4xl"} />
              <SiJest className={"text-4xl"} />
              <SiMicrosoftazure className={"text-4xl"} />
            </div>
          </dd>
        </dl>
      </div>
    </aside>
  );
};

export default SkillsSidebar;
