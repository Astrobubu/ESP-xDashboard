

// if (enableHumidity == 1) {
//   $("#humiditySensorCheckbox").prop("checked", true);

//   var HumidityChart = Highcharts.chart("containerhumd", {
//     series: [
//       {
//         name: "Yesterday",
//         data: [
//           41, 35, 38, 31, 45, 39, 44, 39, 45, 64, 60, 53, 52, 44, 48, 42, 64,
//           64, 71, 69, 74, 68, 60, 54,
//         ],
//         color: humidityYesterdayColor,
//         marker: {
//           enabled: false,
//         },
//       },
//       {
//         name: "Today",
//         data: [
//           75, 68, 52, 56, 71, 63, 65, 64, 76, 60, 54, 68, 55, 49, 68, 59, 38,
//           43, 75, 80, 81, 53, 68, 51,
//         ],
//         color: humidityTodayColor,
//         marker: {
//           enabled: false,
//         },
//       },
//     ],

//     title: {
//       text: "",
//       align: "left",
//     },
//     chart: {
//       height: 200,
//       type: "spline",
//       marginLeft: 0,
//       marginRight: 0,
//       spacingLeft: 0,
//       spacingRight: 0,
//       marginBottom: 35,

//       backgroundColor: "rgba(255, 255, 255, 0)",
//     },

//     credits: {
//       enabled: false,
//     },

//     yAxis: {
//       title: {
//         text: " ",
//       },
//       gridLineColor: "rgba(255, 255, 255, 0.1)",
//       visible: false,
//     },

//     xAxis: {
//       gridLineColor: "rgba(255, 255, 255, 0)",
//       lineColor: "rgba(255, 255, 255, 0)",
//       crosshair: true,
//       tickLength: 0,
//       minPadding: 0,
//       maxPadding: 0,
//       // showFirstLabel: false,
//       tickInterval: 5,
//       labels: {
//         format: "{value}:00",
//       },
//     },

//     legend: {
//       layout: "vertical",
//       align: "right",
//       verticalAlign: "middle",
//       enabled: false,
//     },
//     tooltip: {
//       backgroundColor: themecolor,
//       style: {
//         color: "#fefefe",
//       },
//       borderRadius: 3,
//       borderWidth: 0,
//       shared: true,
//     },

//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false,
//         },
//         pointStart: 1,
//       },
//       spline: {
//         marker: false,
//       },
//     },

//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 500,
//           },
//           chartOptions: {
//             legend: {
//               layout: "horizontal",
//               align: "center",
//               verticalAlign: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   var cardgraphHumd = document.getElementById("cardgraphhumd");
//   var latestReadHumdity = 50;
//   var humdityUnit = "%";
//   cardgraphHumd.querySelector("#currentsensorhumd").textContent = "Humidity";
//   if (textOrGauge == 0) {
//     var humidityKnob = pureknob.createKnob(50, 50);
//     humidityKnob.setProperty("valMin", 0);
//     humidityKnob.setProperty("valMax", 100);
//     humidityKnob.setProperty("trackWidth", 0.2);
//     humidityKnob.setProperty("textScale", 1.5);
//     humidityKnob.setProperty("readonly", 1);
//     humidityKnob.setProperty("angleStart", -0.75 * 3.1415);
//     humidityKnob.setProperty("angleEnd", 0.75 * 3.1415);
//     humidityKnob.setProperty("colorFG", humidityTodayColor);
//     humidityKnob.setProperty("colorBG", humidityYesterdayColor);
//     humidityKnob.setValue(latestReadHumdity);
//     var node = humidityKnob.node();
//     var elem = document.getElementById("currentreadhumd");
//     elem.appendChild(node);
//   } else {
//     cardgraphHumd.querySelector("#currentreadhumd").textContent =
//       latestReadHumdity + humdityUnit;
//   }
// } else {
//   let cardgraphHumd = document.getElementById("cardhumd");
//   cardgraphHumd.style.display = "none";
// }

// if (enablePressure == 1) {
//   $("#pressureSensorCheckbox").prop("checked", true);

//   var PressureChart = Highcharts.chart("containerpressure", {
//     series: [
//       {
//         name: "Yesterday",
//         data: [
//           29.68, 30.13, 30.49, 30.45, 30.33, 30.4, 30.39, 30.17, 30.1, 30.33,
//           30.39, 30.11, 30.37, 30.35, 29.95, 30.08, 30.68, 30.52, 30.2, 30.11,
//           29.87, 30.06, 30.01, 30.01,
//         ],
//         color: pressureYesterdayColor,
//         marker: {
//           enabled: false,
//         },
//       },
//       {
//         name: "Today",
//         data: [
//           30.13, 30.33, 30.13, 30.29, 30.19, 30.22, 30, 30.31, 30.11, 30.47,
//           30.63, 30.19, 29.84, 30.09, 30.4, 30.41, 30.06, 29.87, 29.81, 30.09,
//           30.17, 29.95, 30.37, 30.48,
//         ],
//         color: pressureTodayColor,
//         marker: {
//           enabled: false,
//         },
//       },
//     ],

//     title: {
//       text: "",
//       align: "left",
//     },
//     chart: {
//       height: 200,
//       type: "spline",
//       marginLeft: 0,
//       marginRight: 0,
//       spacingLeft: 0,
//       spacingRight: 0,
//       marginBottom: 35,

//       backgroundColor: "rgba(255, 255, 255, 0)",
//     },

//     credits: {
//       enabled: false,
//     },

//     yAxis: {
//       title: {
//         text: " ",
//       },
//       gridLineColor: "rgba(255, 255, 255, 0.1)",
//       visible: false,
//     },

//     xAxis: {
//       gridLineColor: "rgba(255, 255, 255, 0)",
//       lineColor: "rgba(255, 255, 255, 0)",
//       crosshair: true,
//       tickLength: 0,
//       minPadding: 0,
//       maxPadding: 0,
//       // showFirstLabel: false,
//       tickInterval: 5,
//       labels: {
//         format: "{value}:00",
//       },
//     },

//     legend: {
//       layout: "vertical",
//       align: "right",
//       verticalAlign: "middle",
//       enabled: false,
//     },
//     tooltip: {
//       backgroundColor: themecolor,
//       style: {
//         color: "#fefefe",
//       },
//       borderRadius: 3,
//       borderWidth: 0,
//       shared: true,
//     },

//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false,
//         },
//         pointStart: 1,
//       },
//       spline: {
//         marker: false,
//       },
//     },

//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 500,
//           },
//           chartOptions: {
//             legend: {
//               layout: "horizontal",
//               align: "center",
//               verticalAlign: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   var cardgraphPressure = document.getElementById("cardgraphpressure");
//   var latestReadPressure = 30;
//   var pressureUnit = " kPa";
//   cardgraphPressure.querySelector("#currentsensorpressure").textContent =
//     "Air Pressure";
//   if (textOrGauge == 0) {
//     var pressureKnob = pureknob.createKnob(50, 50);
//     pressureKnob.setProperty("valMin", 0);
//     pressureKnob.setProperty("valMax", 100);
//     pressureKnob.setProperty("trackWidth", 0.2);
//     pressureKnob.setProperty("textScale", 1.5);
//     pressureKnob.setProperty("readonly", 1);
//     pressureKnob.setProperty("angleStart", -0.75 * 3.1415);
//     pressureKnob.setProperty("angleEnd", 0.75 * 3.1415);
//     pressureKnob.setProperty("colorFG", pressureTodayColor);
//     pressureKnob.setProperty("colorBG", pressureYesterdayColor);
//     pressureKnob.setValue(latestReadPressure);
//     var node = pressureKnob.node();
//     var elem = document.getElementById("currentreadpressure");
//     elem.appendChild(node);
//   } else {
//     cardgraphPressure.querySelector("#currentreadpressure").textContent =
//       latestReadPressure + pressureUnit;
//   }
// } else {
//   let cardgraphPress = document.getElementById("cardpress");
//   cardgraphPress.style.display = "none";
// }

// if (enableAirQuality == 1) {
//   $("#airQualitySensorCheckbox").prop("checked", true);

//   var AirQualityChart = Highcharts.chart("containerairq", {
//     series: [
//       {
//         name: "Yesterday",
//         data: [
//           29.68, 30.13, 30.49, 30.45, 30.33, 30.4, 30.39, 30.17, 30.1, 30.33,
//           30.39, 30.11, 30.37, 30.35, 29.95, 30.08, 30.68, 30.52, 30.2, 30.11,
//           29.87, 30.06, 30.01, 30.01,
//         ],
//         color: airqualityYesterdayColor,
//         marker: {
//           enabled: false,
//         },
//       },
//       {
//         name: "Today",
//         data: [
//           30.13, 30.33, 30.13, 30.29, 30.19, 30.22, 30, 30.31, 30.11, 30.47,
//           30.63, 30.19, 29.84, 30.09, 30.4, 30.41, 30.06, 29.87, 29.81, 30.09,
//           30.17, 29.95, 30.37, 30.48,
//         ],
//         color: airqualityTodayColor,
//         marker: {
//           enabled: false,
//         },
//       },
//     ],

//     title: {
//       text: "",
//       align: "left",
//     },
//     chart: {
//       height: 200,
//       type: "spline",
//       marginLeft: 0,
//       marginRight: 0,
//       spacingLeft: 0,
//       spacingRight: 0,
//       marginBottom: 35,

//       backgroundColor: "rgba(255, 255, 255, 0)",
//     },

//     credits: {
//       enabled: false,
//     },

//     yAxis: {
//       title: {
//         text: " ",
//       },
//       gridLineColor: "rgba(255, 255, 255, 0.1)",
//       visible: false,
//     },

//     xAxis: {
//       gridLineColor: "rgba(255, 255, 255, 0)",
//       lineColor: "rgba(255, 255, 255, 0)",
//       crosshair: true,
//       tickLength: 0,
//       minPadding: 0,
//       maxPadding: 0,
//       // showFirstLabel: false,
//       tickInterval: 5,
//       labels: {
//         format: "{value}:00",
//       },
//     },

//     legend: {
//       layout: "vertical",
//       align: "right",
//       verticalAlign: "middle",
//       enabled: false,
//     },
//     tooltip: {
//       backgroundColor: themecolor,
//       style: {
//         color: "#fefefe",
//       },
//       borderRadius: 3,
//       borderWidth: 0,
//       shared: true,
//     },

//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false,
//         },
//         pointStart: 1,
//       },
//       spline: {
//         marker: false,
//       },
//     },

//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 500,
//           },
//           chartOptions: {
//             legend: {
//               layout: "horizontal",
//               align: "center",
//               verticalAlign: "bottom",
//             },
//           },
//         },
//       ],
//     },
//   });

//   var cardgraphAirQuality = document.getElementById("cardgraphAirQuality");
//   var latestReadAirQuality = 30;
//   var airQualityUnit = "%";
//   cardgraphAirQuality.querySelector("#currentsensorairquality").textContent =
//     "Air Quality";
//   if (textOrGauge == 0) {
//     var airquality = pureknob.createKnob(50, 50);
//     airquality.setProperty("valMin", 0);
//     airquality.setProperty("valMax", 100);
//     airquality.setProperty("trackWidth", 0.2);
//     airquality.setProperty("textScale", 1.5);
//     airquality.setProperty("readonly", 1);
//     airquality.setProperty("angleStart", -0.75 * 3.1415);
//     airquality.setProperty("angleEnd", 0.75 * 3.1415);
//     airquality.setProperty("colorFG", airqualityTodayColor);
//     airquality.setProperty("colorBG", airqualityYesterdayColor);
//     airquality.setValue(latestReadAirQuality);
//     var node = airquality.node();
//     var elem = document.getElementById("currentreadairquality");
//     elem.appendChild(node);
//   } else {
//     cardgraphAirQuality.querySelector("#currentreadairquality").textContent =
//       latestReadAirQuality + airQualityUnit;
//   }
// } else {
//   let cardgraphPress = document.getElementById("cardairq");
//   cardgraphPress.style.display = "none";
// }