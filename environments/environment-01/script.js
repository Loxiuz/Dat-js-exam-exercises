"use strict";

window.addEventListener("load", start);

const users = [];

async function start() {
  await getData();
  showUsers();
  console.log(users);
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();

  for (const key in data) {
    users.push(data[key]);
  }
}

async function showUsers() {
  for (const user of users) {
    if (user.role === "admin") {
      document.querySelector("#userlist").insertAdjacentHTML(
        "beforeend",
        /* html */ `
            <li><p>Navn: ${user.name} | Aktiv: ${user.active} | Role: ${user.role}</p></li>
        `
      );
    }
  }
}
