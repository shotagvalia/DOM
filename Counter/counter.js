let increaseButton = document.getElementById("increase-button");
let mainNumber = document.getElementById("main-number");
let decriesButton = document.getElementById("decries-button");

increaseButton.addEventListener("click", () => {
  mainNumber.textContent = +mainNumber.textContent + 1;
});

decriesButton.addEventListener("click", () => {
  if (mainNumber.textContent > 0) {
    mainNumber.textContent = +mainNumber.textContent - 1;
  }
});
