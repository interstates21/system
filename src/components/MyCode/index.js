import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';
import classes from './classes.module.css';

const Code = ({ value, type, title = 'Code Example' }) => {
  const onChange = val => {
    console.log('change', val);
  };
  return (
    <div className={classes.codeBlock}>
      <h2 className={classes.title}>{title}</h2>
      <AceEditor
        value={value}
        mode={type}
        fontSize={10}
        theme="github"
        onChange={onChange}
        name={`${title}`}
        editorProps={{ $blockScrolling: true }}
      />
    </div>
  );
};

export default Code;
