// Get the root element

// Create a function for setting a variable value
function myFunction_set() {
  var r = document.querySelector(":root");
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty("--text-color", "lightblue");
}

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function openTab(tabname) {
  var i;
  var x = document.getElementsByClassName("tabs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  var x = document.getElementsByClassName("tabbutton");
  for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "var(--level-one)";
  }
  document.getElementById(tabname).style.display = "block";

  document.getElementById(tabname + "but").style.backgroundColor =
    "var(--theme-color)";
}

var todaycolor = "#FF55B8";
var yestercolor = "#2a4bb3";

var tempTodayColor = "#ff844c";
var tempYesterdayColor = "#b91400";
var humidityTodayColor = "#6ab7ff";
var humidityYesterdayColor = "#005cb2";
var pressureTodayColor = "#5ddef4";
var pressureYesterdayColor = "#007c91";
var showYesterdayData = 1;

let TempChart = Highcharts.chart("containertemp", {
  series: [
    {
      name: "Yesterday",
      data: [null],
      color: tempYesterdayColor,
      marker: {
        enabled: false,
      },
    },
    {
      name: "Today",
      data: [
        25, 25, 24, 24, 23, 22, 22, 21, 22, 23, 25, 27, 28, 29, 29, 28, 27, 27,
        27, 26, 26, 26, 26, 27,
      ],
      color: tempTodayColor,
      marker: {
        enabled: false,
      },
    },
  ],

  title: {
    text: "",
    align: "left",
  },
  chart: {
    height: 200,
    type: "spline",
    marginLeft: 0,
    marginRight: 0,
    spacingLeft: 0,
    spacingRight: 0,
    marginBottom: 35,

    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  credits: {
    enabled: false,
  },

  yAxis: {
    title: {
      text: " ",
    },
    gridLineColor: "rgba(255, 255, 255, 0.1)",
    visible: false,
  },

  xAxis: {
    gridLineColor: "rgba(255, 255, 255, 0)",
    lineColor: "rgba(255, 255, 255, 0)",
    crosshair: true,
    tickLength: 0,
    minPadding: 0,
    maxPadding: 0,
    // showFirstLabel: false,
    tickInterval: 5,
    labels: {
      format: "{value}:00",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    enabled: false,
  },
  tooltip: {
    backgroundColor: "rgb(42,76,179)",
    style: {
      color: "#fefefe",
    },
    borderRadius: 3,
    borderWidth: 0,
    shared: true,
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 1,
    },
    spline: {
      marker: false,
    },
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

let HumidityChart = Highcharts.chart("containerhumd", {
  series: [
    {
      name: "Yesterday",
      data: [
        41, 35, 38, 31, 45, 39, 44, 39, 45, 64, 60, 53, 52, 44, 48, 42, 64, 64,
        71, 69, 74, 68, 60, 54,
      ],
      color: humidityYesterdayColor,
      marker: {
        enabled: false,
      },
    },
    {
      name: "Today",
      data: [
        75, 68, 52, 56, 71, 63, 65, 64, 76, 60, 54, 68, 55, 49, 68, 59, 38, 43,
        75, 80, 81, 53, 68, 51,
      ],
      color: humidityTodayColor,
      marker: {
        enabled: false,
      },
    },
  ],

  title: {
    text: "",
    align: "left",
  },
  chart: {
    height: 200,
    type: "spline",
    marginLeft: 0,
    marginRight: 0,
    spacingLeft: 0,
    spacingRight: 0,
    marginBottom: 35,

    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  credits: {
    enabled: false,
  },

  yAxis: {
    title: {
      text: " ",
    },
    gridLineColor: "rgba(255, 255, 255, 0.1)",
    visible: false,
  },

  xAxis: {
    gridLineColor: "rgba(255, 255, 255, 0)",
    lineColor: "rgba(255, 255, 255, 0)",
    crosshair: true,
    tickLength: 0,
    minPadding: 0,
    maxPadding: 0,
    // showFirstLabel: false,
    tickInterval: 5,
    labels: {
      format: "{value}:00",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    enabled: false,
  },
  tooltip: {
    backgroundColor: "rgb(42,76,179)",
    style: {
      color: "#fefefe",
    },
    borderRadius: 3,
    borderWidth: 0,
    shared: true,
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 1,
    },
    spline: {
      marker: false,
    },
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

let PressureChart = Highcharts.chart("containerpressure", {
  series: [
    {
      name: "Yesterday",
      data: [
        29.68, 30.13, 30.49, 30.45, 30.33, 30.4, 30.39, 30.17, 30.1, 30.33,
        30.39, 30.11, 30.37, 30.35, 29.95, 30.08, 30.68, 30.52, 30.2, 30.11,
        29.87, 30.06, 30.01, 30.01,
      ],
      color: pressureYesterdayColor,
      marker: {
        enabled: false,
      },
    },
    {
      name: "Today",
      data: [
        30.13, 30.33, 30.13, 30.29, 30.19, 30.22, 30, 30.31, 30.11, 30.47,
        30.63, 30.19, 29.84, 30.09, 30.4, 30.41, 30.06, 29.87, 29.81, 30.09,
        30.17, 29.95, 30.37, 30.48,
      ],
      color: pressureTodayColor,
      marker: {
        enabled: false,
      },
    },
  ],

  title: {
    text: "",
    align: "left",
  },
  chart: {
    height: 200,
    type: "spline",
    marginLeft: 0,
    marginRight: 0,
    spacingLeft: 0,
    spacingRight: 0,
    marginBottom: 35,

    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  credits: {
    enabled: false,
  },

  yAxis: {
    title: {
      text: " ",
    },
    gridLineColor: "rgba(255, 255, 255, 0.1)",
    visible: false,
  },

  xAxis: {
    gridLineColor: "rgba(255, 255, 255, 0)",
    lineColor: "rgba(255, 255, 255, 0)",
    crosshair: true,
    tickLength: 0,
    minPadding: 0,
    maxPadding: 0,
    // showFirstLabel: false,
    tickInterval: 5,
    labels: {
      format: "{value}:00",
    },
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    enabled: false,
  },
  tooltip: {
    backgroundColor: "rgb(42,76,179)",
    style: {
      color: "#fefefe",
    },
    borderRadius: 3,
    borderWidth: 0,
    shared: true,
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false,
      },
      pointStart: 1,
    },
    spline: {
      marker: false,
    },
  },

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
        },
      },
    ],
  },
});

var lastReadTemp = 25;
var tempUnit = "°C";
var cardgraphTemp = document.getElementById("cardgraphtemp");
cardgraphTemp.querySelector("#currentsensortemp").textContent = "Temperature";
cardgraphTemp.querySelector("#currentreadtemp").textContent =
  lastReadTemp + tempUnit;

var cardgraphHumd = document.getElementById("cardgraphhumd");
var latestreadHumdity = 50;
var humdityUnit = "%";
cardgraphHumd.querySelector("#currentsensorhumd").textContent = "Humidity";
cardgraphHumd.querySelector("#currentreadhumd").textContent =
  latestreadHumdity + humdityUnit;

var cardgraphPressure = document.getElementById("cardgraphpressure");
var latestreadPressure = 30;
var pressureUnit = " kPa";
cardgraphPressure.querySelector("#currentsensorpressure").textContent =
  "Air Pressure";

var textOrGauge = 1;
if (textOrGauge) {
  var pressureKnob = pureknob.createKnob(50, 50);
  pressureKnob.setProperty("valMin", 0);
  pressureKnob.setProperty("valMax", 100);
  pressureKnob.setProperty("trackWidth", 0.2);
  pressureKnob.setProperty("textScale", 1.5);
  pressureKnob.setProperty("readonly", 1);
  pressureKnob.setProperty("angleStart", -0.75 * 3.1415);
  pressureKnob.setProperty("angleEnd", 0.75 * 3.1415);
  pressureKnob.setProperty("colorFG", pressureTodayColor);
  pressureKnob.setProperty("colorBG", pressureYesterdayColor);
  pressureKnob.setValue(latestreadPressure);
  var node = pressureKnob.node();
  var elem = document.getElementById("currentreadpressure");
  elem.appendChild(node);
} else {
  cardgraphPressure.querySelector("#currentreadpressure").textContent =
    latestreadPressure + pressureUnit;
}

var delayInMilliseconds = 3000; //1 second

setTimeout(function () {
  TempChart.update({
    series: [
      {
        name: "Yesterday",
        data: [
          25, 25, 24, 24, 23, 22, 22, 21, 22, 23, 25, 27, 28, 29, 29, 28, 27,
          27, 27, 26, 26, 26, 26, 27,
        ],
      },
      {
        name: "Today",
        data: [
          25, 25, 22, 24, 22, 22, 22, 21, 22, 23, 22, 27, 22, 29, 29, 22, 27,
          27, 27, 26, 26, 26, 26, 27,
        ],
      },
    ],
  });
}, delayInMilliseconds);

function changeTheme(checkboxElem) {
  var checkboxElem = document.getElementById("darklightmodecheckbox");

  if (checkboxElem.checked) {
console.log("ON")
  } else {
    console.log("OFF")
  }
}
//SET COOKIE
// setCookie("user_email", "suck ma pp", 30); //set "user_email" cookie, expires in 30 days
// var userEmail = getCookie("user_email"); //"bobthegreat@gmail.com"
// console.log(userEmail);
