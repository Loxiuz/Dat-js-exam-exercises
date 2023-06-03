"use strict";

window.addEventListener("load", start);

import { teachers } from "./teachers.js";

function start() {
  showTeachers();
  createTeacher("teacher1", "email1@email.com");
  createTeacher("teacher2", "email2@email.com");
  createTeacher("teacher3", "email3@email.com");
}

function showTeachers() {
  const teachersList = document.querySelector("#teachers-list");
  teachersList.innerHTML = "";
  for (const teacher of teachers) {
    teachersList.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Name: ${teacher.name} | Email: ${teacher.email}</li>
      `
    );
  }
}

function createTeacher(name, email) {
  const newTeacher = {
    name: name,
    email: email,
  };
  teachers.push(newTeacher);
  showTeachers();
}
