let playing = false;

const btn = document.querySelector(".play");
const music = document.querySelector("audio");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const container = document.querySelector(".container");
const title = document.querySelector(".music-title");
const srcMusic = [
  { sound: "bensound-acousticbreeze.mp3", pic: "acoustic.jpg" },
  { sound: "bensound-betterdays.mp3", pic: "sunnyday.jpg" },
  { sound: "bensound-clearday.mp3", pic: "clearday.jpg" },
  { sound: "bensound-creativeminds.mp3", pic: "creative-minds.jpg" },
  { sound: "bensound-evolution.mp3", pic: "evolution.jpg" },
  { sound: "bensound-funnysong.mp3", pic: "funny.jpg" },
  { sound: "bensound-goinghigher.mp3", pic: "higher.jpg" },
  { sound: "bensound-sunny.mp3", pic: "sunshine.jpg" },
];
// const srcMusic = [
//   "bensound-acousticbreeze.mp3",
//   "bensound-betterdays.mp3",
//   "bensound-clearday.mp3",
//   "bensound-creativeminds.mp3",
//   "bensound-evolution.mp3",
//   "bensound-funnysong.mp3",
//   "bensound-goinghigher.mp3",
//   "bensound-sunny.mp3",
// ];

container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('../images/${srcMusic[0].pic}')`;
const source = document.querySelector("source");
const sourcePlace = source.setAttribute("src", `./music/${srcMusic[0].sound}`);
title.innerText = `${srcMusic[0].sound}`;

const playMusic = () => {
  playing = !playing;
  if (playing === true) {
    music.play();
    // btn.innerText = "pause";
    btn.innerHTML = "<i class='fas fa-pause'>";
  } else {
    music.pause();
    btn.innerHTML = "<i class='fas fa-play'>";
  }
  console.log(playing);
};

let i = 0;
const playNext = () => {
  music.pause();
  music.currentTime = 0;
  i++;
  if (i < srcMusic.length) {
    source.setAttribute("src", `./music/${srcMusic[i].sound}`);
    container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('../images/${srcMusic[i].pic}')`;
    title.innerText = `${srcMusic[i].sound}`;
    music.load();
    music.play();
  } else {
    i = 0;

    music.play();
  }
};
const playPrevious = () => {
  console.log("clicked previous");
};
btn.addEventListener("click", playMusic);
next.addEventListener("click", playNext);
previous.addEventListener("click", playPrevious);
