const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const form = document.querySelector("#form");
const outputEl = document.querySelector("#output");

outputEl.innerText = "Result is pending...";

function calculateArea(base, height) {
  let area = (0.5 * base * height).toFixed(2);
  return area;
}

function submitHandler(e) {
  e.preventDefault();
  let base = Number(baseInput.value);
  let height = Number(heightInput.value);
  let result = calculateArea(base, height);
  outputEl.innerText = `Area of this triangle with base ${base} units and height ${height} units is ${result} sq units.`;
}

form.addEventListener("submit", submitHandler);
