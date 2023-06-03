"use strict";

window.addEventListener("load", start);

import { teachers } from "./teachers.js";

function start() {
  showTeachers();
}

function showTeachers() {
  sortByEmail();
  for (const teacher of teachers) {
    document.querySelector("#teachers-list").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${teacher.name} | Email: ${teacher.email}</li>
    `
    );
  }
}

function sortByName() {
  teachers.sort((a, b) => {
    if (a.name > b.name) return 1;
    return -1;
  });
}

function sortByEmail() {
  teachers.sort((a, b) => {
    if (a.email < b.email) return 1;
    return -1;
  });
}
