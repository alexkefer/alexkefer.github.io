// eslint-disable-next-line react/prop-types
const CustomImage = ({ src, alt, displayType }) => {
  if (displayType === "full") {
    return (
      <img
        src={src}
        alt={alt}
        className={"flex-auto rounded-2xl transition drop-shadow-2xl"}
      />
    );
  } else if (displayType === "card") {
    return (
      <img
        src={src}
        alt={alt}
        className={"h-40 mb-4 object-cover rounded-xl drop-shadow-2xl"}
      />
    );
  } else if (displayType === "contact") {
    return (
      <img
        src={src}
        alt={alt}
        className={"w-48 rounded-xl transition drop-shadow-2xl hover:ring-4"}
      />
    );
  } else if (displayType === "logo") {
    return <img src={src} alt={alt} className={"text-4xl"} />;
  }
};

export default CustomImage;
