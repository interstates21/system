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
import CV from './containers/CV';
import CodeExamples from './containers/CodeExamples';
import AboutMe from './containers/AboutMe';
import Test1 from './containers/Test1';
import Test2 from './containers/Test2';
import Three from './containers/Three';
import MindMap from './containers/MindMap';
import MySpinner from './components/MySpinner';

library.add(fab, faGraduationCap, faMobileAlt, faAngleDoubleDown);

const App = () => {
  return (
    <div className="App">
      <Overview />
      <Test2 />
      <CV />
      <AboutMe />
      <MindMap />
      {/* <Test3 /> */}
      {/* <Test1 /> */}
      <Three />
    </div>
  );
};

export default App;
