let firstNameInput = document.getElementById("First");
let lastNameInput = document.getElementById("Last");
let emailInput = document.getElementById("Email");
let passwordInput = document.getElementById("Password");

let firstNameError = document.getElementById("FirstError");
let lastNameError = document.getElementById("LastError");
let emailError = document.getElementById("EmailError");
let passwordError = document.getElementById("PasswordError");

let claimButton = document.getElementById("Claim");

let pattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

claimButton.addEventListener("click", () => {
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("error");
    firstNameError.classList.add("error");
  }
  if (lastNameInput.value === "") {
    lastNameInput.classList.add("error");
    lastNameError.classList.add("error");
  }
  if (passwordInput.value === "") {
    passwordInput.classList.add("error");
    passwordError.classList.add("error");
  }
  if (!emailInput.value.match(pattern)) {
    emailInput.classList.add("error");
    emailError.classList.add("error");
  }
});

firstNameInput.addEventListener("keydown", (event) => {
  if (firstNameInput.classList.contains("error")) {
    firstNameError.classList.remove("error");
    firstNameInput.classList.remove("error");
  }
});

lastNameInput.addEventListener("keydown", (event) => {
  if (lastNameInput.classList.contains("error")) {
    lastNameError.classList.remove("error");
    lastNameInput.classList.remove("error");
  }
});
emailInput.addEventListener("keydown", (event) => {
  if (emailInput.classList.contains("error")) {
    emailError.classList.remove("error");
    emailInput.classList.remove("error");
  }
});
passwordInput.addEventListener("keydown", (event) => {
  if (passwordInput.classList.contains("error")) {
    passwordError.classList.remove("error");
    passwordInput.classList.remove("error");
  }
});
