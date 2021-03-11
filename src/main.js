/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};
var arr = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let element = Math.floor(Math.random() * arr.length);
let number = arr[element];

let change = document.getElementById("numero");
change.innerHTML = number;

let symbol = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
let symbolform = Math.floor(Math.random() * symbol.length);
let symbolElem = symbol[symbolform];

let change2 = document.getElementById("simbolo");
change2.innerHTML = symbolElem;

let change3 = document.getElementById("symbolbtn");
change3.innerHTML = symbolElem;

// //if (symbolform == "&spades;" || symbolform == "&clubs;") {
//   return (symbolElem.color = "black");
// } else {
//   return (symbolElem.color = "red");
// }//
if (symbolElem === "&hearts;" || symbolElem === "&diams;") {
  document.getElementById("simbolo").classList.add("cardColorRed");
  document.getElementById("symbolbtn").classList.add("cardColorRed");
}
