/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suits = ["hearts", "diamonds", "spades", "clubs"];
  let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cards = document.querySelector(".card");
  let cardValues = document.querySelector(".card h1");
  cards.classList.add(suits[getRndInteger(0, suits.length - 1)]);
  cardValues.innerHTML = values[getRndInteger(0, values.length - 1)];
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
