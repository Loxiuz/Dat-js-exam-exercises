"use strict";

window.addEventListener("load", start);

function start() {
  showProducts();
}

async function getProducts() {
  const products = [];
  const response = await fetch("products.json");
  const data = await response.json();

  for (const key in data) {
    products.push(data[key]);
  }

  return products;
}

async function showProducts() {
  const products = await getProducts();
  for (const product of products) {
    document.querySelector("#products").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <article>
           <h3>${product.name}</h3>
           <p>vægt: ${product.weight} g</p>
           <p>pris: ${product.price},-</p>
           <button>Læg i kurv</button>
        </article>
      `
    );
  }
}
