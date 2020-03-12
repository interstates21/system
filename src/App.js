import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faMobileAlt,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';
import Overview from './containers/Overview';
import Skills from './containers/Skills';
import CodeExamples from './containers/CodeExamples';
import AboutMe from './containers/AboutMe';

library.add(fab, faMobileAlt, faAngleDoubleDown);

const App = () => {
  return (
    <div className="App">
      <Overview />
      <Skills />
      <AboutMe />
      <CodeExamples />
    </div>
  );
};

export default App;
