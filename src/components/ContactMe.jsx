import CustomImage from "./CustomImage.jsx";

const ContactMe = () => {
  return (
    <div className={"full-width-text-box split-70-30"}>
      <div className={"split-30"}>
        <CustomImage
          src={"./me.JPG"}
          alt={"Photo of Alex Kefer"}
          displayType={"contact"}
        />
      </div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <aside className={"split-70"}>
        <div>
          <h1 className="title">Contact Me</h1>
          <p>
            I am currently seeking entry-level software engineering positions.
            Please feel free to reach out to me via email or social media. I am
            excited to hear from you and discuss any opportunities.
          </p>
          <div className={"flex gap-2"}>
            <a
              href={"mailto:alexkefer@icloud.com"}
              className={"gradient-button"}
            >
              Email Me
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ContactMe;
