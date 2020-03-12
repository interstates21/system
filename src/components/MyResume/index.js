import React from 'react';

import { Document, Page, pdfjs } from 'react-pdf';

import CV from '../../assets/cv.pdf';
import useWindowSize from '../../hooks/useWindowSize';
import classes from './classes.module.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyResume = () => {
  const size = useWindowSize();
  const handleSuccess = () => {};
  return (
    <div className={classes.wrapper}>
      <Document
        file={CV}
        onLoadError={console.warn}
        onLoadSuccess={handleSuccess}
      >
        <Page width={size.width - size.width / 2} pageNumber={1} />
      </Document>
    </div>
  );
};

export default MyResume;
