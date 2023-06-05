"use strict";

window.addEventListener("load", start);

const playlist = [];

async function start() {
  await getData();
  showPlaylist();
}

async function getData() {
  const response = await fetch("playlist.json");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    playlist.push(data[i]);
  }
}

function showPlaylist() {
  console.log(playlist);
  const songList = document.querySelector("#songlist");
  songList.innerHTML = "";
  for (let i = 0; i < playlist.length; i++) {
    songList.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Artist: ${playlist[i].artist} | Title: ${playlist[i].title} | Duration: ${playlist[i].duration} | <button id="song-${i}-delete-btn">Remove</button></li>  
      `
    );
    document
      .querySelector(`#song-${i}-delete-btn`)
      .addEventListener("click", () => {
        playlist.splice(i, 1);
        showPlaylist();
      });
  }
}
