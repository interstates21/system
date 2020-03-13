// import React from 'react';
// import classes from './classes.module.css';
// import Map from 'react-mindmap';
import map from './map';
const MindMap = () => {
  return (
    <div className={classes.container}>
      <Map nodes={map.nodes} connections={map.connections} />
    </div>
  );
};

export default MindMap;
