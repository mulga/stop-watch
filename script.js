// 1 sekunde = 60ms
// 1 minutten = 60sec
// 1 stunde = 60min

var sec, min, hr, starttime;
sec = 0;
min = 0;
hr = 0;

starttime = false;

let stopwatch = document.getElementById("timeFormat");

// baslatir
function startStopwatch() {
  if (starttime == false) {
    starttime = true;
    stopwatchCycle();
  }
}

// durdurur
function stopWatch() {
  if (starttime == true) {
    starttime = false;
  }
}

// reset yapar
function resetStopwatch() {
  stopwatch.innerHTML = "00:00:00";
  starttime = false;
  sec = 0;
  min = 0;
  hr = 0;
}

// genel fonksiyon
function stopwatchCycle() {
  if (starttime == true) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hr < 10 || hr == 0) {
      hr = "0" + hr;
    }

    stopwatch.innerHTML = ` ${hr}:${min}:${sec} `;
    setTimeout("stopwatchCycle()", 1000);
  }
}
