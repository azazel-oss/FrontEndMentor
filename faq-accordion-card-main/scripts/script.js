document.querySelectorAll(".question__component").forEach((question) => {
  return question.addEventListener("click", () => {
    question.parentNode
      .querySelectorAll(".question__component")
      .forEach((component) => {
        if (component === question) {
          return;
        }
        if (component.classList.contains("active")) {
          component.classList.toggle("active");
        }
      });
    question.classList.toggle("active");
  });
});
