import ReferenceLink from "./ReferenceLink.jsx";

// eslint-disable-next-line react/prop-types
const LocationAndTime = ({ reference, nameOfLink, dates }) => {
  return (
    <div className={"flex justify-between font-semibold"}>
      <ReferenceLink reference={reference} nameOfLink={nameOfLink} />
      <p className="my-1">{dates}</p>
    </div>
  );
};

export default LocationAndTime;
