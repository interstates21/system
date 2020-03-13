import React, { useState } from 'react';

import CV from '../../assets/cv.pdf';
import useWindowSize from '../../hooks/useWindowSize';
import classes from './classes.module.css';
import MySpinner from '../MySpinner';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MyResume = () => {
  const [loading, setLoading] = useState(true);
  const size = useWindowSize();

  const handleSuccess = () => {
    console.log('hello');
    setLoading(false);
  };

  return (
    <div className={classes.container}>
      {/* <div className={classes.wrapper}> */}
      <Document
        className={classes.wrapper}
        loading={
          <div
            style={{
              width: '100vw',
              height: '100vh',
              background: '#617ce3',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <MySpinner />
          </div>
        }
        file={CV}
      >
        <Page height={size.height - size.height / 10} pageNumber={1} />
      </Document>
      {/* </div> */}
    </div>
  );
};

export default MyResume;
