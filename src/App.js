import React, { useRef } from 'react';
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
// import Three from './containers/Three';
import Modali, { useModali } from 'modali';
import MindMap from './containers/MindMap';
import ContactMe from './containers/ContactMe';
import MySpinner from './components/MySpinner';
import MyAwesomeButton from './components/MyAwesomeButton';
import useWindowSize from './hooks/useWindowSize';

library.add(fab, faGraduationCap, faMobileAlt, faAngleDoubleDown);

const App = () => {
  const [modal, toggleModal] = useModali({ animated: true, large: true });
  const size = useWindowSize();
  return (
    <div className="App">
      <Overview />
      <Test2 />
      <CV />
      <AboutMe />
      <MyAwesomeButton
        onPress={toggleModal}
        type="secondary"
        title="Open Highlights"
      ></MyAwesomeButton>
      <Modali.Modal {...modal}>
        <MindMap />
      </Modali.Modal>
      {/* <Test3 /> */}
      {/* <Test1 /> */}
      {/* <Three /> */}
      {size.width > 1000 && <CodeExamples />}
      <ContactMe />
    </div>
  );
};

export default App;
