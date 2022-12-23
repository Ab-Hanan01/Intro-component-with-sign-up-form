const elInput = document.querySelectorAll("input");
const elBtn = document.querySelector("button");
elBtn.addEventListener("click", (e) => {
  e.preventDefault();
  elInput.forEach((input) => {
    if (input.value === "") {
      input.parentElement.classList.add("error");
      if (input !== elInput[2]) {
        input.setAttribute("placeholder", "");
      }
    } else input.parentElement.classList.remove("error");
  });
  if (elInput[2].value === "") {
    elInput[2].setAttribute("placeholder", "email@example/com");
  }
});
