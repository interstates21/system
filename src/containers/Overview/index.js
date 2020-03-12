import React from 'react';
import MyToolchain from '../../components/MyToolchain';
import classes from './classes.module.css';

const Overview = () => {
  return (
    <div className={classes.container}>
      <div className="simple-block margin">
        <h1 className="title">Full Stack React / Node.js Developer</h1>
        <div className="row">
          <p className="simple-text">
            I am a frontend development enthusiast and programmer. During the
            last two years, I have been highly engaged in the development of
            Real-World Applications in React / React Native. I am eager to
            outstanding UX and code quality so I am usually the one who is
            responsible for building an application's architecture in a team. My
            toolkit includes ES6, Typescript, React Hooks, Redux-Saga, Web
            Deployment, Native Deployment, Styled Components, React Patterns,
            Socket.io, basic Node.js, basic Three.js, basic WebPack
            configuration. Meanwhile, for the last 3 years, I study Algorithms
            and Computer Graphics in 'school42', so I am closely familiar with
            C/C++, low-level programming and basic VR/Game Development in
            Unity3D.
          </p>
        </div>
      </div>
      <MyToolchain />
      {/* <MyNext /> */}
    </div>
  );
};

export default Overview;
