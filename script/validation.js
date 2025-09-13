const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const errorDisplay = document.querySelector(".form--errorMessage");

const validateForm = () => {
  let noError = true;
  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    setError("Le courriel ne doit pas être vide");
    noError = false;
  } else if (!isValidEmail(emailValue)) {
    setError("Le courriel contient des caratères invalides et ne respecte pas la forme sémentique d'une adresse courriel.");
    noError = false;
  } else {
    return noError;
  }
};

const setError = (message) => {
  errorDisplay.innerText = message;
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  if (validateForm()) {
    window.location.href = "confirmation.html";
  }
});
