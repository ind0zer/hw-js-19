const btn = document.querySelector('[data-action="open-modal"]');
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const btnClose = document.querySelector('[data-action="close-modal"]');

btn.addEventListener("click", () => {
  document.body.classList.add("show-modal");
});

backdrop.addEventListener("click", () => {
  document.body.classList.remove("show-modal");
});

btnClose.addEventListener("click", () => {
  document.body.classList.remove("show-modal");
});

const radioRed = document.getElementById("red");
const radioWhite = document.getElementById("white");
const radioGreen = document.getElementById("green");
const body = document.body;

radioRed.addEventListener("change", () => {
  body.style.backgroundColor = "red";
});

radioWhite.addEventListener("change", () => {
  body.style.backgroundColor = "white";
});

radioGreen.addEventListener("change", () => {
  body.style.backgroundColor = "green";
});


const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent =
    nameInput.value === "" ? "незнайомець" : nameInput.value;
});

const inputEl = document.getElementById("validation-input");

inputEl.addEventListener("blur", () => {
  const requiredLength = parseInt(inputEl.getAttribute("data-length"), 10);
  const inputLength = inputEl.value.length;

  if (inputLength === requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});

const inputEl1 = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

inputEl1.addEventListener("input", () => {
  textEl.style.fontSize = `${inputEl1.value}px`;
});
