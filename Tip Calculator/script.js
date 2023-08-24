const amount = document.getElementById("bill-input");
const number_Of_People = document.getElementById("people-input");
const resetButton = document.getElementById("reset");
// let errorMesaage = document.getElementById("");
let percentButtons = Array.from(document.getElementsByClassName("button0"));
console.log(percentButtons);

let customInput = document.getElementById("button3");
let tipAmount = document.getElementById("tip-amount");
let eachPersonAmount = document.getElementById("total-amount");
let percent;
let colorChanger;

function updateInfo() {
  let totalAmount = amount.value;
  let numberOfPeople = number_Of_People.value;
  console.log(totalAmount);
  console.log(numberOfPeople);
}

amount.addEventListener("input", () => {
  updateInfo();
});
