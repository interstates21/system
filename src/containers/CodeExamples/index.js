import React from 'react';
import MyToolchain from '../../components/MyToolchain';

import MyCode from '../../components/MyCode';
import classes from './classes.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './slider.css';
import cExample from './cExample';
import jsExample from './jsExample';
import nodeExample from './nodeExample';
import sagaExample from './sagaExample';

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

// const Skills = () => {
//   return (
//     <div className={classes.container}>
//       <Slider className={classes.slider} {...settings}>
//         <MyCode title="React Native" value={jsExample} type="javascript" />
//         <MyCode title="C Gaphics" value={cExample} type="c_cpp" />
//         <MyCode title="Node" value={nodeExample} type="javascript" />
//         <MyCode title="Redux Saga" value={sagaExample} type="javascript" />
//         {/* <MyToolchain /> */}
//       </Slider>
//     </div>
//   );
// };
const Skills = () => {
  return (
    <div className={classes.container}>
      <AwesomeSlider bullets={true} infinite={false}>
        <div className={classes.slide}>
          <MyCode title="React Native" value={jsExample} type="javascript" />
        </div>
        <div className={classes.slide}>
          <MyCode title="Node" value={nodeExample} type="javascript" />
        </div>
        <div className={classes.slide}>
          <MyCode title="Redux Saga" value={sagaExample} type="javascript" />
        </div>
        <div className={classes.slide}>
          <MyCode title="C Gaphics" value={cExample} type="c_cpp" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Skills;
