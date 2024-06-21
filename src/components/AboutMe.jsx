import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AboutMe = ({ hasLink }) => {
  return (
    <div className={"full-width-text-box"}>
      <h1 className="title">About Me</h1>
      <p>
        Hi, I am Alex Kefer. I am a software engineer with a passion for web
        development. I am a graduate from Western Washington University with a
        Bachelors of Science in Computer Science with a certificate in Web
        Programming. I am currently seeking entry-level software engineering
        positions.
      </p>
      {hasLink && (
        <div className={"flex"}>
          <Link to="/about" className="gradient-button">
            Learn more about me
          </Link>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
