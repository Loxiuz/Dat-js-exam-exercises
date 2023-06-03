"use strict";

window.addEventListener("load", start);

import { courses } from "./courses.js";

function start() {
  showCourses();
}

function showCourses() {
  sortByStartDate();
  for (const course of courses) {
    document.querySelector("#courses-list").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${course.name} | Start Date: ${course.startDate} | ECTS-Point: ${course.ectsPoints}</li>  
      `
    );
  }
}

function sortByStartDate() {
  courses.sort((a, b) => {
    if (a.startDate < b.startDate) return -1;
    return 1;
  });
}
