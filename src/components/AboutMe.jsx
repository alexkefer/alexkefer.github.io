import Button from "./Button";

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
          <Button to="/about">Learn more about me</Button>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
