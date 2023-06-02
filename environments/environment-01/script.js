"use strict";

window.addEventListener("load", start);

async function start() {
  await showUsers();
}

async function getData() {
  const users = [];
  const response = await fetch("users.json");
  const data = await response.json();
  for (const key in data) {
    users.push(data[key]);
  }
  console.log(users);
  return users;
}

async function showUsers() {
  const users = await getData();
  for (const user of users) {
    document.querySelector("#userlist").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${user.name} | Aktiv: ${user.active} | Rolle: ${user.role}</li>
      `
    );
  }
  showRolesCount(users);
}

function showRolesCount(users) {
  let adminCount = 0;
  let userCount = 0;
  let guestCount = 0;
  for (const user of users) {
    switch (user.role) {
      case "admin":
        adminCount++;
        break;
      case "user":
        userCount++;
        break;
      case "guest":
        guestCount++;
        break;
    }
  }
  document.querySelector("#admin-count").textContent = adminCount;
  document.querySelector("#user-count").textContent = userCount;
  document.querySelector("#guest-count").textContent = guestCount;
}
