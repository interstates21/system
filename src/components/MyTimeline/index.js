import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import classes from './classes.module.css';
import './override.css';

// https://github.com/stephane-monnot/react-vertical-timeline
const MyTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(41, 44, 53)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(41, 44, 53) ' }}
        date="November 2019 - Current"
        iconStyle={{ background: '#C75649', color: '#fff' }}
        icon={<Icon className={classes.icon} icon={['fab', 'react']} />}
      >
        <h3 className="vertical-timeline-element-title">
          React / React Native Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Cartitude Team</h4>
        <p className={classes.descriptionWhite}>
          - Building and deploying 3 applications from scratch <br />
          - Managing a team of 2 frontend + 1 backend developers
          <br />
          - Managing tools and architecture <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="August 2017 - Current"
        iconStyle={{ background: '#C75649', color: '#fff' }}
        icon={<Icon className={classes.icon} icon={'graduation-cap'} />}
      >
        <h3 className="vertical-timeline-element-title">
          Computer Science Student
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Unit Factory (42)
        </h4>
        <p className={classes.description}>
          - Algorithms, C/C++
          <br />
          - Computer Graphics
          <br />
          - Software Architecture <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2019 - November 2019"
        iconStyle={{ background: '#617ce3', color: '#fff' }}
        icon={<Icon className={classes.icon} icon={['fab', 'react']} />}
      >
        <h3 className="vertical-timeline-element-title">
          Junior React / React Native Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Join.to.it</h4>
        <p>
          - Building and deploying web and mobile applications
          <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2019 - June 2019"
        iconStyle={{ background: '#617ce3', color: '#fff' }}
        icon={<Icon className={classes.icon} icon={['fab', 'react']} />}
      >
        <h3 className="vertical-timeline-element-title">React Native Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Appitr Technology Inc.
        </h4>
        <p>
          - Integrating RN components into our web IDE
          <br />
          - Building demo applications
          <br />
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2018 - September 2018"
        iconStyle={{ background: '#617ce3', color: '#fff' }}
        icon={<Icon className={classes.icon} icon={['fab', 'unity']} />}
      >
        <h3 className="vertical-timeline-element-title">Unity3D Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Sensorama lab.</h4>
        <p>
          - Creating demo VR applications and games with Unity
          <br />
          - Doing POC of popular VR/AR libraries
          <br />
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default MyTimeline;
