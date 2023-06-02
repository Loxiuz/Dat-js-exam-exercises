"use strict";

window.addEventListener("load", start);

const products = [
  { name: "product3", price: 2, inStock: true },
  { name: "product2", price: 4, inStock: false },
  { name: "product1", price: 6, inStock: true },
];

function start() {
  showSortedProducts();
  createProduct("product4", 8, false);
  createProduct("product5", 10, true);
  createProduct("product6", 12, false);
}

function showSortedProducts() {
  products.sort((a, b) => b.inStock - a.inStock);
  const listContainer = document.querySelector("#list-container");
  listContainer.innerHTML = "";
  listContainer.insertAdjacentHTML(
    "beforeend",
    /* html */ `
        <ul></ul>
    `
  );
  for (const product of products) {
    document.querySelector("#list-container ul").insertAdjacentHTML(
      "beforeend",
      /* html */ `
         <li>Product: ${product.name} | Price: ${product.price} | In Stock: ${product.inStock}</li>
      `
    );
  }
}

function createProduct(name, price, inStock) {
  const newProduct = {
    name: name,
    price: price,
    inStock: inStock,
  };
  products.push(newProduct);
  showSortedProducts();
}
