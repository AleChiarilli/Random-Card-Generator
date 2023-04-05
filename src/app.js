/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //            0  1  2  3  4                  10   11   12
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  //            0     1   2     3
  let stick = ["♦", "♥", "♠", "♣"];

  let randomNumber = number[Math.floor(Math.random() * 12)];
  let randomStick = Math.floor(Math.random() * 3);

  document.getElementById("card_content").innerHTML = `<div
  class="card d-flex justify-content-between container-fluid"
  style="width: 18rem; height: 25rem;"
>

  <div class= "display-1" style='${
    randomStick <= 1 ? "color: red;" : ""
  }' id="stick">${stick[randomStick]}</div>

  <div class="display-1 text-center fw-bold" id="number">${randomNumber}</div>

  <div class="text-end display-1" style='${
    randomStick <= 1 ? "color: red;" : ""
  } transform: rotate(180deg) scaleX(-1); ' id="stick">${
    stick[randomStick]
  }</div>

  </div>`;

  console.log(randomNumber);
  console.log(randomStick);
};

//   let randomNumber = Math.floor(Math.random() * 12);
//   let randomStick = Math.floor(Math.random() * 3);

//   const resultNumber = number[randomNumber];
//   const resultStick = stick[randomStick];

//   console.log(resultNumber);
//   console.log(resultStick);
// };
