"use strict";

window.addEventListener("load", start);

function start() {
  document.querySelector("#result_failure").classList.add("hide");
  document.querySelector("#result_success").classList.add("hide");

  document.querySelector("#btn-tekst").addEventListener("click", clicked);
}

function clicked() {
  console.log("Det virker!");
  document.querySelector("#result_success").classList.add("show");
}
