document.getElementById("id__share").addEventListener("click", () => {
  console.log("Script is working fine.");
  document
    .getElementsByClassName("share__button")[0]
    .classList.toggle("active");

  document.getElementsByClassName("modal")[0].classList.toggle("active");
});
