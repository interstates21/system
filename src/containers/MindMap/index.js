import React from 'react';
import { Component } from 'react';
import MindMap from 'react-mindmap';
import map from './map';
import './overrite.css';
class Example extends Component {
  componentDidMount() {
    const nodes = document.querySelectorAll('.mindmap-node > a');
    nodes.forEach(n => {
      // let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      let r = Math.floor(Math.random() * 240);
      let g = Math.floor(Math.random() * 240);
      let b = Math.floor(Math.random() * 240);
      n.style.background = `rgb(${r}, ${g}, ${b})`;
    });
  }

  render() {
    return (
      <div
        style={{
          // height: '70vh',
          // width: '70vw',
          backgroundColor: 'white',
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {/* <h2 className="section-title"> Highlights </h2> */}
        <div
          style={{
            // alignItems: 'center',
            // justifyContent: 'center',
            // display: 'flex',
            backgroundColor: 'white',
            // width: '70%',
            margin: 20,
            // overflow: 'hidden',
            padding: 20,
            background: 'aliceblue',
            boxSizing: 'border-box',
          }}
        >
          <MindMap nodes={map.nodes} connections={map.connections} />
        </div>
      </div>
    );
  }
}

export default Example;
