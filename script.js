"use strict";

let set;
let count = 60;
let minCount = 24;

function getZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

const timeWrapper = document.querySelector(".time-wrapper"),
  pomodoroBtn = document.querySelector(".pomodoro"),
  shortBreakBtn = document.querySelector(".short-break"),
  longBreakBtn = document.querySelector(".long-break"),
  toggleBtn = document.querySelector(".toggle-btn"),
  body = document.body,
  timeSpan = document.querySelector(".time-span");

function defaultTheme() {
  body.style.backgroundColor = "#BA4949";
  timeWrapper.style.backgroundColor = "#C15C5C";
  toggleBtn.style.color = "#BA4949";
  pomodoroBtn.style.backgroundColor = "#A44E4E";
  minCount = 24;
  count = 60;
  timeSpan.textContent = `${minCount + 1}:00`;
}

defaultTheme();

pomodoroBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#BA4949";
  timeWrapper.style.backgroundColor = "#C15C5C";
  toggleBtn.style.color = "#BA4949";
  pomodoroBtn.style.backgroundColor = "#A44E4E";
  shortBreakBtn.style.backgroundColor = "";
  longBreakBtn.style.backgroundColor = "";
  minCount = 24;
  count = 60;
  timeSpan.textContent = `${getZero(minCount + 1)}:00`;
  toggleBtn.textContent = "START"; // Fixed typo: === -> =
  clearInterval(set);
});

shortBreakBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#38858A";
  timeWrapper.style.backgroundColor = "#4C9196";
  toggleBtn.style.color = "#38858A";
  pomodoroBtn.style.backgroundColor = "";
  shortBreakBtn.style.backgroundColor = "#417B80";
  longBreakBtn.style.backgroundColor = "";
  minCount = 4;
  count = 60;
  timeSpan.textContent = `${getZero(minCount + 1)}:00`;
  toggleBtn.textContent = "START"; // Fixed typo: === -> =
  clearInterval(set);
});

longBreakBtn.addEventListener("click", () => {
  body.style.backgroundColor = "#397097";
  timeWrapper.style.backgroundColor = "#4D7FA2";
  toggleBtn.style.color = "#397097";
  pomodoroBtn.style.backgroundColor = "";
  shortBreakBtn.style.backgroundColor = "";
  longBreakBtn.style.backgroundColor = "#426C8A";
  minCount = 14;
  count = 60;
  timeSpan.textContent = `${getZero(minCount + 1)}:00`;
  toggleBtn.textContent = "START"; // Fixed typo: === -> =
  clearInterval(set);
});

toggleBtn.addEventListener("click", () => {
  if (toggleBtn.textContent === "START") {
    toggleBtn.textContent = "STOP"; // Fixed typo: === -> =
    set = setInterval(() => {
      count--;
      timeSpan.textContent = `${getZero(minCount)}:${getZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
          toggleBtn.textContent = "START"; // Fixed typo: === -> =
        }
      }
    }, 1000);
  } else if (toggleBtn.textContent === "STOP") {
    toggleBtn.textContent = "START"; // Fixed typo: === -> =
    clearInterval(set);
  }
});
