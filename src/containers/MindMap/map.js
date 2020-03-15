const HIGHLIGHTS = 'Highlights ✨';
const AEST = 'Aesthetically Oriented 🗼';
const DEV = '3+ years in diverse software development 👾👾👾';
const COMERCIAL = '1.5 years in commercial development 👨🏿‍💻';
const PROJECTS = 'More than 10 projects  🚀';
const ENGLISH = 'Advanced English 🌎';
const PROACTIVE = 'Proactive 🧘‍♂️';
const INITIATIVE = 'Initiative 🗽';
const LEARN = 'Eager to learn and explore new technologies  🚀';

export default {
  title: 'My Mindmap',
  nodes: [
    {
      text: HIGHLIGHTS,
      fx: -300,
      fy: -200,
      nodes: [
        // {
        //   text: '',
        //   fx: 176.083777747024,
        //   fy: -665.1641376795345,
        //   nodes: [],
        //   category: 'reddit',
        //   color: 'rgba(255, 189, 10, 1.0)',
        // },
        // {
        //   text: 'source',
        //   note:
        //     'original python implementation in c, compiles python code into byte code and interprets the byte code in a evaluation loop',
        //   fx: 176.083777747024,
        //   fy: -625.1641376795345,
        //   nodes: [],
        //   category: 'github',
        //   color: 'rgba(36, 170, 255, 1.0)',
        // },
      ],
    },
    {
      text: DEV,
      url: '',
      fx: 154.3247731601375,
      fy: -529.73700786748157,
    },
    {
      text: LEARN,
      url: '',
      fx: -185.3247731601375,
      fy: -759.73700786748157,
    },
    {
      text: ENGLISH,
      url: '',
      fx: -450.3247731601375,
      fy: -569.73700786748157,
    },
    {
      text: AEST,
      url: '',
      fx: -580.3247731601375,
      fy: -429.73700786748157,
    },
    {
      text: PROACTIVE,
      note: '',
      url: '',
      fx: -158.5231997717085,
      fy: -600.07462866512333,
    },
    {
      text: INITIATIVE,
      note: '',
      url: '',
      fx: 308.5231997717085,
      fy: -300.07462866512333,
    },
    {
      text: COMERCIAL,
      note: '',
      url: '',
      fx: 258.5231997717085,
      fy: -410.07462866512333,
    },
  ],
  connections: [
    {
      source: HIGHLIGHTS,
      target: PROACTIVE,
      curve: {
        x: -10.5535,
        y: 40.545,
      },
    },
    {
      source: HIGHLIGHTS,
      target: AEST,
      curve: {
        x: -100.5535,
        y: 40.545,
      },
    },

    // 🌉🌃
    {
      source: HIGHLIGHTS,
      target: COMERCIAL,
      curve: {
        x: -100.5535,
        y: 40.545,
      },
    },
    {
      source: HIGHLIGHTS,
      target: ENGLISH,
      curve: {
        x: -60.5535,
        y: 40.545,
      },
    },
    {
      source: HIGHLIGHTS,
      target: INITIATIVE,
      curve: {
        x: -10.5535,
        y: 40.545,
      },
    },
    {
      source: DEV,
      target: HIGHLIGHTS,
      curve: {
        x: -78.1206,
        y: -114.714,
      },
    },
    {
      source: LEARN,
      target: HIGHLIGHTS,
      curve: {
        x: -138.1206,
        y: -114.714,
      },
    },
  ],
};
