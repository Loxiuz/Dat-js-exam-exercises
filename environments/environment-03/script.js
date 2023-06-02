"use strict";

window.addEventListener("load", start);

const products = [
  { name: "product3", price: 2, inStock: true },
  { name: "product2", price: 4, inStock: false },
  { name: "product1", price: 6, inStock: true },
];

function start() {
  showProducts();
  document
    .querySelector("#select-sort-by")
    .addEventListener("change", sortProducts);
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
    document.querySelector("#list-container ul").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <li>Product: ${product.name} | Price: ${product.price} | In Stock: ${product.inStock}</li>
     `
    );
  }
}

function sortProducts() {
  switch (document.querySelector("#select-sort-by").value) {
    case "name":
      products.sort((a, b) => {
        if (a.name < b.name) return -1;
        return 1;
      });
      break;
    case "price":
      products.sort((a, b) => a.price - b.price);
      break;
    case "inStock":
      products.sort((a, b) => b.inStock - a.inStock);
      break;
  }
  showProducts();
}
