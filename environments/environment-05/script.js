"use strict";

window.addEventListener("load", start);

import { courses } from "./courses.js";

function start() {
  showCourses();
}

function showCourses() {
  sortByPoints();
  for (const course of courses) {
    document.querySelector("#courses-list").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${course.name} | ECTS-Points: ${course.ectsPoints}</li>    
      `
    );
  }
}

function sortByPoints() {
  courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}
