/**
 * Created by rxf on 17/4/15.
 */
import echarts from "echarts"
import "echarts-gl"
import axios from "axios"


axios.get('../../assets/data.json').then(resp =>{
	let data = resp.data;
	var airports = data.airports.map(function (item) {
		return {
			coord: [item[3], item[4]]
		}
	});
	function getAirportCoord(idx) {
		return [data.airports[idx][3], data.airports[idx][4]];
	}

	// Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
	var routesGroupByAirline = {};
	data.routes.forEach(function (route) {
		var airline = data.airlines[route[0]];
		var airlineName = airline[0];
		if (!routesGroupByAirline[airlineName]) {
			routesGroupByAirline[airlineName] = [];
		}
		routesGroupByAirline[airlineName].push(route);
	});

	var pointsData = [];
	data.routes.forEach(function (airline) {
		pointsData.push(getAirportCoord(airline[1]));
		pointsData.push(getAirportCoord(airline[2]));
	});

	var series = data.airlines.map(function (airline) {
		var airlineName = airline[0];
		var routes = routesGroupByAirline[airlineName];

		if (!routes) {
			return null;
		}
		return {
			type: 'lines3D',
			name: airlineName,

			effect: {
				show: true,
				trailWidth: 2,
				trailLength: 0.2,
				trailOpacity: 0.4,
				trailColor: 'rgb(30, 30, 60)'
			},

			lineStyle: {
				width: 1,
				color: 'rgb(50, 50, 150)',
				// color: 'rgb(118, 233, 241)',
				opacity: 0.1
			},
			blendMode: 'lighter',

			distanceToGlobe: 4,

			data: routes.map(function (item) {
				return [airports[item[1]].coord, airports[item[2]].coord];
			})
		};
	}).filter(function (series) {
		return !!series;
	});
	series.push({
		type: 'scatter3D',
		coordinateSystem: 'globe',
		blendMode: 'lighter',
		symbolSize: 2,
		distanceToGlobe: 4,
		itemStyle: {
			color: 'rgb(50, 50, 150)',
			opacity: 0.2
		},
		data: pointsData
	});


	let myChart = echarts.init(document.getElementById("webgl"))


	myChart.setOption({
		legend: {
			selectedMode: 'single',
			left: 'left',
			data: Object.keys(routesGroupByAirline),
			orient: 'vertical',
			textStyle: {
				color: '#fff'
			}
		},
		globe: {

			environment: '/vue-echartsGL/static/assets/data-1491837999815-H1_44Qtal.jpg',

			heightTexture: '/vue-echartsGL/static/assets/data-1491837512042-rJlLfXYax.jpg',

			displacementScale: 0.05,
			displacementQuality: 'high',

			baseColor: '#000',

			shading: 'realistic',
			realisticMaterial: {
				roughness: 0.2,
				metalness: 0
			},

			postEffect: {
				enable: true,
				depthOfField: {
					// enable: true
				}
			},
			temporalSuperSampling: {
				enable: true
			},
			light: {
				ambient: {
					intensity: 0
				},
				main: {
					intensity: 0.1,
					shadow: false
				},
				ambientCubemap: {
					texture: '/vue-echartsGL/static/assets/data-1491837984109-r1u7NmY6e.hdr',
					exposure: 1,
					diffuseIntensity: 0.5,
					specularIntensity: 2
				}
			},
			viewControl: {
				autoRotate: false
			}
		},
		series: series
	});
	window.addEventListener('keydown', function () {
		series.forEach(function (series, idx) {
			myChart.dispatchAction({
				type: 'lines3DToggleEffect',
				seriesIndex: idx
			});
		})
	});

})



