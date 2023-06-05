"use strict";

window.addEventListener("load", start);

const songs = [
  { artist: "Taylor Swift", title: "Blank space", duration: "4:33" },
  { artist: "Beastie Boys", title: "Sabotage", duration: "3:02" },
  { artist: "Skrillex", title: "Bangarang", duration: "3:35" },
  {
    artist: "Wolfgang Amadeus Mozart",
    title: "Eine kleine Nachtmusik",
    duration: "5:45",
  },
  { artist: "Coldplay", title: "Yellow", duration: "4:27" },
  { artist: "Metallica", title: "Enter Sandman", duration: "5:32" },
];

function start() {
  showSongs();
  document
    .querySelector("#add-song-form button")
    .addEventListener("click", addSong);
  document
    .querySelector("#sort-songs-form")
    .addEventListener("change", showSongs);
}

function addSong(event) {
  event.preventDefault();
  const form = document.querySelector("#add-song-form");
  const newSong = {
    artist: form.name.value,
    title: form.title.value,
    duration: form.duration.value,
  };
  songs.push(newSong);
  showSongs();
  console.log(songs);
}

function showSongs() {
  const sortForm = document.querySelector("#sort-songs-form");

  if (sortForm.sortby.value === "artist") {
    songs.sort((a, b) => {
      if (a.artist < b.artist) return -1;
      return 1;
    });
  } else if (sortForm.sortby.value === "title") {
    songs.sort((a, b) => {
      if (a.title < b.title) return -1;
      return 1;
    });
  }

  const songList = document.querySelector("#songlist");
  songList.innerHTML = "";
  for (const song of songs) {
    songList.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Artist: ${song.artist} | Title: ${song.title} | Duration: ${song.duration}</li>  
      `
    );
  }
}
