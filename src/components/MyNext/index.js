import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './classes.module.css';

const MyNext = () => {
  return (
    <div className={classes.container}>
      {/* <Icon className={classes.icon} icon={'chevron-circle-right'} /> */}
      <Icon className={classes.icon} icon={'angle-double-down'} />
      {/* <Icon className={classes.icon} icon={'angle-double-down'} /> */}
      {/* <Icon className={classes.icon} icon={'chevron-right'} /> */}
      {/* <Icon className={classes.icon} icon={'angle-right'} /> */}
    </div>
  );
};

export default MyNext;
