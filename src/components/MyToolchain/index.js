import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './classes.module.css';

const MyToolchain = () => {
  return (
    <div className={classes.toolchain}>
      <div className={classes.item}>
        <Icon className={classes.icon} icon={['fab', 'js']} />
      </div>
      <div className={classes.item}>
        <Icon c lassName={classes.icon} icon={['fab', 'react']} />
      </div>
      <div className={classes.item}>
        <Icon className={classes.icon} icon={['fab', 'node']} />
      </div>
      <div className={classes.item}>
        <Icon className={classes.icon} icon={'mobile-alt'} />
      </div>
    </div>
  );
};

export default MyToolchain;
