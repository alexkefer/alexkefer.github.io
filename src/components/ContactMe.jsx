import CustomImage from "./CustomImage.jsx";

const ContactMe = () => {
  return (
    <div className={"full-width-text-box split-75 flex-row"}>
      <CustomImage
        src={"./me.JPG"}
        alt={"Photo of Alex Kefer"}
        displayType={"contact"}
      />
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <aside className={"flex flex-col gap-5"}>
        <h1 className="title">Contact Me</h1>
        <p>
          I am currently seeking entry-level software engineering positions.
          Please feel free to reach out to me via email or social media.
        </p>
        <div className={"flex gap-2"}>
          <a href={"mailto:alexkefer@icloud.com"} className={"gradient-button"}>
            Email Me
          </a>
        </div>
      </aside>
    </div>
  );
};

export default ContactMe;
