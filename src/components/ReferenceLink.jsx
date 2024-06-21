// eslint-disable-next-line react/prop-types
const ReferenceLink = ({ reference, nameOfLink }) => {
  return (
    <a
      href={reference}
      className={
        "px-2 py-1 hover:drop-shadow-2xl hover:cursor-pointer hover:bg-black hover:bg-opacity-15 rounded-lg"
      }
      target={"_blank"}
      rel={"noreferrer"}
    >
      {nameOfLink}
    </a>
  );
};

export default ReferenceLink;
