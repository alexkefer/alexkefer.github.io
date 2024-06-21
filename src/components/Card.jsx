// eslint-disable-next-line react/prop-types
const Card = ({ img, alt, description }) => {
  return (
    <li
      className={
        "bg-black bg-opacity-25 rounded-2xl p-2 flex flex-col hover:ring-4 transition"
      }
    >
      <img
        src={img}
        alt={alt}
        className={"h-40 mb-4 object-cover rounded-xl drop-shadow-2xl"}
      />
      <p className={"text-lg text-center text-white"}>{description}</p>
    </li>
  );
};

export default Card;
