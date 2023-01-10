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

function rgb2hex(rgb) {
  rgb = rgb.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );
  return rgb && rgb.length === 4
    ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : "";
}

function toggleTheme() {
  if (lightmodetoggle) {
    rootelem.style.setProperty("--background-color", "#d1dae0");
    rootelem.style.setProperty("--text-color", "#002131");
    if (`${themecolor.length}` == 7) {
      rootelem.style.setProperty("--theme-color", themecolor + "61");
    } else {
      rootelem.style.setProperty("--theme-color", themecolor);
    }
    rootelem.style.setProperty("--level-one", "#e7ecee");
    rootelem.style.setProperty("--level-two", "#fdfdfd");
    rootelem.style.setProperty("--level-three", "#385463");
    blueTheme.style.setProperty("background-color", "#2a4bb3" + "61");
    redTheme.style.setProperty("background-color", "#A8092E" + "61");
    cyanTheme.style.setProperty("background-color", "#6CA7A4" + "61");
    greenTheme.style.setProperty("background-color", "#006B43" + "61");
    purpleTheme.style.setProperty("background-color", "#6551B6" + "61");
    greyTheme.style.setProperty("background-color", "#464555" + "61");
    localStorage.setItem("lightdarkmode", 1);

    $("#darkmode i").addClass("fa-sun").removeClass("fa-moon");
    lightmodetoggle = 0;
  } else {
    rootelem.style.setProperty("--background-color", "#13131A");
    rootelem.style.setProperty("--text-color", "#FEFEFE");
    if (`${themecolor.length}` == 7) {
      rootelem.style.setProperty("--theme-color", themecolor);
    } else {
      themecolor = themecolor.slice(0, -2);
      rootelem.style.setProperty("--theme-color", themecolor);
    }
    rootelem.style.setProperty("--level-one", "#1C1C24");
    rootelem.style.setProperty("--level-two", "#464555");
    rootelem.style.setProperty("--level-three", "#aba9bc");
    blueTheme.style.setProperty("background-color", "#2a4bb3");
    redTheme.style.setProperty("background-color", "#A8092E");
    cyanTheme.style.setProperty("background-color", "#6CA7A4");
    greenTheme.style.setProperty("background-color", "#006B43");
    purpleTheme.style.setProperty("background-color", "#6551B6");
    greyTheme.style.setProperty("background-color", "#464555");
    $("#darkmode i").addClass("fa-moon").removeClass("fa-sun");
    localStorage.setItem("lightdarkmode", 0);

    lightmodetoggle = 1;
  }
}

function mainAccentChanger(id) {
  let accentSelector = document.getElementById(id);
  let accentColor = accentSelector.style.backgroundColor;
  if (lightmodetoggle) {
    rootelem.style.setProperty("--theme-color", rgb2hex(accentColor));
    themecolor = rgb2hex(accentColor);
    localStorage.setItem("themeColorCookie", themecolor);
  } else {
    // if {${rgb2hex(accentColor).length}==7}
    // console.log(${(rgb2hex(accentColor)).length});
    rootelem.style.setProperty("--theme-color", rgb2hex(accentColor) + "61");
    themecolor = rgb2hex(accentColor) + "61";
    localStorage.setItem("themeColorCookie", themecolor);
  }
  // console.log(rgb2hex(accentColor));
}

function checkboxChangeVariable(element) {
  if ($(element).attr("id") == "temprateureSensorCheckbox") {
    if (localStorage.getItem("temprateureSensorCheckbox") == 1) {
      localStorage.setItem("temprateureSensorCheckbox", 0);
    } else {
      localStorage.setItem("temprateureSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "humiditySensorCheckbox") {
    if (localStorage.getItem("humiditySensorCheckbox") == 1) {
      localStorage.setItem("humiditySensorCheckbox", 0);
    } else {
      localStorage.setItem("humiditySensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "pressureSensorCheckbox") {
    if (localStorage.getItem("pressureSensorCheckbox") == 1) {
      localStorage.setItem("pressureSensorCheckbox", 0);
    } else {
      localStorage.setItem("pressureSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "lightningSensorCheckbox") {
    if (localStorage.getItem("lightningSensorCheckbox") == 1) {
      localStorage.setItem("lightningSensorCheckbox", 0);
    } else {
      localStorage.setItem("lightningSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "airQualitySensorCheckbox") {
    if (localStorage.getItem("airQualitySensorCheckbox") == 1) {
      localStorage.setItem("airQualitySensorCheckbox", 0);
    } else {
      localStorage.setItem("airQualitySensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "windSensorCheckbox") {
    if (localStorage.getItem("windSensorCheckbox") == 1) {
      localStorage.setItem("windSensorCheckbox", 0);
    } else {
      localStorage.setItem("windSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "ultraVioletSensorCheckbox") {
    if (localStorage.getItem("ultraVioletSensorCheckbox") == 1) {
      localStorage.setItem("ultraVioletSensorCheckbox", 0);
    } else {
      localStorage.setItem("ultraVioletSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "luxSensorCheckbox") {
    if (localStorage.getItem("luxSensorCheckbox") == 1) {
      localStorage.setItem("luxSensorCheckbox", 0);
    } else {
      localStorage.setItem("luxSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "batterySensorCheckbox") {
    if (localStorage.getItem("batterySensorCheckbox") == 1) {
      localStorage.setItem("batterySensorCheckbox", 0);
    } else {
      localStorage.setItem("batterySensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "cloudSensorCheckbox") {
    if (localStorage.getItem("cloudSensorCheckbox") == 1) {
      localStorage.setItem("cloudSensorCheckbox", 0);
    } else {
      localStorage.setItem("cloudSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "groundSensorCheckbox") {
    if (localStorage.getItem("groundSensorCheckbox") == 1) {
      localStorage.setItem("groundSensorCheckbox", 0);
    } else {
      localStorage.setItem("groundSensorCheckbox", 1);
    }
  }
  if ($(element).attr("id") == "textOrGauge") {
    if (localStorage.getItem("textOrGauge") == 1) {
      localStorage.setItem("textOrGauge", 0);
    } else {
      localStorage.setItem("textOrGauge", 1);
    }
  }
  if ($(element).attr("id") == "showYesterdayGraph") {
    if (localStorage.getItem("showYesterdayGraph") == 1) {
      localStorage.setItem("showYesterdayGraph", 0);
    } else {
      localStorage.setItem("showYesterdayGraph", 1);
    }
  }
  if ($(element).attr("id") == "airGroundSensorCheckbox") {
    if (localStorage.getItem("airGroundSensorCheckbox") == 1) {
      localStorage.setItem("airGroundSensorCheckbox", 0);
    } else {
      localStorage.setItem("airGroundSensorCheckbox", 1);
    }
  }
}

function checkStateAndTickCheckbox(id) {
  if (localStorage.getItem(id) == 1) {
    $("#" + id).prop("checked", true);
  } else {
    $("#" + id).prop("checked", false);
  }
}

function setTimeTopBar() {
  var d = new Date();
  $("#dateClock").text(
    d.toLocaleString("en-US", {
      hour12: false,
      weekday: "short", // long, short, narrow
      day: "numeric", // numeric, 2-digit
      year: "numeric", // numeric, 2-digit
      month: "short", // numeric, 2-digit, long, short, narrow
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
    })
  );
  $("#dateClockUTC").text(
    d.toLocaleString("en-US", {
      timeZone: "UTC",
      hour12: false,
      weekday: "short", // long, short, narrow
      day: "numeric", // numeric, 2-digit
      year: "numeric", // numeric, 2-digit
      month: "short", // numeric, 2-digit, long, short, narrow
      hour: "numeric", // numeric, 2-digit
      minute: "numeric", // numeric, 2-digit
    })
  );
}

function secondsToHMS(secs) {
  function z(n) {
    return (n < 10 ? "0" : "") + n;
  }
  var sign = secs < 0 ? "-" : "";
  secs = Math.abs(secs);
  return sign + z((secs / 3600) | 0) + ":" + z(((secs % 3600) / 60) | 0);
}

function getNightLengthFromDayLength(DayLen) {
  var startTime = moment(DayLen, "HH:mm");
  var endTime = moment("24:00", "HH:mm");
  var duration = moment.duration(endTime.diff(startTime));
  var hours = parseInt(duration.asHours());
  var minutes = parseInt(duration.asMinutes()) % 60;
  return (
    hours.toString().replace(/^(\d)$/, "0$1") +
    ":" +
    minutes.toString().replace(/^(\d)$/, "0$1")
  );
}

function setRiseTime() {
  var stimes = SunCalc.getTimes(new Date(), latitude, longitude);
  var sunriseStr =
    stimes.sunrise
      .getHours()
      .toString()
      .replace(/^(\d)$/, "0$1") +
    ":" +
    stimes.sunrise
      .getMinutes()
      .toString()
      .replace(/^(\d)$/, "0$1");
  var sunsetStr =
    stimes.sunset
      .getHours()
      .toString()
      .replace(/^(\d)$/, "0$1") +
    ":" +
    stimes.sunset
      .getMinutes()
      .toString()
      .replace(/^(\d)$/, "0$1");
  // console.log(sunriseStr + " " +sunsetStr)

  var dayldate = stimes.sunset.getTime() - stimes.sunrise.getTime();
  var dayLength = secondsToHMS(dayldate / 1000);
  var nightLength = getNightLengthFromDayLength(dayLength);
  // console.log(dayLength + " " + nightLength)

  var mtimes = SunCalc.getMoonTimes(new Date(), longitude, latitude);
  var moonriseStr =
    mtimes.rise
      .getHours()
      .toString()
      .replace(/^(\d)$/, "0$1") +
    ":" +
    mtimes.rise
      .getMinutes()
      .toString()
      .replace(/^(\d)$/, "0$1");
  var moonsetStr =
    mtimes.set
      .getHours()
      .toString()
      .replace(/^(\d)$/, "0$1") +
    ":" +
    mtimes.set
      .getMinutes()
      .toString()
      .replace(/^(\d)$/, "0$1");
  // console.log(moonriseStr + " " +moonsetStr)

  $("#sunRise").text(sunriseStr);
  $("#sunSet").text(sunsetStr);
  $("#moonRise").text(moonriseStr);
  $("#moonSet").text(moonsetStr);
  $("#dayL").text(dayLength);
  $("#nightL").text(nightLength);
}


const rootelem = document.documentElement;

var textOrGauge = localStorage.getItem("textOrGauge");
var showYesterdayData = localStorage.getItem("showYesterdayGraph");

checkStateAndTickCheckbox("textOrGauge");
checkStateAndTickCheckbox("showYesterdayGraph");
localStorage.setItem("longitude", 55.2708);
localStorage.setItem("latitude", 25.204);
var longitude = localStorage.getItem("longitude");//55.2708;
var latitude = localStorage.getItem("latitude");//25.204;

var todaycolor = "#FF55B8";
var yestercolor = "#2a4bb3";

var tempTodayColor = "#ff844c";
var tempYesterdayColor = "#b91400";
var humidityTodayColor = "#6ab7ff";
var humidityYesterdayColor = "#005cb2";
var pressureTodayColor = "#5ddef4";
var pressureYesterdayColor = "#007c91";
var airqualityTodayColor = "#82c250";
var airqualityYesterdayColor = "#414d37";

var enableTemperature = localStorage.getItem("temprateureSensorCheckbox");
var enbaleHumidity = localStorage.getItem("humiditySensorCheckbox");
var enablePressure = localStorage.getItem("pressureSensorCheckbox");
var enableLightning = localStorage.getItem("lightningSensorCheckbox");
var enableAirQuality = localStorage.getItem("airQualitySensorCheckbox");
var enableWind = localStorage.getItem("windSensorCheckbox");
var enableUltraViolet = localStorage.getItem("ultraVioletSensorCheckbox");
var enablLux = localStorage.getItem("luxSensorCheckbox");
var enableBattery = localStorage.getItem("batterySensorCheckbox");
var enableCloud = localStorage.getItem("cloudSensorCheckbox");
var enableGround = localStorage.getItem("groundSensorCheckbox");
var enableAirGround = localStorage.getItem("airGroundSensorCheckbox");
if (localStorage.getItem("lightdarkmode") == 1) {
  var lightmode = localStorage.getItem("lightdarkmode");
  var lightmodetoggle = 0;
} else {
  var lightmode = 0;
  var lightmodetoggle = 1;
  localStorage.setItem("lightdarkmode", 0);
}

if (localStorage.getItem("themeColorCookie")) {
  var themecolor = localStorage.getItem("themeColorCookie");
} else {
  localStorage.setItem("themeColorCookie", "#2a4bb3");
  var themecolor = "#2a4bb3";
}
// console.log(localStorage.getItem("themeColorCookie"))

if (enableTemperature == 1) {
  $("#temprateureSensorCheckbox").prop("checked", true);

  var TempChart = Highcharts.chart("containertemp", {
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
          25, 25, 24, 24, 23, 22, 22, 21, 22, 23, 25, 27, 28, 29, 29, 28, 27,
          27, 27, 26, 26, 26, 26, 27,
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
      backgroundColor: themecolor,
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

  var cardgraphTemp = document.getElementById("cardgraphtemp");
  var lastReadTemp = 25;
  var tempUnit = "°C";
  cardgraphTemp.querySelector("#currentsensortemp").textContent = "Temperature";
  if (textOrGauge == 0) {
    var tempKnob = pureknob.createKnob(50, 50);
    tempKnob.setProperty("valMin", 0);
    tempKnob.setProperty("valMax", 100);
    tempKnob.setProperty("trackWidth", 0.2);
    tempKnob.setProperty("textScale", 1.5);
    tempKnob.setProperty("readonly", 1);
    tempKnob.setProperty("angleStart", -0.75 * 3.1415);
    tempKnob.setProperty("angleEnd", 0.75 * 3.1415);
    tempKnob.setProperty("colorFG", tempTodayColor);
    tempKnob.setProperty("colorBG", tempYesterdayColor);
    tempKnob.setValue(lastReadTemp);
    var node = tempKnob.node();
    var elem = document.getElementById("currentreadtemp");
    elem.appendChild(node);
  } else {
    cardgraphTemp.querySelector("#currentreadtemp").textContent =
      lastReadTemp + tempUnit;
  }
} else {
  let cardgraphTemp = document.getElementById("cardtemp");
  cardgraphTemp.style.display = "none";
}

if (enbaleHumidity == 1) {
  $("#humiditySensorCheckbox").prop("checked", true);

  var HumidityChart = Highcharts.chart("containerhumd", {
    series: [
      {
        name: "Yesterday",
        data: [
          41, 35, 38, 31, 45, 39, 44, 39, 45, 64, 60, 53, 52, 44, 48, 42, 64,
          64, 71, 69, 74, 68, 60, 54,
        ],
        color: humidityYesterdayColor,
        marker: {
          enabled: false,
        },
      },
      {
        name: "Today",
        data: [
          75, 68, 52, 56, 71, 63, 65, 64, 76, 60, 54, 68, 55, 49, 68, 59, 38,
          43, 75, 80, 81, 53, 68, 51,
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
      backgroundColor: themecolor,
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

  var cardgraphHumd = document.getElementById("cardgraphhumd");
  var latestReadHumdity = 50;
  var humdityUnit = "%";
  cardgraphHumd.querySelector("#currentsensorhumd").textContent = "Humidity";
  if (textOrGauge == 0) {
    var humidityKnob = pureknob.createKnob(50, 50);
    humidityKnob.setProperty("valMin", 0);
    humidityKnob.setProperty("valMax", 100);
    humidityKnob.setProperty("trackWidth", 0.2);
    humidityKnob.setProperty("textScale", 1.5);
    humidityKnob.setProperty("readonly", 1);
    humidityKnob.setProperty("angleStart", -0.75 * 3.1415);
    humidityKnob.setProperty("angleEnd", 0.75 * 3.1415);
    humidityKnob.setProperty("colorFG", humidityTodayColor);
    humidityKnob.setProperty("colorBG", humidityYesterdayColor);
    humidityKnob.setValue(latestReadHumdity);
    var node = humidityKnob.node();
    var elem = document.getElementById("currentreadhumd");
    elem.appendChild(node);
  } else {
    cardgraphHumd.querySelector("#currentreadhumd").textContent =
      latestReadHumdity + humdityUnit;
  }
} else {
  let cardgraphHumd = document.getElementById("cardhumd");
  cardgraphHumd.style.display = "none";
}

if (enablePressure == 1) {
  $("#pressureSensorCheckbox").prop("checked", true);

  var PressureChart = Highcharts.chart("containerpressure", {
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
      backgroundColor: themecolor,
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

  var cardgraphPressure = document.getElementById("cardgraphpressure");
  var latestReadPressure = 30;
  var pressureUnit = " kPa";
  cardgraphPressure.querySelector("#currentsensorpressure").textContent =
    "Air Pressure";
  if (textOrGauge == 0) {
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
    pressureKnob.setValue(latestReadPressure);
    var node = pressureKnob.node();
    var elem = document.getElementById("currentreadpressure");
    elem.appendChild(node);
  } else {
    cardgraphPressure.querySelector("#currentreadpressure").textContent =
      latestReadPressure + pressureUnit;
  }
} else {
  let cardgraphPress = document.getElementById("cardpress");
  cardgraphPress.style.display = "none";
}

if (enableAirQuality == 1) {
  $("#airQualitySensorCheckbox").prop("checked", true);

  var AirQualityChart = Highcharts.chart("containerairq", {
    series: [
      {
        name: "Yesterday",
        data: [
          29.68, 30.13, 30.49, 30.45, 30.33, 30.4, 30.39, 30.17, 30.1, 30.33,
          30.39, 30.11, 30.37, 30.35, 29.95, 30.08, 30.68, 30.52, 30.2, 30.11,
          29.87, 30.06, 30.01, 30.01,
        ],
        color: airqualityYesterdayColor,
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
        color: airqualityTodayColor,
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
      backgroundColor: themecolor,
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

  var cardgraphAirQuality = document.getElementById("cardgraphAirQuality");
  var latestReadAirQuality = 30;
  var airQualityUnit = "%";
  cardgraphAirQuality.querySelector("#currentsensorairquality").textContent =
    "Air Quality";
  if (textOrGauge == 0) {
    var airquality = pureknob.createKnob(50, 50);
    airquality.setProperty("valMin", 0);
    airquality.setProperty("valMax", 100);
    airquality.setProperty("trackWidth", 0.2);
    airquality.setProperty("textScale", 1.5);
    airquality.setProperty("readonly", 1);
    airquality.setProperty("angleStart", -0.75 * 3.1415);
    airquality.setProperty("angleEnd", 0.75 * 3.1415);
    airquality.setProperty("colorFG", airqualityTodayColor);
    airquality.setProperty("colorBG", airqualityYesterdayColor);
    airquality.setValue(latestReadAirQuality);
    var node = airquality.node();
    var elem = document.getElementById("currentreadairquality");
    elem.appendChild(node);
  } else {
    cardgraphAirQuality.querySelector("#currentreadairquality").textContent =
      latestReadAirQuality + airQualityUnit;
  }
} else {
  let cardgraphPress = document.getElementById("cardairq");
  cardgraphPress.style.display = "none";
}

if (enableAirGround == 1) {
  $("#airGroundSensorCheckbox").prop("checked", true);
  var airData = [
    29.68, 30.13, 30.49, 30.45, 30.33, 30.4, 30.39, 30.17, 30.1, 30.33, 30.39,
    30.11, 30.37, 30.35, 29.95, 30.08, 30.68, 30.52, 30.2, 30.11, 29.87, 30.06,
    30.01, 30.01,
  ];
  var groundData = [
    30.13, 30.33, 30.13, 30.29, 30.19, 30.22, 30, 30.31, 30.11, 30.47, 30.63,
    30.19, 29.84, 30.09, 30.4, 30.41, 30.06, 29.87, 29.81, 30.09, 30.17, 29.95,
    30.37, 30.48,
  ];
  var x = groundData.map(function (item, index) {
    // In this case item correspond to currentValue of array a,
    // using index to get value from array b
    let y = item - airData[index];

    return parseFloat(y.toFixed(2));
  });
  var subtracted = x;
  // console.log(subtracted)
  var AirGroundChart = Highcharts.chart("containerairground", {
    series: [
      {
        name: "",
        data: subtracted,
        color: pressureTodayColor,
        marker: {
          enabled: false,
        },
      },
      // {
      //   name: "zero",
      //   data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      //   color: pressureYesterdayColor,
      //   marker: {
      //     enabled: false,
      //   },
      // }
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
      gridLineColor: "rgba(255, 255, 255, 0.25)",
      visible: true,
      max: 5,
      min: -5,
    },

    xAxis: {
      gridLineColor: "rgba(255, 255, 255, 1)",
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
      backgroundColor: themecolor,
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

  var cardgraphAirQuality = document.getElementById("cardgraphAirGround");
  var latestReadAirGround = 0.3;
  var airGroundUnit = "C";
  cardgraphAirQuality.querySelector("#currentsensorairground").textContent =
    "Air vs Ground";
  if (textOrGauge == 0) {
    var airgroundKnob = pureknob.createKnob(50, 50);
    airgroundKnob.setProperty("valMin", 0);
    airgroundKnob.setProperty("valMax", 100);
    airgroundKnob.setProperty("trackWidth", 0.2);
    airgroundKnob.setProperty("textScale", 1.5);
    airgroundKnob.setProperty("readonly", 1);
    airgroundKnob.setProperty("angleStart", -0.75 * 3.1415);
    airgroundKnob.setProperty("angleEnd", 0.75 * 3.1415);
    airgroundKnob.setProperty("colorFG", airqualityTodayColor);
    airgroundKnob.setProperty("colorBG", airqualityYesterdayColor);
    airgroundKnob.setValue(latestReadAirGround);
    var node = airgroundKnob.node();
    var elem = document.getElementById("currentreadairground");
    elem.appendChild(node);
  } else {
    cardgraphAirQuality.querySelector("#currentreadairground").textContent =
      latestReadAirGround + airGroundUnit;
  }
} else {
  let cardgraphAirGround = document.getElementById("cardairground");
  cardgraphAirGround.style.display = "none";
}

// Chart Update
var delayInMilliseconds = 3000; //1 second

// setTimeout(function () {
//   TempChart.update({
//     series: [
//       {
//         name: "Yesterday",
//         data: [
//           25, 25, 24, 24, 23, 22, 22, 21, 22, 23, 25, 27, 28, 29, 29, 28, 27,
//           27, 27, 26, 26, 26, 26, 27,
//         ],
//       },
//       {
//         name: "Today",
//         data: [
//           25, 25, 22, 24, 22, 22, 22, 21, 22, 23, 22, 27, 22, 29, 29, 22, 27,
//           27, 27, 26, 26, 26, 26, 27,
//         ],
//       },
//     ],
//   });
// }, delayInMilliseconds);

//Theme Changer

var blueTheme = document.getElementById("blueTheme");
var redTheme = document.getElementById("redTheme");
var cyanTheme = document.getElementById("cyanTheme");
var greenTheme = document.getElementById("greenTheme");
var purpleTheme = document.getElementById("purpleTheme");
var greyTheme = document.getElementById("greyTheme");

if (lightmode) {
  rootelem.style.setProperty("--background-color", "#d1dae0");
  rootelem.style.setProperty("--text-color", "#002131");
  if (`${themecolor.length}` == 7) {
    rootelem.style.setProperty("--theme-color", themecolor + "61");
  } else {
    rootelem.style.setProperty("--theme-color", themecolor);
  }
  rootelem.style.setProperty("--level-one", "#e7ecee");
  rootelem.style.setProperty("--level-two", "#fdfdfd");
  rootelem.style.setProperty("--level-three", "#385463");
  blueTheme.style.setProperty("background-color", "#2a4bb3" + "61");
  redTheme.style.setProperty("background-color", "#A8092E" + "61");
  cyanTheme.style.setProperty("background-color", "#6CA7A4" + "61");
  greenTheme.style.setProperty("background-color", "#006B43" + "61");
  purpleTheme.style.setProperty("background-color", "#6551B6" + "61");
  greyTheme.style.setProperty("background-color", "#464555" + "61");
  $("#darkmode i").addClass("fa-sun").removeClass("fa-moon");
  localStorage.setItem("lightdarkmode", 1);
} else {
  rootelem.style.setProperty("--background-color", "#13131A");
  rootelem.style.setProperty("--text-color", "#FEFEFE");
  if (`${themecolor.length}` == 7) {
    rootelem.style.setProperty("--theme-color", themecolor);
  } else {
    themecolor = themecolor.slice(0, -2);
    rootelem.style.setProperty("--theme-color", themecolor);
  }
  rootelem.style.setProperty("--level-one", "#1C1C24");
  rootelem.style.setProperty("--level-two", "#464555");
  rootelem.style.setProperty("--level-three", "#aba9bc");
  blueTheme.style.setProperty("background-color", "#2a4bb3");
  redTheme.style.setProperty("background-color", "#A8092E");
  cyanTheme.style.setProperty("background-color", "#6CA7A4");
  greenTheme.style.setProperty("background-color", "#006B43");
  purpleTheme.style.setProperty("background-color", "#6551B6");
  greyTheme.style.setProperty("background-color", "#464555");
  $("#darkmode i").addClass("fa-moon").removeClass("fa-sun");
  localStorage.setItem("lightdarkmode", 0);
}

//Cookies And Settings

$(".toggleSlideThemeButton, .toggleSlideTheme h3").on("click", function () {
  $("#themeSelector").slideToggle();
  // $this.toggleClass("fa-chevron-up")
  $(
    ".toggleSlideThemeButton .fa-chevron-down, .toggleSlideThemeButton .fa-chevron-up"
  ).toggleClass("fa-chevron-down fa-chevron-up");
});

$(".toggleSlideSensorButton, .toggleSlideSensor h3").on("click", function () {
  $("#sensorConfig").slideToggle();
  // $this.toggleClass("fa-chevron-up")
  $(
    ".toggleSlideSensorButton .fa-chevron-down, .toggleSlideSensorButton .fa-chevron-up"
  ).toggleClass("fa-chevron-down fa-chevron-up");
});

$(".toggleSlideUIButton, .toggleSlideUI h3").on("click", function () {
  $("#uiConfig").slideToggle();
  // $this.toggleClass("fa-chevron-up")
  $(
    ".toggleSlideUIButton .fa-chevron-down, .toggleSlideUIButton .fa-chevron-up"
  ).toggleClass("fa-chevron-down fa-chevron-up");
});

$(".toggleSlideTheme h3").click();

$(".toggleSlideSensor h3").click();

$(".toggleSlideUI h3").click();

// $("#Settingsbut").click();

$("#indianSatelliteIR, .imageContainer").on("click", function () {
  $(this).toggleClass("clickToZoom croppedImg");
});

$("#indianSatelliteIR").on("click", function () {
  $(".imageContainer i").toggleClass(
    "fa-magnifying-glass-minus fa-magnifying-glass-plus"
  );
});
$("#imgContainer").on("mouseenter", function () {
  $("#imgContainer button").css("visibility", "visible");
});
$("#imgContainer").on("mouseleave", function () {
  $("#imgContainer button").css("visibility", "hidden");
});

// document.getElementsByClassName("toggleSlideTheme")[0].click();
// document.getElementsByClassName("toggleSlideSensor")[0].click();

$.getJSON(
  "https://api.weatherapi.com/v1/current.json?key=ef773d319e9b4e95a4c203245212401&q=DXB",
  function (data) {
    // console.log(data)

    $("#clouds").text(data.current.cloud);
    $("#condition").text(data.current.condition.text);
    $("#temp").text(data.current.temp_c + " C°");
    $("#gust").text(data.current.gust_kph + " km/h");
    $("#humidity").text(data.current.humidity + "%");
    $("#last_updated").text("Last Updated: " + data.current.last_updated);
    $("#precip_mm").text(data.current.precip_mm + " mm");
    $("#pressure_mb").text(data.current.pressure_mb + " mb");
    $("#uv").text(data.current.uv);
    $("#vis_km").text(data.current.vis_km + " km");
    $("#wind_degree").text(data.current.wind_degree + "°");
    $("#wind_dir").text(data.current.wind_dir);
    $("#wind_kph").text(data.current.wind_kph + " km/h");

    if (data.current.vis_miles <= 0) {
      $("#vis_miles").text("Dense fog, objects not visible at 45 m");
    } else if (data.current.vis_miles <= 1) {
      $("#vis_miles").text("Thick fog, objects not visible at 200 m");
    } else if (data.current.vis_miles <= 2) {
      $("#vis_miles").text("Fog, objects not visible at 400 m");
    } else if (data.current.vis_miles <= 3) {
      $("#vis_miles").text("Moderate fog, objects not visible at 800 m");
    } else if (data.current.vis_miles <= 4) {
      $("#vis_miles").text("Thin fog or mist, objects not visible at 1 km");
    } else if (data.current.vis_miles <= 5) {
      $("#vis_miles").text("Visibility poor, objects not visible at 3 km");
    } else if (data.current.vis_miles <= 6) {
      $("#vis_miles").text("Visibility moderate, objects not visible at 10 km");
    } else if (data.current.vis_miles <= 7) {
      $("#vis_miles").text("Visibility good, objects not visible at 15 km");
    } else if (data.current.vis_miles <= 8) {
      $("#vis_miles").text(
        "Visibility very good, objects not visible at 50 km"
      );
    } else if (data.current.vis_miles <= 9) {
      $("#vis_miles").text(
        "Visibility excellent, objects visible more than 50 km"
      );
    }
  }
);

setTimeTopBar();
setInterval(setTimeTopBar(), 60000);

setRiseTime();
setInterval(setRiseTime(), 86400000);
