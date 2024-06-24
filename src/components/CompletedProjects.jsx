import { FaJava, FaReact } from "react-icons/fa";
import { SiAstro, SiC, SiCsharp } from "react-icons/si";
import { FaGolang, FaUnity } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoOpenOutline } from "react-icons/io5";

const CompletedProjects = () => {
  return (
    <div className={"full-width-text-box split-70"}>
      <div className={"flex-row flex gap-2"}>
        <h1 className="title">Completed Projects</h1>
        <p className={"text-sm mt-0.5"}>
          * In order of most recently completed
        </p>
      </div>
      <dl>
        <dt className={"left-list-heading"}>
          Web Weasel
          <div className={"icon-row"}>
            <FaGolang />
            <IoLogoJavascript />
          </div>
        </dt>
        <dd>
          For our senior project, collaborated in a team of four to develop a
          Chrome extension enabling users to download web pages for offline
          viewing and share them with others on their local network.
          <h2 className={"text-white text-lg font-bold"}>Responsibilities:</h2>
          <ul className={"text-white text-lg list-disc list-inside"}>
            <li>
              Architected and implemented a web application utilizing React,
              Vite, Tailwind, and CRX.js.
            </li>
            <li>
              Engineered a novel peer-to-peer routing mechanism using Golang.
            </li>
            <li>
              Developed a robust backend web downloading component capable of
              retrieving all client-side rendered HTML, CSS, and JavaScript of a
              website.
            </li>
          </ul>
          <a
            className={"gradient-button flex-row flex max-w-max gap-1 mt-2"}
            href={"https://github.com/alexkefer/Web-Weasel"}
            target={"_blank"}
          >
            <p className={"text-sm"}>View Project on GitHub</p>
            <IoOpenOutline className={"mt-0.5 text-sm"} />
          </a>
        </dd>
        <dt className={"left-list-heading"}>
          DATG
          <div className={"icon-row"}>
            <SiAstro className={"mt-0.5"} />
          </div>
        </dt>
        <dd>
          Developed an Astro.js web application to enhance the accessibility of
          Western Washington University websites by generating descriptive
          alternative text for images. Leveraged advanced AI APIs to analyze
          images and produce relevant text descriptions, significantly improving
          the user experience for individuals relying on screen readers.
          Implemented Azure AD authentication to secure the application and
          integrated WWU's styling template, Ashlar, to ensure consistent
          theming with the university's online materials.
          <div className={"flex gap-4 mt-2"}>
            <a
              className={"gradient-button flex-row flex max-w-max gap-1"}
              href={"https://datg.wwu.edu/"}
              target={"_blank"}
            >
              <p className={"text-sm"}>View Application</p>
              <IoOpenOutline className={"mt-0.5 text-sm"} />
            </a>
            <a
              className={"gradient-button flex-row flex max-w-max gap-1"}
              href={
                "https://github.com/wwu-webtech/descriptive-alt-text-generator"
              }
              target={"_blank"}
            >
              <p className={"text-sm"}>View Project on GitHub</p>
              <IoOpenOutline className={"mt-0.5 text-sm"} />
            </a>
          </div>
        </dd>
        <dt className={"left-list-heading"}>
          Cowboy Speghetti Simulator 2023
          <div className={"icon-row"}>
            <SiCsharp />
            <FaUnity />
          </div>
        </dt>
        <dd>
          <p>
            In Unity I worked with a small team of 4 to develop a
            proof-of-concept video game.
          </p>
          <h2 className={"text-white text-lg font-bold"}>Responsibilities:</h2>
          <ul className={"text-white text-lg list-disc list-inside"}>
            <li>Developed the multiple enemy and boss behavior AI's</li>
            <li>Optimized enemy damage and weaponry</li>
            <li>
              White-boxed, designed, & developed the boss stage level design
            </li>
          </ul>
        </dd>
        <dt className={"left-list-heading"}>
          Class Registration System
          <FaJava />
        </dt>
        <dd>
          <p>
            Developed a class registration system in Java, leveraging JDBC
            prepared statements to interact with a SQL database for retrieving
            and sending information.
          </p>
        </dd>
        <dt className={"left-list-heading"}>
          LRU Cache Server & Client
          <SiC />
        </dt>
        <dd>
          <p>
            Developed an LRU cache in C on a server to enhance access speed to a
            custom-built hash table used for data storage. Additionally, created
            client-side command structure to receive, set, edit, delete, and
            perform various other operations.
          </p>
        </dd>
        <dt className={"left-list-heading"}>
          Spell Checker
          <FaJava />
        </dt>
        <dd>
          Developed a custom spell checker in Java, utilizing a dictionary to
          verify word existence and identifying common misspellings for words
          not found in the dictionary.
        </dd>
      </dl>
    </div>
  );
};

export default CompletedProjects;
