import React from 'react';
import classes from './classes.module.css';
import MyTimeline from '../../components/MyTimeline';

const AboutMe = () => {
  return (
    <div className={classes.container}>
      <MyTimeline />
    </div>
  );
};

export default AboutMe;
