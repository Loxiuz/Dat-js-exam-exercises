"use strict";

window.addEventListener("load", start);

const products = [];
const basket = [];

async function start() {
  await getProducts();
  showProducts();
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
  const basketTbody = document.querySelector("#basket tbody");
  basketTbody.innerHTML = "";
  for (let i = 0; i < basket.length; i++) {
    basketTbody.insertAdjacentHTML(
      "beforeend",
      /* html */ `
        <tr>
          <td>
            <button id="item-${i}-remove" class="remove">-</button>
                ${basket[i].amount}
             <button id="item-${i}-add" class="add">+</button>
          </td>
            <td>${basket[i].name}</td>
            <td>${basket[i].price},-</td>
            <td>${basket[i].price * basket[i].amount},-</td>
        </tr>
      `
    );
    document
      .querySelector(`#item-${i}-remove`)
      .addEventListener("click", () => {
        removeFromBasket(basket[i]);
        showBasket();
      });
    document.querySelector(`#item-${i}-add`).addEventListener("click", () => {
      addToBasket(basket[i]);
      showBasket();
    });
  }
  showBasketTotals();
}

function showBasketTotals() {
  let totalAmounts = 0;
  let totalPrices = 0;
  let totalWeights = 0;
  for (const product of basket) {
    totalAmounts += product.amount;
    totalPrices += product.price * product.amount;
    totalWeights += product.weight * product.amount;
    if (totalWeights > 2000) {
      document.querySelector(".warning").classList.add("show");
    } else {
      document.querySelector(".warning").classList.remove("show");
    }
  }
  document.querySelector("#total-in-basket").textContent = totalAmounts;
  document.querySelector("#total-products").textContent = basket.length;
  document.querySelector("#total-price").textContent = totalPrices;
  document.querySelector("#total-weight").textContent = totalWeights;
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
