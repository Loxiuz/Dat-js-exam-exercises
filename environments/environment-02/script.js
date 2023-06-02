"use strict";

window.addEventListener("load", start);

const animals = [];

function start() {
  document.querySelector("button").addEventListener("click", createClicked);
}

function createAnimal(name, type, age) {
  const animal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(animal);
}

function createClicked(event) {
  event.preventDefault();
  const form = document.querySelector("#create-form");
  createAnimal(form.name.value, form.type.value, form.age.value);
  showAnimals();
}

function showAnimals() {
  animals.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
  });
  document.querySelector("table tbody").innerHTML = "";
  for (const animal of animals) {
    document.querySelector("table tbody").insertAdjacentHTML(
      "beforeend",
      /* html */ `
            <tr>
             <td>${animal.name}</td>
             <td>${animal.type}</td>
             <td>${animal.age}</td>
            </tr>
        `
    );
  }
}
