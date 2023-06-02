"use strict";

window.addEventListener("load", start);

const users = [];

async function start() {
  await getData();
  showActiveUsers();
  createUser("test1", true, "admin");
  createUser("test2", false, "user");
  createUser("test3", true, "guest");
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();
  for (const user of data) {
    users.push(user);
  }
  console.log(users);
}

function showActiveUsers() {
  const list = document.querySelector("#userlist");
  list.innerHTML = "";
  for (const user of users) {
    if (user.active === true) {
      list.insertAdjacentHTML(
        "beforeend",
        /* html */ `
          <li>Navn: ${user.name} | Rolle: ${user.role} | Activ: ${user.active}</li>
        `
      );
    }
  }
}

function createUser(name, active, role) {
  const user = {
    name: name,
    active: active,
    role: role,
  };
  users.push(user);
  showActiveUsers();
}
