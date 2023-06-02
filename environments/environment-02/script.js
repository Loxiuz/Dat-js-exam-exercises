"use strict";

window.addEventListener("load", start);

const animals = [
  { name: "King", type: "dog", age: 7 },
  { name: "Buster", type: "cat", age: 4 },
  { name: "Albert", type: "horse", age: 8 },
];

function start() {
  showAnimals();
  createAnimal("Navn1", "cat", 5);
  createAnimal("Navn2", "dragon", 10);
  createAnimal("Navn3", "horse", 2);
}

function showAnimals() {
  animals.sort((a, b) => a.age - b.age);
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  for (const animal of animals) {
    tbody.insertAdjacentHTML(
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

function createAnimal(name, type, age) {
  const newAnimal = {
    name: name,
    type: type,
    age: age,
  };
  animals.push(newAnimal);
  showAnimals();
}
