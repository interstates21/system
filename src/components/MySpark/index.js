import React, { useEffect, useState } from 'react';
import {
  Sparklines,
  SparklinesBars,
  SparklinesSpots,
  SparklinesLine,
} from 'react-sparklines';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const useDynamicData = () => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setData(p => {
        let n = [...p];
        n.push(n[0]);
        n.shift();
        return n;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return data;
};
const MySpark = () => {
  const data = useDynamicData();
  return (
    <div style={{ width: 300, height: 40 }}>
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
