let decrementButton = document.querySelector("#decrement");
let IncrementButton = document.querySelector("#increment");
let clearButton = document.querySelector("#clear");
let displayArea = document.querySelector("#display");
let buttonsArea = document.querySelector("#buttons");
let count = 0;
let errorDisplayed = false;
if (count == 0) {
  clearButton.style.display = "none";
}
IncrementButton.addEventListener("click", incByOne);
decrementButton.addEventListener("click", decByOne);
clearButton.addEventListener("click", clearCount);
function incByOne() {
  count++;
  if (count == 1 && errorDisplayed) {
    let errorMessage = document.querySelector(".error");
    errorDisplayed = false;
    errorMessage.style.display = "none";
  }
  displayArea.innerHTML = `Your Current Count is : ${count}`;
  clearButton.style.display = "inline";
}
function decByOne() {
  if (!errorDisplayed) {
    if (count == 1) clearButton.style.display = "none";
    if (count == 0) {
      errorDisplayed = true;
      let errorMessage = document.createElement("div");
      errorMessage.innerText = `Error : Cannot go below 0`;
      errorMessage.className = "error";

      buttonsArea.prepend(errorMessage);
    } else {
      count--;
      displayArea.innerHTML = `Your Current Count is : ${count}`;
      console.log(count);
    }
  }
}
function clearCount() {
  count = 0;
  displayArea.innerText = `Your Current Count is : 0`;
  clearButton.style.display = "none";
}
