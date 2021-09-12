let playing = false;

const btn = document.querySelector(".play");
const music = document.querySelector("audio");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const container = document.querySelector(".container");
const title = document.querySelector(".music-title");

// MUSIC DATA!
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

// Applying background to default song
container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('../images/${srcMusic[0].pic}')`;

// setting  dynamically inital src attribute to audio file
const source = document.querySelector("source");
const sourcePlace = source.setAttribute("src", `./music/${srcMusic[0].sound}`);
title.innerText = `${srcMusic[0].sound}`;

// Play Music function

const playMusic = () => {
  playing = !playing;
  if (playing === true) {
    music.play();
    btn.innerHTML = "<i class='fas fa-pause'>";
  } else {
    music.pause();
    btn.innerHTML = "<i class='fas fa-play'>";
  }
};
// Navigating through the playList
let i = 0;

// play the music  function(used in next and previous clicks)
const musicPlay = () => {
  music.pause();
  music.currentTime = 0;
  source.setAttribute("src", `./music/${srcMusic[i].sound}`);
  container.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)),url('../images/${srcMusic[i].pic}')`;
  title.innerText = `${srcMusic[i].sound}`;
  music.load();
  music.play();
};

// Play next song
const playNext = () => {
  i++;
  if (i < srcMusic.length) {
    musicPlay();
  } else {
    i = 0;

    musicPlay();
  }
};

// Play previous song
const playPrevious = () => {
  i--;
  console.log(i);
  if (i >= 0 && i < srcMusic.length) {
    musicPlay();
  } else {
    i = srcMusic.length - 1;
    musicPlay();
  }
};
// event listener on button controls
btn.addEventListener("click", playMusic);
next.addEventListener("click", playNext);
previous.addEventListener("click", playPrevious);
