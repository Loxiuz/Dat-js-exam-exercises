"use strict";

window.addEventListener("load", start);

const products = [
  { name: "product1", price: 2, inStock: true },
  { name: "product2", price: 4, inStock: false },
  { name: "product3", price: 6, inStock: true },
];

function start() {
  showProducts();
  createProdukt("product4", 8, false);
  createProdukt("product5", 10, true);
  createProdukt("product6", 12, true);
}

function showProducts() {
  const listContainer = document.querySelector("#list-container");
  listContainer.innerHTML = "";
  listContainer.insertAdjacentHTML(
    "beforeend",
    /* html */ `
        <ul></ul>
   `
  );
  for (const product of products) {
    if (product.inStock === true) {
      document.querySelector("#list-container ul").insertAdjacentHTML(
        "beforeend",
        /* html */ `
            <li>Product: ${product.name} | Price: ${product.price} | In Stock: ${product.inStock}</li>
        `
      );
    }
  }
}

function createProdukt(name, price, inStock) {
  const newProduct = {
    name: name,
    price: price,
    inStock: inStock,
  };
  products.push(newProduct);
  showProducts();
}
