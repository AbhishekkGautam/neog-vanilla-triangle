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
  let result = calculateHypotenuse(base, height);
  console.log(result);
  outputEl.innerText = `Hypotenuse of this triangle with base ${base} units and height ${height} units is ${result} units.`;
}

form.addEventListener("submit", submitHandler);
