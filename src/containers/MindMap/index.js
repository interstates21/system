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
      let r = Math.floor(Math.random() * 220);
      let g = Math.floor(Math.random() * 220);
      let b = Math.floor(Math.random() * 220);
      n.style.background = `rgb(${r}, ${g}, ${b})`;
    });
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          width: '100%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <h2 className="section-title"> Highlights </h2> */}
        <div
          style={{
            // alignItems: 'center',
            // justifyContent: 'center',
            // display: 'flex',
            backgroundColor: '#292C35',
            width: '70%',
            overflow: 'hidden',
            padding: '40px',
            boxSizing: 'border-box',
            marginBottom: 100,
          }}
        >
          <MindMap nodes={map.nodes} connections={map.connections} />
        </div>
      </div>
    );
  }
}

export default Example;
