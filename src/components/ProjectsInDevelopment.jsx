import { FaReact } from "react-icons/fa";
import { SiAstro, SiVite } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

const ProjectsInDevelopment = () => {
  return (
    <aside className={"full-width-text-box split-30"}>
      <h1 className="title">In Development</h1>
      <dl>
        <dt className={"right-list-heading"}>
          Portfolio
          <div className={"icon-row"}>
            <FaReact />
            <SiVite />
          </div>
        </dt>
        <dd>
          This is in continuous development as my portfolio and knowledge base
          grows.
        </dd>
        <dt className={"right-list-heading"}>
          DATG
          <div className={"icon-row"}>
            <FaReact />
            <SiAstro className={"mt-0.5"} />
          </div>
        </dt>
        <dd>
          With a team I am developing an alt-text generator for images using
          React and Astro to generate alt-text for images.
        </dd>
        <dt className={"right-list-heading"}>
          Nutrient Tracker
          <FaReact />
        </dt>
        <dd>
          I am developing a react native mobile app nutrient tracker to track my
          daily intake of nutrients and calories.
        </dd>
        <dt className={"right-list-heading"}>
          P2P Web Cache
          <div className={"icon-row"}>
            <FaGolang />
            <IoLogoJavascript />
          </div>
        </dt>
        <dd>
          For my senior project, I am developing a peer-to-peer web cache to
          store and retrieve data from other users using Golang for the backend,
          and a chrome extension for the front-end.
        </dd>
      </dl>
    </aside>
  );
};

export default ProjectsInDevelopment;
