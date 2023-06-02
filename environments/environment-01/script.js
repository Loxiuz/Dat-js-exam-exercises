"use strict";

window.addEventListener("load", start);

async function start() {
  console.log(await getData());
  await showUsers();
}

async function getData() {
  const users = [];
  const response = await fetch("users.json");
  const data = await response.json();
  for (const key in data) {
    users.push(data[key]);
  }
  return users;
}

async function showUsers() {
  const users = await getData();
  for (const user of users) {
    if (user.role === "admin") {
      document.querySelector("#userlist").insertAdjacentHTML(
        "beforeend",
        /* html */ `
            <li><p>Navn: ${user.name} | Aktiv: ${user.active}</p></li>
        `
      );
    }
  }
}
