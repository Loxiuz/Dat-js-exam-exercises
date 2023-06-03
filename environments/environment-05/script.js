"use strict";

window.addEventListener("load", start);

import { courses } from "./courses.js";

function start() {
  showCourses();
  createCourse("course1", 40, "teacher1");
  createCourse("course2", 50, "teacher2");
  createCourse("course3", 60, "teacher3");
}

function showCourses() {
  const coursesList = document.querySelector("#courses-list");
  coursesList.innerHTML = "";
  for (const course of courses) {
    coursesList.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${course.name} | ECTS-Point: ${course.ectsPoints} | Teacher: ${course.teacher}</li>
      `
    );
  }
}

function createCourse(name, ectsPoints, teacher) {
  const newCourse = {
    name: name,
    ectsPoints: ectsPoints,
    teacher: teacher,
  };
  courses.push(newCourse);
  showCourses();
}
