import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const example = `function add(a, b) {
    return a + b;
  }
  `;

const Code = () => {
  const [code, setCode] = useState(example);

  return (
    <Editor
      value={code}
      onValueChange={e => setCode(e)}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
      }}
    />
  );
};

export default Code;
