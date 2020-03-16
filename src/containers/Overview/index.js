import React from 'react';
import MyToolchain from '../../components/MyToolchain';
import classes from './classes.module.css';

const Overview = () => {
  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <h1 className={classes.title}>React Frontend Developer</h1>
        <div className="row">
          <p className={classes.text}>
            Nice to see you here. Here you could find some things about me as a
            developer. Please, scroll down.
          </p>
        </div>
      </div>
      <MyToolchain />
      {/* <MyNext /> */}
    </div>
  );
};

export default Overview;
