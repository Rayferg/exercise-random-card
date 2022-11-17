/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var number = document.querySelector(".number");
  var card = document.querySelector(".card");
  var icons = ["heart", "spade", "club", "diamond"];
  var cardvalues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  number.innerHTML = cardvalues[Math.floor(Math.random() * cardvalues.length)];
  card.classList.add(icons[Math.floor(Math.random() * icons.length)]);
  console.log("Hello Rigo from the console!");
};
