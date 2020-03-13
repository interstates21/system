import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faMobileAlt,
  faAngleDoubleDown,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import Overview from './containers/Overview';
import Skills from './containers/Skills';
import CodeExamples from './containers/CodeExamples';
import AboutMe from './containers/AboutMe';
import Test1 from './containers/Test1';
import Test2 from './containers/Test2';
import Three from './containers/Three';
import Test3 from './containers/Test3';
import MySpinner from './components/MySpinner';

library.add(fab, faGraduationCap, faMobileAlt, faAngleDoubleDown);

const App = () => {
  return (
    <div className="App">
      {/* <Three /> */}
      <Overview />
      <Skills />
      <AboutMe />
      <CodeExamples />
      <Test1 />
      <Test2 />
      <Test3 />
    </div>
  );
};

export default App;
