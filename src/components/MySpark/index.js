import React, { useEffect, useState } from 'react';
import {
  Sparklines,
  SparklinesBars,
  SparklinesSpots,
  SparklinesLine,
} from 'react-sparklines';

import { Waypoint } from 'react-waypoint';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const MySpark = () => {
  const [data, setData] = useState([
    3,
    5,
    9,
    14,
    35,
    3,
    8,
    10,
    13,
    18,
    25,
    9,
    10,
    27,
    4,
    24,
    20,
  ]);

  const [way, setWay] = useState(false);

  useEffect(() => {
    if (!way) {
      return;
    }
    const interval = setInterval(() => {
      setData(p => {
        let n = [...p];
        n.push(n[0]);
        n.shift();
        return n;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [way]);

  return (
    <div style={{ width: 300, height: 40 }}>
      <Waypoint onEnter={() => setWay(true)} onLeave={() => setWay(false)} />
      <Sparklines data={data}>
        <SparklinesBars style={{ fill: '#41c3f9' }} />
      </Sparklines>
      <Sparklines data={data} limit={5}>
        <SparklinesLine color="#1c8cdc" />
        <SparklinesSpots />
      </Sparklines>
    </div>
  );
};

export default MySpark;
