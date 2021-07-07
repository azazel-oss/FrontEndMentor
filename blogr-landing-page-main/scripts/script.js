const navLinks = document.querySelectorAll(".dropdown");

navLinks.forEach((link) => {
  return link.addEventListener("click", () => {
    link.parentNode.querySelectorAll(".dropdown").forEach((component) => {
      if (component === link) {
        return;
      }
      if (component.classList.contains("dropdown__clicked")) {
        component.classList.remove("dropdown__clicked");
      }
    });
    link.classList.toggle("dropdown__clicked");
  });
});
