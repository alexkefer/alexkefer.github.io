import { FaFileDownload } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { useState } from "react";
import PDFViewer from "./PDFViewer.jsx";

const PDFSection = () => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const togglePDF = () => {
    setIsPDFOpen(!isPDFOpen);
  };
  return (
    <div className={`full-width-text-box`}>
      <div className={"flex flex-row justify-between"}>
        <h1 className="title">Resume</h1>
        <div className={"flex flex-row gap-2"}>
          <a
            href={"./Alex_Kefer_Resume.pdf"}
            download={"Alex_Kefer_Resume.pdf"}
            className={"p-2 rounded-lg hover:bg-black hover:bg-opacity-25"}
          >
            <FaFileDownload className={"fill-white h-8 w-8 drop-shadow-xl"} />
          </a>
          <div
            className={
              "p-2 rounded-lg hover:bg-black hover:bg-opacity-25 cursor-pointer"
            }
          >
            <FaFilePdf
              className={"fill-white h-8 w-8 drop-shadow-xl"}
              onClick={togglePDF}
            />
          </div>
        </div>
      </div>
      <div className={`flex mt-1 justify-center`}>
        {" "}
        {/* Adjust max-h-0 if needed */}
        <div>{isPDFOpen ? <PDFViewer /> : null}</div>
      </div>
    </div>
  );
};

export default PDFSection;
