import React, { useState } from 'react';
import classes from './classes.module.css';
import MyAwesomeButton from '../../components/MyAwesomeButton';
import { Collapse } from 'react-collapse';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const Skills = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className={classes.screen}>
      {/* <MyToolchain /> */}
      <div className={classes.buttons}>
        <MyAwesomeButton
          title={`${open ? 'Hide' : 'Show'} PDF`}
          type={open ? 'secondary' : 'primary'}
          containerClass={classes.button}
          onPress={() => setOpen(p => !p)}
        />
        <PDFDownloadLink
          fileName="Oleksii_Kupin_CV_React"
          document={<MyDocument />}
        >
          <MyAwesomeButton
            title="Download PDF"
            containerClass={classes.button}
          />
        </PDFDownloadLink>
      </div>
      <Collapse isOpened={open}>
        <div className={classes.container}>
          <PDFViewer className={classes.viewer}>
            <MyDocument />
          </PDFViewer>
        </div>
      </Collapse>
    </div>
  );
};

export default Skills;
