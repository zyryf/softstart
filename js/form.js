function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  const sendButton = document.querySelector(".fa-paper-plane");



  arrows.forEach((arrow) => {
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextForm = parent.nextElementSibling;

    //when user click "enter", go to next input
    input.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        if (input.type === "text" && validateUser(input, parent)) {
          nextSlide(parent, nextForm);
        } else if (input.type === "email" && validateEmail(input, parent)) {
          nextSlide(parent, nextForm);
        }
      }
    });

    //when user click "arrow", go to next input
    arrow.addEventListener("click", () => {
      if (input.type === "text" && validateUser(input, parent)) {
        nextSlide(parent, nextForm);
      } else if (input.type === "email" && validateEmail(input, parent)) {
        nextSlide(parent, nextForm);
      }
    });
  });

  
  sendButton.addEventListener("click", () => {
    const input = sendButton.previousElementSibling;
    const parent = sendButton.parentElement;
    const nextForm = parent.nextElementSibling;

    if (validateUser(input, parent)) {
      nextSlide(parent, nextForm);
    }
  });
}

function validateUser(user, parent) {
  if (user.value.length < 3) {
    error(parent);
    alert("Nazwa musi byc złożona z co najmniej 3 znaków");
    return false;
  } else {
    return true;
  }
}

function validateEmail(email, parent) {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validation.test(email.value)) {
    return true;
  } else {
    error(parent);
    alert("Nieprawidłowy adres e-mail!");
    return false;
  }
}

function error(parent) {
  parent.style.backgroundColor = "red";

  setTimeout(function () {
    parent.style.backgroundColor = "rgb(90, 252, 90)";
  }, 1500);
}

function nextSlide(parent, nextForm) {
  parent.classList.remove("active");
  parent.classList.add("after-validation");

  nextForm.classList.remove("innactive");
  nextForm.classList.remove("finishField-innactive");
  nextForm.classList.add("active");
}

animatedForm();
