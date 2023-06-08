"use strict";

window.addEventListener("load", start);

const basket = [];

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
  basket.push(product);
}
