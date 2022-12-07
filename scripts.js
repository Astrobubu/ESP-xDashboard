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
function processTooltipModel(model) {
  if (!model.body) {
    return;
  }
  // tooltip 1
  var tooltip = document.getElementsByClassName(
    "TooltipSelector" + GraphID
  )[0];
  tooltip.querySelector("#tooltip-label" + GraphID).textContent = ylabel2;
  tooltip.style.left = model.caretX - 7 + "px";
  tooltip.style.top = model.dataPoints[0].y - 242 + "px";
  tooltip.style.display = "block";
  tooltip.querySelector("#tooltip-label" + GraphID).textContent = ylabel2;
  tooltip.querySelector("#tooltip-label2" + GraphID).textContent = ylabel1;
  tooltip.querySelector("#value" + GraphID).textContent =
    model.dataPoints[0].yLabel + unit;
  tooltip.querySelector("#value2" + GraphID).textContent =
    model.dataPoints[1].yLabel + unit;

  var tooltip2 = document.getElementsByClassName(
    "TooltipSelector2" + GraphID
  )[0];
  tooltip2.style.left = model.caretX - 7 + "px";
  tooltip2.style.top = model.dataPoints[1].y - 140 + "px";
  tooltip2.style.display = "block";
  // console.log(model);
}

const transparentcolor = "rgba(0,0,0,0.1)";

function createGraph(
  GraphID,
  todaycolor,
  yestercolor,
  cardlabel,
  unit,
  latestread,
  ylabel1,
  ydata1,
  ylabel2,
  ydata2,
  xdata
) {
  var GraphSelector = document.querySelector("#cardcontainer");
  GraphSelector.innerHTML +=
    '<div class="card" id="card' +
    GraphID +
    '"> <div class="about" id="cardgraph' +
    GraphID +
    '"> <h3 class="alignleft" id="currentsensor' +
    GraphID +
    '"></h3> <h3 class="alignright" id="currentread' +
    GraphID +
    '"></h3> <div class="legends"> <div class="info"><span class="legend"></span> <p>24 hours</p> </div> </div> </div> <canvas id="canvas' +
    GraphID +
    '"></canvas> <div class="axis"> <div class="tick"> 6 </div> <div class="tick"> 12 </div> <div class="tick"> 18 </div> <div id="tooltip" class="TooltipSelector' +
    GraphID +
    '"> <div class="tooltip-label" id="tooltip-label' +
    GraphID +
    '"></div> <div class="tooltip-value"> <span class="color-circle"></span> <span class="value" id="value' +
    GraphID +
    '"></span> <br> <div class="tooltip-label2" id="tooltip-label2' +
    GraphID +
    '"></div> <span class="color-circle2"></span> <span class="value2" id="value2' +
    GraphID +
    '"></span> </div> </div> <div id="tooltip2" class="TooltipSelector2' +
    GraphID +
    '"> </div> </div> </div>';

  var canvas = document.getElementById("canvas" + GraphID);
  var cardgraph = document.getElementById("cardgraph" + GraphID);
  cardgraph.querySelector("#currentsensor" + GraphID).textContent = cardlabel;
  cardgraph.querySelector("#currentread" + GraphID).textContent =
    latestread + unit;
  // console.log("FUCJY")
  var configLine = {
    type: "line",
    data: {
      labels: xdata,
      datasets: [
        {
          label: ylabel1,
          data: ydata1,
          backgroundColor: transparentcolor,
          borderColor: yestercolor,
          // pointBackgroundColor: "#FFFFFF",
          // pointBorderColor: "#FFFFFF",
          lineTension: 0.3,
        },
        {
          label: ylabel2,
          data: ydata2,
          backgroundColor: transparentcolor,
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
          hitRadius: 0,
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
              color: "rgba(225, 225, 225, 1)",
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              // maxTicksLimit: 2.1,
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
              // mirror: true,
              // stepSize: 15,
            },
          },
        ],
      },
    },
  };

  window.myChart = new Chart(document.getElementById("canvas" + GraphID), configLine);

  // Hide Tooltip after cursor leave
  var el = document.getElementById("card" + GraphID);

  var hiddenDiv = document.getElementsByClassName(
    "TooltipSelector" + GraphID
  )[0];
  var hiddenDiv2 = document.getElementsByClassName(
    "TooltipSelector2" + GraphID
  )[0];

  el.addEventListener("mouseover", function handleMouseOver() {
    hiddenDiv.style.display = "block";
    hiddenDiv2.style.display = "block";
  });
  el.addEventListener("mouseout", function handleMouseOut() {
    hiddenDiv.style.display = "none";
    hiddenDiv2.style.display = "none";
  });
}

// // CHART JS
// var GraphID = 1;
// var cardlabel = "Temperature";
// var unit = "°C";
// var latestread = "25";
// var ylabel1 = "Yesterday";
// var ydata1 = [
//   25, 25, 24, 23, 23, 23, 22, 21, 22, 23, 25, 26, 27, 28, 29, 28, 27, 27, 26,
//   27, 26, 25, 25, 26,
// ];
// var ylabel2 = "Today";
// var ydata2 = [
//   25, 25, 24, 24, 23, 22, 22, 21, 22, 23, 25, 27, 28, 29, 29, 28, 27, 27, 27,
//   26, 26, 26, 26, 27,
// ];
// var xdata = [
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10",
//   "11",
//   "12",
//   "13",
//   "14",
//   "15",
//   "16",
//   "17",
//   "18",
//   "19",
//   "20",
//   "21",
//   "22",
//   "23",
// ];

// var todaycolor = "#FF55B8";
// var yestercolor = "#2a4bb3";
// createGraph(
//   (GraphID = 2),
//   todaycolor,
//   yestercolor,
//   cardlabel,
//   unit,
//   latestread,
//   ylabel1,
//   ydata1,
//   ylabel2,
//   ydata2,
//   xdata
// );

// console.log("fuck this")




createGraph(
  (GraphID = 22),
  (todaycolor = "#EE6A59"),
  (yestercolor = "#F9AC67"),
  (cardlabel = "Humidity"),
  (unit = "%"),
  (latestread = 50),
  (ylabel1 = "Yesterday"),
  (ydata1 = [10, 20, 30, 25, 30, 10]),
  (ylabel2 = "Today"),
  (ydata2 = [20, 30, 40, 35, 30, 20]),
  (xdata = [1, 2, 3, 4, 5, 6])
);

createGraph(
  (GraphID = 23),
  (todaycolor = "#EE6A59"),
  (yestercolor = "#F9AC67"),
  (cardlabel = "Humidity"),
  (unit = "%"),
  (latestread = 50),
  (ylabel1 = "Yesterday"),
  (ydata1 = [120, 220, 320, 225, 230, 120]),
  (ylabel2 = "Today"),
  (ydata2 = [220, 230, 420, 325, 302, 220]),
  (xdata = [1, 2, 3, 4, 5, 6])
);













//SET COOKIE
// setCookie("user_email", "suck ma pp", 30); //set "user_email" cookie, expires in 30 days
// var userEmail = getCookie("user_email"); //"bobthegreat@gmail.com"
// console.log(userEmail);
