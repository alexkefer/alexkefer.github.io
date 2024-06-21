const SocialMediaLink = ({ href, icon, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "text-lg flex flex-row justify-between hover:underline-offset-auto hover:underline text-white transition hover:bg-black hover:bg-opacity-15 p-2 rounded-xl"
      }
    >
      {icon}
      <p>{text}</p>
    </a>
  );
};

export default SocialMediaLink;
