const input = document.querySelector("input");
const error = document.querySelector(".error");
const form = document.querySelector("form");
const container = document.querySelector(".container");
const email = document.querySelector(".email");
const afterSubmit = document.querySelector(".after-submit");
const dismissBtn = afterSubmit.querySelector("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length == "") return;
  email.textContent = input.value;
  container.classList.toggle("hidden");
  afterSubmit.classList.toggle("hidden");
  input.value = "";
});

input.addEventListener("input", () => {
  if (input.validity.patternMismatch && input.value.length >= 3) {
    error.style.display = "unset";
  } else {
    error.style.display = "none";
  }
});

dismissBtn.addEventListener("click", () => {
  container.classList.toggle("hidden");
  afterSubmit.classList.toggle("hidden");
});
