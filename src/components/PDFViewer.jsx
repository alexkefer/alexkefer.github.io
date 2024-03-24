import React, { useState } from "react";
import { Document, Page } from "react-pdf";

// eslint-disable-next-line react/prop-types
const PDFViewer = () => {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document file="Alex_Kefer_Resume.pdf"
                      size={'A4'}
                      className={'flex text-white'}
                      loading={'Loading PDF'}
                      onLoadSuccess={onDocumentLoadSuccess}
                      pageMode={'useOC'}
            >
                <Page pageNumber={pageNumber}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        renderInteractiveForms={false}
                        className={'flex justify-center p-2 rounded-2xl drop-shadow-xl hover:ring-4 transition duration-300'}
                    />
            </Document>
            <p className={'text-white text-center font-semibold my-5'}>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
export default PDFViewer;