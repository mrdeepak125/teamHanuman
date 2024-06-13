import React, { useEffect, useRef } from 'react';
import '../assets/css/music.css'
// import '../../assets/js/music.js'
function CalishaAudio() {
  const musicRef = useRef(null);
  const playButtonRef = useRef(null);
  const pauseButtonRef = useRef(null);
  const playheadRef = useRef(null);
  const timelineRef = useRef(null);
  const durationRef = useRef(null);

  useEffect(() => {
    const music = musicRef.current;
    const playButton = playButtonRef.current;
    const pauseButton = pauseButtonRef.cuarrent;
    const playhead = playheadRef.current;
    const timeline = timelineRef.current;

    let duration;

    if (pauseButton){
    pauseButton.style.visibility = "hidden";
    }

    // const timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
    if (timeline && playhead) {
      var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;
      // Now you can safely use timelineWidth
    }
    if (music) {
      music.addEventListener("timeupdate", timeUpdate, false);

      // Cleanup function to remove event listener when component is unmounted
      return () => {
        music.removeEventListener("timeupdate", timeUpdate);
      };
    }
    // music.addEventListener("timeupdate", timeUpdate);

    function timeUpdate() {
      const music_curr = music.currentTime;
      const music_dur = music.duration;
      const min1 = Math.floor(music_dur / 60);
      const min2 = Math.floor(music_dur % 60);
      const min3 = `${min1}:${min2}`;
      durationRef.current.innerText = min3;
      const sec1 = Math.floor(music_curr / 60);
      const sec2 = Math.floor(music_curr % 60);
      const sec3 = `${sec1}:${sec2}`;

      const seek = document.getElementById('seek');
      const bar2 = document.getElementById('bar2');
      const dot = document.getElementsByClassName('dot')[0];

      const progressBar = parseInt((music_curr / music_dur) * 100);
      bar2.style.width = progressBar + '%';
      dot.style.left = progressBar + '%';

      const playPercent = timelineWidth * (music.currentTime / duration);
      playhead.style.width = playPercent + "px";
    }

    // const timeUpdate = () => {
    //   const music = musicRef.current;
    //   const timeline = timelineRef.current;
  
    //   if (music && timeline) {
    //     const value = (music.currentTime / music.duration) * 100;
    //     timeline.value = value;
    //   }
    // };
    if (music && timeline) {
      music.currentTime = timeline.value * music.duration / 100;
    }
  
    // timeline.addEventListener('change', () => {
    //   music.currentTime = timeline.value * music.duration / 100;
    // });
    if (music && playButton && pauseButton) {
    playButton.onclick = function () {
      music.play();
      playButton.style.visibility = "hidden";
      pauseButton.style.visibility = "visible";
    };
    }
    pauseButton.onclick = function () {
      music.pause();
      playButton.style.visibility = "visible";
      pauseButton.style.visibility = "hidden";
    };
  
    music.addEventListener(
      "canplaythrough",
      function () {
        duration = music.duration;
        durationRef.current = duration;
      },
      false
    );

    return () => {
      music.removeEventListener("timeupdate", timeUpdate);
      timeline.removeEventListener('change');
    };
  }, []);
  return (
    <>
      <div className="Music">
        <div className="player">
          <ul>
            <li className="cover">
              <img src="./img/shi ram.png" />
            </li>
            <li className="info">
              <h1>Jai Shri ram</h1>
              <h4>DEEPAK</h4>
              <h2>Balaji Achha Lage se</h2>
              <div className="button-items">
                <audio ref={musicRef} id="music" loop preload="auto">
                  <source src="https://mrdeepak125.github.io/teamhanumancalisha/hanuman.mp3" type="audio/mp3" />
                  <source src="https://mrdeepak125.github.io/teamhanumancalisha/hanuman.mp3" type="audio/ogg" />
                </audio>
                <span id="currentStart">0:00</span>
                <div className="bar">
                  <input ref={timelineRef} id="seek" max="100" min="0" type="range" />
                  <div id="slider">
                    <div id="elapsed" />
                  </div>
                  <div className="bar2" id="bar2" />
                  <div className="dot" />
                </div>
                <span id="currentEnd">0:00</span>
                <div className="controls">
                  <span className="expend">
                    <svg
                      className="step-backward"
                      viewBox="0 0 25 25"
                      xmlSpace="preserve"
                    >
                      <g>
                        <polygon points="4.9,4.3 9,4.3 9,11.6 21.4,4.3 21.4,20.7 9,13.4 9,  20.7 4.9,20.7" />
                      </g>
                    </svg>
                  </span>
                  <svg id="play" viewBox="0 0 25 25" xmlSpace="preserve">
                    <defs>
                      <rect height="366.4" width="446.4" x="-49.5" y="-132.9" />
                    </defs>
                    <g>
                      <circle cx="12.5" cy="12.5" fill="none" r="10.8" />
                      <path
                        clipRule="evenodd"
                        d="M8.7,6.9V18c0,0,0.2,1.4,1.8,0l8.1-4.8c0,  0,1.2-1.1-1-2L9.8,6.5 C9.8,6.5,9.1,6,8.7,6.9z"
                        fillRule="evenodd"
                      />
                    </g>
                  </svg>
                  <svg id="pause" viewBox="0 0 25 25" xmlSpace="preserve">
                    <g>
                      <rect height="15.7" width="3.8" x="6" y="4.6" />
                      <rect height="15.7" width="3.9" x="14" y="4.6" />
                    </g>
                  </svg>
                  <span className="expend">
                    <svg
                      className="step-foreward"
                      viewBox="0 0 25 25"
                      xmlSpace="preserve"
                    >
                      <g>
                        <polygon points="20.7,4.3 16.6,4.3 16.6,11.6 4.3,  4.3 4.3,20.7 16.7,13.4 16.6,20.7 20.7,20.7" />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <p className="social">
          <a className="twitter" href="#">
            Youtube |
          </a>
          <a
            className="github"
            href="https://www.instagram.com/teamhanumanchalisa/"
            target="_blank"
          >
            Instagram
          </a>
        </p>
      </div>
    </>
  );
};
export default CalishaAudio;
