import React from 'react';
import classes from './classes.module.css';
import MyAvatarGen from '../../components/MyAvatarGen';
const AboutMe = () => {
  return (
    <div className={classes.container}>
      <div className="simple-block margin">
        Coming Soon Coming Soon Coming Soon
      </div>
      <MyAvatarGen className={classes.gen} />
    </div>
  );
};

export default AboutMe;
