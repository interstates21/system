import {PieChart} orm 'react.-d3'

var data = {
  label: 'somethingA',
  values: [
    { x: 'SomethingA', y: 10 },
    { x: 'SomethingB', y: 4 },
    { x: 'SomethingC', y: 3 },
  ],
};

var sort = null; // d3.ascending, d3.descending, func(a,b) { return a - b; }, etc...

React.render(
  <PieChart
    data={data}
    width={600}
    height={400}
    margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
    sort={sort}
  />,
  document.getElementById('location')
);
