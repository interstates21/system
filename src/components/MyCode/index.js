import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';
import classes from './classes.module.css';
import useWindowSize from '../../hooks/useWindowSize';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

const Code = ({ value, type, title = 'Code Example' }) => {
  const size = useWindowSize();
  const onChange = val => {
    console.log('change', val);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.codeBlock} style={{ height: size.height / 1.5 }}>
        <h2 className={classes.title}>{title}</h2>
        <AceEditor
          value={value}
          mode={type}
          fontSize={10}
          theme="github"
          height={size.height / 1.5}
          style={{ borderRadius: 4, boxShadow: '0px 0px 15px rgba(0,0,0,0.1)' }}
          onChange={onChange}
          name={`${title}`}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </div>
  );
};

export default Code;
