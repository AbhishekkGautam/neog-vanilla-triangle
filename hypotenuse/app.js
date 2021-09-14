const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const form = document.querySelector("#form");
const outputEl = document.querySelector("#output");

outputEl.innerText = "Result is pending...";

function calculateHypotenuse(base, height) {
  let hypotenuse = Math.sqrt(base * base + height * height).toFixed(2);
  return hypotenuse;
}

function submitHandler(e) {
  e.preventDefault();
  let base = Number(baseInput.value);
  let height = Number(heightInput.value);
  if (base > 0 && height > 0) {
    let result = calculateHypotenuse(base, height);
    outputEl.innerText = `Hypotenuse of this triangle with base ${base} units and height ${height} units is ${result} units.`;
  } else {
    outputEl.innerText = `Values must be greater than 0.`;
  }
}

form.addEventListener("submit", submitHandler);
