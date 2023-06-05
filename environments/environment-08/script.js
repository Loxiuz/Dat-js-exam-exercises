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
}

function showSongs() {
  const songList = document.querySelector("#songlist");
  songList.innerHTML = "";
  for (let i = 0; i < songs.length; i++) {
    songList.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Artist: ${songs[i].artist} | Title: ${songs[i].title} | Duration: ${songs[i].duration} <button id="song-${i}-upvote">Upvote</button></li>  
      `
    );

    document
      .querySelector(`#song-${i}-upvote`)
      .addEventListener("click", () => {
        if (i == 0) {
          console.log("Already at top");
        } else {
          const temp = songs[i - 1];
          songs[i - 1] = songs[i];
          songs[i] = temp;
          showSongs();
        }
      });
  }
}
