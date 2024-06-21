import { FaJava, FaReact } from "react-icons/fa";
import { SiC, SiCsharp } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";

const CompletedProjects = () => {
  return (
    <div className={"full-width-text-box split-70"}>
      <h1 className="title">Completed Projects</h1>
      <dl>
        <dt className={"left-list-heading"}>
          Spell Checker
          <FaJava />
        </dt>
        <dd>
          In Java I developed my own version of a spell checker, using a
          dictionary to check its existence and then if it doesn't exist to
          check for common mispellings.
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
            In Unity I worked with a small team to develop a proof-of-concept
            video game.
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
            In Java I developed a class registration system connecting to a
            database using JDBC prepared statements to retrieve and send
            information to a SQL database.
          </p>
        </dd>
        <dt className={"left-list-heading"}>
          LRU Cache Server & Client
          <SiC />
        </dt>
        <dd>
          <p>
            In C I developed an LRU cache on a server in order to speed up
            access to the hash table I built with it to store data. I also built
            client commands specific to receive, set, edit, delete, and various
            other options.
          </p>
        </dd>
        <dt className={"left-list-heading"}>
          Calculator App
          <FaReact />
        </dt>
        <dd>
          <p>
            In React Native on JavaScript I developed a calculator alongside
            Jest test cases to check for edge cases that could fail the
            application.
          </p>
        </dd>
        <dt className={"left-list-heading"}>
          Old Portfolio Website
          <FaReact />
        </dt>
        <dd>
          <p>
            In React I developed my first portfolio website to showcase my
            projects and skills. I like to keep it as a completed project to go
            back to and to see how far I have come.
          </p>
        </dd>
      </dl>
    </div>
  );
};

export default CompletedProjects;
