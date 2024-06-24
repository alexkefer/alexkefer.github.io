import LocationAndTime from "./LocationAndTime.jsx";

const Experience = () => {
  return (
    <div className={"full-width-text-box"}>
      <h1 className="title">Experience</h1>
      <dl>
        <dt className={"left-list-heading"}>Bartender</dt>
        <dd>
          <LocationAndTime
            reference={"https://btownkitchen.com"}
            nameOfLink={"B-Town @ Four Points Sheraton"}
            dates={"January 2024 - Present"}
          />
          <ul className={"pl-8 list-disc list-outside"}>
            <li>Provided exceptional customer service to patrons</li>
            <li>
              Developed a strong understanding of mixology and drink preparation
            </li>
          </ul>
        </dd>
        <dt className={"left-list-heading"}>Web Developer 3</dt>
        <dd>
          <LocationAndTime
            reference={"https://www.wwu.edu"}
            nameOfLink={"Western Washington University"}
            dates={"March 2024 - June 2024"}
          />
          <ul className={"pl-8 list-disc list-outside"}>
            <li>
              Converted the proof-of-concept alternative text generator into a
              web application.
            </li>
            <li>
              Developed an accessible and friendly user interface utilizing the
              schools styling guide.
            </li>
            <li>
              Implemented Azure AD authentication to prevent unauthorized access
              and to allow for user customization.
            </li>
          </ul>
        </dd>
        <dt className={"left-list-heading"}>Web Accessibility Intern</dt>
        <dd>
          <LocationAndTime
            reference={"https://www.wwu.edu"}
            nameOfLink={"Western Washington University"}
            dates={"January 2024 - March 2024"}
          />
          <ul className={"pl-8 list-disc list-outside"}>
            <li>
              Translated legacy documents to webpages to improve accessibility
            </li>
            <li>
              Developed a proof-of-concept descriptive alternative text
              generator
              <ul className={"pl-6 list-disc list-outside"}>
                <li>
                  Utilizes Azure AI and Gemini APIs to generate alternative text
                </li>
                <li>
                  Includes prompting mechanism to allow users to provide
                  information for improved results
                </li>
              </ul>
            </li>
          </ul>
        </dd>
      </dl>
    </div>
  );
};

export default Experience;
