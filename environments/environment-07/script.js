"use strict";

window.addEventListener("load", start);

const students = [];

function start() {
  document
    .querySelector("#create-student-form button")
    .addEventListener("click", createStudent);
}

function showStudents() {
  const tbody = document.querySelector("#students-table-body");
  tbody.innerHTML = "";
  for (const student of students) {
    tbody.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.age}</td>
        </tr>  
      `
    );
  }
}

function createStudent(event) {
  event.preventDefault();
  const createForm = document.querySelector("#create-student-form");
  if (hasCorrectEmail(createForm.email.value)) {
    const newStudent = {
      name: createForm.name.value,
      email: createForm.email.value,
      age: createForm.age.value,
    };
    students.push(newStudent);
  } else {
    console.log("Email invalid");
  }
  showStudents();
}

function hasCorrectEmail(email) {
  return (
    email.includes("@") &&
    email.indexOf("@") >= 4 &&
    email.substring(email.indexOf("@")) === "@stud.kea.dk"
  );
}
