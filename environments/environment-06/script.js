"use strict";

window.addEventListener("load", start);

const products = [];
const basket = [];

async function start() {
  await getProducts();
  addToBasket(products[0]);
  addToBasket(products[1]);
  addToBasket(products[5]);
  addToBasket(products[5]);
  addToBasket(products[5]);
  addToBasket(products[5]);
  addToBasket(products[8]);
  addToBasket(products[8]);

  removeFromBasket(products[5]);
  removeFromBasket(products[1]);
  console.log(basket);
}

async function getProducts() {
  const response = await fetch("products.json");
  const data = await response.json();

  for (const key in data) {
    products.push(data[key]);
  }
  console.log(products);
}

async function showProducts() {
  const products = await getProducts();
  for (let i = 0; i < products.length; i++) {
    document.querySelector("#products").insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <article>
           <h3>${products[i].name}</h3>
           <p>vægt: ${products[i].weight} g</p>
           <p>pris: ${products[i].price},-</p>
           <button id="btn-${i}">Læg i kurv</button>
        </article>
      `
    );
    document.querySelector(`#btn-${i}`).addEventListener("click", () => {
      addToBasket(products[i]);
      showBasket();
      console.log(basket);
    });
  }
}

function showBasket() {
  const basketHtml = document.querySelector("#basket");
  basketHtml.innerHTML = "";
  for (let i = 0; i < basket.length; i++) {
    basketHtml.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <article>
           <h3>${basket[i].name}</h3>
           <p>vægt: ${basket[i].weight} g</p>
           <p>pris: ${basket[i].price},-</p>
        </article>
      `
    );
  }
}

function addToBasket(product) {
  if (basket.includes(product)) {
    product.amount++;
  } else {
    product.amount = 1;
    basket.push(product);
  }
}

function removeFromBasket(product) {
  if (basket.includes(product)) {
    product.amount--;
    if (product.amount === 0) {
      basket.splice(basket.indexOf(product), 1);
    }
  } else {
    console.log("Item not in basket");
  }
}
