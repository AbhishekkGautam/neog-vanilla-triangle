const quizForm = document.querySelector("#quiz-form");
const outputEl = document.querySelector("#output");
const quesContainer = document.querySelectorAll(".question-container");

const correctAnswers = [
  "90°",
  "right angled",
  "yes",
  "yes",
  "yes",
  "isosceles",
  "30°",
  "both",
  "5cm",
  "scalene",
];

outputEl.innerText = `Score is pending...`;

function calculateScore() {
  let score = 0;
  let index = 0;
  let formData = new FormData(quizForm);
  for (let value of formData.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
      quesContainer[index].style.backgroundColor = "#ECFCCB";
    } else {
      quesContainer[index].style.backgroundColor = "#FEE2E2";
    }
    index = index + 1;
  }
  outputEl.innerText = `Your score is ${score}.`;
}

function submitBtnHandler(e) {
  e.preventDefault();
  calculateScore();
}

quizForm.addEventListener("submit", submitBtnHandler);
