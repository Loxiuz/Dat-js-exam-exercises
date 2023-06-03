"use strict";

window.addEventListener("load", start);

import { courses } from "./courses.js";

function start() {
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", filterCourses);
}

function showCourses(coursesArray) {
  const coursesList = document.querySelector("#courses-list");
  coursesList.innerHTML = "";
  for (const course of coursesArray) {
    coursesList.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${course.name} | ECTS-Point: ${course.ectsPoints}</li>  
      `
    );
  }
}

function filterCourses() {
  const chosenFilter = document.querySelector("#select-filter-ects").value;
  const filteredCourses = courses.filter(
    course => course.ectsPoints == chosenFilter
  );
  showCourses(filteredCourses);
}
