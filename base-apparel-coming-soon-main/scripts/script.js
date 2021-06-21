let inputEmail = document.getElementsByTagName("input")[0];
let inputDiv = document.getElementsByClassName(
  "card__content__input--textbox"
)[0];
let errorDiv = document.getElementsByClassName("err-text")[0];

inputEmail.addEventListener("keydown", (event) => {
  if (inputDiv.classList.contains("error")) {
    inputDiv.classList.remove("error");
    errorDiv.classList.remove("error");
  }
});

let emailRegPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
let submitButton = document.getElementsByTagName("button")[0];
submitButton.addEventListener("click", () => {
  if (!inputEmail.value.match(emailRegPattern)) {
    inputDiv.classList.add("error");
    errorDiv.classList.add("error");
  } else {
    inputEmail.value = "";
  }
});
