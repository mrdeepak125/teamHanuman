var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
music.addEventListener("timeupdate", timeUpdate, false);

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
music.addEventListener('timeupdate', () => {0
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur / 60)
    let min2 = Math.floor(music_dur % 60)
    let min3 = ` ${min1}:${min2}`
    document.getElementById('currentEnd').innerText = min3 ;
    let sec1 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    let sec3 = ` ${sec1}:${sec2}`
    document.getElementById('currentStart').innerText = sec3;
    
    
    //// minut progressbar
    
    let seek = document.getElementById('seek');
    let bar2 = document.getElementById('bar2');
    let dot = document.getElementsByClassName('dot')[0];
    
    let progressBar = parseInt((music_curr / music_dur) * 100);
    bar2.style.width = progressBar +'%';
    dot.style.left = progressBar +'%';
  //  dot.style.background = red;
  var playPercent = timelineWidth * (music.currentTime / duration);
  playhead.style.width = playPercent + "px";
    /////
})

// input progressBar
seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})

function timeUpdate() {

}

playButton.onclick = function () {
  music.play();
  playButton.style.visibility = "hidden";
  pause.style.visibility = "visible";
};

pauseButton.onclick = function () {
  music.pause();
  playButton.style.visibility = "visible";
  pause.style.visibility = "hidden";
};

music.addEventListener(
  "canplaythrough",
  function () {
    duration = music.duration;
  },
  false
);