import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiAstro, SiVite } from "react-icons/si";
import { FaGolang, FaR } from "react-icons/fa6";
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
          grows. I am always looking for ways to improve the user experience and
          add new features.
        </dd>
        <dt className={"right-list-heading"}>
          Nutrient Tracker
          <FaReact />
        </dt>
        <dd>
          Developing a React Native mobile app to track daily nutrient and
          calorie intake. The app will allow users to input their meals and view
          a summary of their daily intake. Future plans include adding a
          database to store user data and provide insights into their eating
          habits.
        </dd>
        <dt className={"right-list-heading"}>
          Web Weasel 2
          <div className={"icon-row"}>
            <FaGolang />
            <IoLogoJavascript />
            <FaReact />
          </div>
        </dt>
        <dd>
          Currently developing a new version of Web Weasel to enhance efficiency
          and user-friendliness. Identified a major flaw in the original design
          and are addressing it by rebuilding the application using the Wails
          framework.
        </dd>
        <dt className={"right-list-heading"}>
          Bartender App
          <div className={"icon-row"}>
            <FaReact />
            <FaNodeJs />
          </div>
        </dt>
        <dd>
          Currently in the planning stage of an application that will enable
          users to browse a selection of drinks and cocktails, view recipes, and
          save their favorites. Future plans include allowing users to share
          their own recipes and rate others' recipes, fostering a community to
          enhance cocktail-making skills.
        </dd>
      </dl>
    </aside>
  );
};

export default ProjectsInDevelopment;
