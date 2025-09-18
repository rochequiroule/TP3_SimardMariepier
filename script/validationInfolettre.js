//

const form = document.querySelector("form");

const errorDisplay = document.querySelector(".form--errorMessage");

const emailInput = document.getElementById("email");

const validateForm = () => {
  let isFormValid = true;

  const emailValue = emailInput.value.trim();

  if (emailValue === "") {
    setError("l'email ne doit pas être vide");
    isFormValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError("L'email est invalide.");
    isFormValid = false;
  }

  return isFormValid;
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

const setError = (message) => {
  errorDisplay.innerText = message;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    window.location.href = "confirmation-form.html";
  }
});
