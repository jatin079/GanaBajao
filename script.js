let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let cursong = document.getElementById("cursong");
let musicsong = document.getElementById("musicsong");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playpause() {
  if (ctrlIcon.classList.contains("fa-play")) {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

function nextsong() {
    musicsong.src = "images/Calm_down.jpg";
    song.src = "Music/Baby-Calm-Down(PaglaSongs).mp3";
    document.getElementById("changeh").innerHTML = "Baby Calm Down";
    document.getElementById("changep").innerHTML = "Jatin Kumar";
}
