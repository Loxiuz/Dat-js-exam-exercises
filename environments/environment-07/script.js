"use strict";

window.addEventListener("load", start);

const students = [];

function start() {
  document
    .querySelector("#create-student-form button")
    .addEventListener("click", createStudent);
}

function createStudent(event) {
  event.preventDefault();
  const createForm = document.querySelector("#create-student-form");
  const newStudent = {
    name: createForm.name.value,
    email: createForm.email.value,
    age: createForm.age.value,
  };
  students.push(newStudent);
  console.log(students);
  showStudents();
}

function showStudents() {
  const tbody = document.querySelector("#students-table-body");
  tbody.innerHTML = "";

  students.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
  });

  for (const student of students) {
    if (student.age >= 18) {
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
}
