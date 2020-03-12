import React from 'react';
import MyToolchain from '../../components/MyToolchain';

import MyResume from '../../components/MyResume';
import classes from './classes.module.css';
const Skills = () => {
  return (
    <div className={classes.screen}>
      {/* <MyToolchain /> */}
      <MyResume />
    </div>
  );
};

export default Skills;
