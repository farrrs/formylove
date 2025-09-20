const song = document.getElementById("loveSong");
const playBtn = document.getElementById("play-btn");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const albumCover = document.getElementById("album-cover");

// Play / Pause
function playPause() {
  if (song.paused) {
    song.play();
    playBtn.textContent = "⏸️";
    albumCover.classList.add("rotate");
    playBtn.classList.add("love-beat");
    setTimeout(() => playBtn.classList.remove("love-beat"), 400);
  } else {
    song.pause();
    playBtn.textContent = "▶️";
    albumCover.classList.remove("rotate");
  }
}

// Update progress bar
song.ontimeupdate = function () {
  progress.value = (song.currentTime / song.duration) * 100 || 0;
  currentTimeEl.textContent = formatTime(song.currentTime);
};

// Show duration after load
song.onloadedmetadata = function () {
  durationEl.textContent = formatTime(song.duration);
};

// Drag progress
progress.oninput = function () {
  song.currentTime = (progress.value / 100) * song.duration;
};

// Format time mm:ss
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  if (sec < 10) sec = "0" + sec;
  return `${min}:${sec}`;
}

// Prev & Next (buat lucu)
function prevSong() {
  alert("Eitss... lagu sebelumnya masih rahasia! 🤭");
}

function nextSong() {
  alert("Hehe, tunggu kejutan lagu selanjutnya ya 🎁💕");
}
const volumeSlider = document.getElementById("volume");

// Atur volume
volumeSlider.addEventListener("input", () => {
  song.volume = volumeSlider.value;
});
const titles = [
  "Kamu di Hatiku 💖",
  "Setiap Detik Bersamamu Itu Musik 🎶",
  "Aku Sayang Kamu Lebih dari Spotify 💚"
];

let titleIndex = 0;
const songTitle = document.getElementById("song-title");

// Ganti judul tiap 15 detik
setInterval(() => {
  titleIndex = (titleIndex + 1) % titles.length;
  songTitle.textContent = titles[titleIndex];
}, 16000);

