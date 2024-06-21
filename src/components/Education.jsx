import LocationAndTime from "./LocationAndTime.jsx";

const Education = () => {
  return (
    <div className={"full-width-text-box my-5"}>
      <h1 className="title">Education</h1>
      <dl>
        <dt className={"left-list-heading"}>
          Bachelor of Science in Computer Science
        </dt>
        <dd>
          <LocationAndTime
            reference={"https://www.wwu.edu"}
            nameOfLink={"Western Washington University"}
            dates={"September 2020 - June 2024"}
          />
          <ul className={"pl-8 list-disc list-outside"}>
            <li>Graduated June 2024</li>
          </ul>
        </dd>
        <dt className={"left-list-heading"}>Certificate in Web Programming</dt>
        <dd>
          <LocationAndTime
            reference={"https://www.wwu.edu"}
            nameOfLink={"Western Washington University"}
            dates={"September 2020 - June 2024"}
          />
          <ul className={"pl-8 list-disc list-outside"}>
            <li>Completed courses and internship related to web development</li>
            <li>Completed March 2024</li>
          </ul>
        </dd>
      </dl>
      <div className={"flex flex-col"}>
        <h2 className="text-2xl font-bold text-left text-white mt-5 my-4">
          Relevant Coursework
        </h2>
        <ul className={"three-column"}>
          <li className={"grid-item"}>Computer Systems I & II</li>
          <li className={"grid-item"}>Web Scripting</li>
          <li className={"grid-item"}>Mobile Device Programming</li>
          <li className={"grid-item"}>Database Systems</li>
          <li className={"grid-item"}>Operating Systems</li>
          <li className={"grid-item"}>Analysis of Algorithms I & II</li>
          <li className={"grid-item"}>Computer Networking</li>
          <li className={"grid-item"}>Data Structures</li>
          <li className={"grid-item"}>Human-Computer Interaction</li>
          <li className={"grid-item"}>Object-Oriented Programming</li>
          <li className={"grid-item"}>Game Programming</li>
          <li className={"grid-item"}>Cloud Computing Fundamentals</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
