import React from 'react';
// import Plotly from 'react-plotlyjs';
const LineChart = require('react-chartjs').Line;

class Line extends React.Component {

	render(){

	const data= {
        datasets: [{
            label: 'Scatter Dataset',
            data: [ 0,8678,9862,13254,13856],
            fillColor: 'rgba(220,220,220,0.2)',
            pointColor: 'rgba(220,220,220,1)',
            pointHighlightFill: '#fff' ,
            pointHighlightStroke: 'rgba(220,220,220,1)' ,
            pointStrokeColor: '#fff',
            strokeColor: 'rgba(220,220,220,1)',
        }, {
            label: 'Scatter Dataset2',
            data: [0,9324,6732,4941,3935 ],
            fillColor: 'rgba(151,187,205,0.2)',
            pointColor: 'rgba(151,187,205,1)',
            pointHighlightFill: '#fff' ,
            pointHighlightStroke: 'rgba(151,187,205,1)' ,
            pointStrokeColor: '#fff',
            strokeColor: 'rgba(151,187,205,1)',
        }
        ],

        labels : ["Jan" , "March" , "June" ,"Sept" , "Dec"]

    };

    const options =  {
    	responsive: true,
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
		// const revenue = {
		// 	type: 'scatter',
		// 	x: [1,3,6,9,12],
		// 	y: [0,8678,9862,13254,13856],
		// 	mode: 'lines',
		// 	name: 'revenue',
		// 	lines: {
		// 		color: 'rgb(219, 64, 82)',
		// 		width: 4
		// 	}
		// };

		// const expense = {
		// 	type: 'scatter',
		// 	x: [1,3,6,9,12],
		// 	y: [0,9324,6732,4941,3935],
		// 	mode: 'lines',
		// 	name: 'expense',
		// 	lines: {
		// 		color: 'rgb(55, 128, 191)',
		// 		width: 4
		// 	}
		// };


		// const data=[revenue , expense ];

		// const layout={
		// 	// width: 500,
		// 	// height: 500
		// 	// title: 'Revenue and Expense',
		// 	// xaxis: {
		// 	// 	range: [1, 12.25 ],
		// 	// 	autorange: false
		// 	// },
		// 	// yaxis: {
		// 	// 	range: [0, 15000],
		// 	// 	autorange: false,
		// 	// },
		// 	// legend: {
		// 	// 	y: 400,
		// 	// 	// x: ['Jan' , 'March', 'Jun' ,'Aug' , 'Dec' ],
		// 	// 	traceorder: 'reversed',
		// 	// 	font: {
		// 	// 		size: 16
		// 	// 	},
		// 	// 	yref: 'paper'
		// 	// }
		// };

		// const config = {
  //     	showLink: false,
  //     	displayModeBar: false,
  //   	};

		return (
			<div>
			<LineChart data={data} options={options} />
			</div>
		);
	}
}

export default Line;