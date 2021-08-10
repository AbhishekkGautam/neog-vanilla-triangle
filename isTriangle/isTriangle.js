const angleInput = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");

outputEl.innerText = "Result is pending...";

function calculateSumOfAngles(angleOne, angleTwo, angleThree) {
  let sum = angleOne + angleTwo + angleThree;
  return sum;
}

function checkBtnHandler() {
  const sumOfAngles = calculateSumOfAngles(
    Number(angleInput[0].value),
    Number(angleInput[1].value),
    Number(angleInput[2].value)
  );

  if (sumOfAngles === 180) {
    outputEl.innerText = "Yes, these angles can make a triangle";
  } else {
    outputEl.innerText = "No, these angles cannot make a triangle";
  }
}

checkBtn.addEventListener("click", checkBtnHandler);
