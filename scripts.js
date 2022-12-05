// Get the root element

var r = document.querySelector(":root");
// Create a function for setting a variable value
function myFunction_set() {
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

// CHART JS

var canvas = document.getElementById("canvas");
// Apply multiply blend when drawing datasets
var multiply = {
  beforeDatasetsDraw: function (chart, options, el) {
    chart.ctx.globalCompositeOperation = "overlay";
  },
  afterDatasetsDraw: function (chart, options) {
    chart.ctx.globalCompositeOperation = "source-over";
  },
};
// Gradient color - this week
var cardlabel = "Temperature";
var unit = "°C";
var latestread = "25";
var ylabel1 =  "Yesterday";
var ydata1 = [
  25, 25, 24, 23, 23, 23, 22, 21, 22, 23, 25, 26, 27, 28, 29, 28, 27, 27, 26,
  27, 26, 25, 25,
];
var ylabel2 = "Today";
var ydata2 = [
  25, 25, 24, 24, 23, 22, 22, 21, 22, 23, 25, 27, 28, 29, 29, 28, 27, 27, 27,
  26, 26, 26, 26,
];
var xdata = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
];

var todaycolor = "#FF55B8";
var yestercolor = "#2a4bb3";


// const transparentcolor = "rgba(22,0,0,1)";

// var gradientThisWeek = canvas
//   .getContext("2d")
//   .createLinearGradient(0, 0, 0, 150);
// gradientThisWeek.addColorStop(0, "#2a4bb3");
// gradientThisWeek.addColorStop(1, transparentcolor);
// // Gradient color - previous week
// var gradientPrevWeek = canvas
//   .getContext("2d")
//   .createLinearGradient(0, 0, 0, 150);
// gradientPrevWeek.addColorStop(0, "#FF55B8");
// gradientPrevWeek.addColorStop(1, transparentcolor);

const cardgraph = document.getElementById("cardgraph");
cardgraph.querySelector("#currentsensor").textContent = cardlabel;
cardgraph.querySelector("#currentread").textContent = latestread+ unit;
var config = {
  type: "line",
  data: {
    labels: xdata,
    datasets: [
      {
        label:ylabel1,
        data: ydata1,
        // backgroundColor: gradientPrevWeek,
        borderColor: yestercolor,
        // pointBackgroundColor: "#FFFFFF",
        // pointBorderColor: "#FFFFFF",
        lineTension: 0.3,
      },
      {
        label: ylabel2,
        data: ydata2,
        // backgroundColor: gradientThisWeek,
        borderColor: todaycolor,
        // pointBackgroundColor: "#FFFFFF",
        // pointBorderColor: "#FFFFFF",
        lineTension: 0.3,
      },
    ],
  },
  options: {
    tooltips: {
      enabled: false,
      custom: processTooltipModel,
      intersect: false,
      mode: "index",
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 5,
        hoverRadius: 5,
      },
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 1)",
          },
          ticks: {
            beginAtZero: false,
            // mirror: true,
            // padding: -25,
            autoSkip: true,
            maxTicksLimit: 2.1,
            maxRotation: 0,
            minRotation: 0,
          },
        },
      ],
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(225, 225, 225, 1)",
          },
          ticks: {
            beginAtZero: false,
            mirror: true,
            // padding: -25,
            stepSize: 15,
          },
        },
      ],
    },
  },
  plugins: [multiply],
};

function processTooltipModel(model) {
  if (!model.body) {
    return;
  }
  // tooltip 1

  const tooltip = document.getElementById("tooltip");
  tooltip.querySelector(".tooltip-label").textContent = ylabel2;

  tooltip.style.left = model.caretX - 7 + "px";
  tooltip.style.top = model.dataPoints[0].y - 242 + "px";

  tooltip.style.display = "block";
  // console.log(model);
  tooltip.querySelector(".tooltip-label").textContent = ylabel2;
  tooltip.querySelector(".tooltip-label2").textContent = ylabel1;

  tooltip.querySelector(".tooltip-value .value").textContent =
    model.dataPoints[0].yLabel + unit;
  tooltip.querySelector(".tooltip-value .value2").textContent =
    model.dataPoints[1].yLabel + unit;

  // // tooltip 2
  // const tooltip2 = document.getElementById("tooltip2");
  // tooltip2.style.left = model.caretX + "px";
  // tooltip2.style.top = model.dataPoints[1].y - 5 + "px";
  // tooltip2.style.display = "block";
  // // console.log(model);

  const tooltip2 = document.getElementById("tooltip2");
  tooltip2.style.left = model.caretX - 7 + "px";
  tooltip2.style.top = model.dataPoints[1].y - 140 + "px";
  tooltip2.style.display = "block";
  // console.log(model);
}
window.chart = new Chart(canvas, config);

// Hide Tooltip after cursor leave
const el = document.getElementById("card");
const hiddenDiv = document.getElementById("tooltip");
const hiddenDiv2 = document.getElementById("tooltip2");

el.addEventListener("mouseover", function handleMouseOver() {
  hiddenDiv.style.display = "block";
  hiddenDiv2.style.display = "block";
});
el.addEventListener("mouseout", function handleMouseOut() {
  hiddenDiv.style.display = "none";
  hiddenDiv2.style.display = "none";
});

//SET COOKIE
setCookie("user_email", "suck ma pp", 30); //set "user_email" cookie, expires in 30 days
var userEmail = getCookie("user_email"); //"bobthegreat@gmail.com"
// console.log(userEmail);
