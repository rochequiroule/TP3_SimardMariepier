const form = document.querySelector("form");

const errorDisplay = document.querySelector(".form--errorMessage");
const prenomInput = document.getElementById("prenom");
const nomInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");
const messageInput = document.getElementById("message");
const checkbox = document.getElementById("conditions");

const validateForm = () => {
  let isFormValid = true;

  const prenomValue = prenomInput.value.trim();
  const nomValue = nomInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneNumberValue = phoneNumberInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (emailValue === "") {
    setError("Ll'email ne doit pas être vide");
    isFormValid = false;
  } else if (!isValidEmail(emailValue)) {
    setError("L'email est invalide.");
    isFormValid = false;
  }

  if (prenomValue === "") {
    setError("Prénom requis");
    isFormValid = false;
  } else if (!isValidName(prenomValue)) {
    setError("Votre prénom ne peut contenir de chiffre, sauf si votre père est Elon Musk");
    isFormValid = false;
  }

  if (nomValue === "") {
    setError("Nom requis");
    isFormValid = false;
  } else if (!isValidName(nomValue)) {
    setError("Votre prénom ne peut contenir de chiffre, sauf si votre père est Elon Musk");
    isFormValid = false;
  }

  if (phoneNumberValue === "") {
    setError("Téléphone requis");
    isFormValid = false;
  } else if (!isPhoneValid(phoneNumberValue)) {
    setError("Téléphone non valide, format attendu: 555-555-5555");
    isFormValid = false;
  }

  if (messageValue === "") {
    setError("Message requis");
    isFormValid = false;
  }

  if (!checkbox.checked) {
    setError("Vous devez accepter les conditions");
    isFormValid = false;
  }

  return isFormValid;
};

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
};

function isPhoneValid(phone) {
  return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(phone);
}

function isValidName(value) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
  return nameRegex.test(value.trim());
}

const setError = (message) => {
  errorDisplay.innerText = message;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateForm()) {
    window.location.href = "confirmation-form.html";
  }
});

checkbox.addEventListener("change", (event) => {
  if (event.target.checked) {
    console.log("Checkbox state changed to checked!");
  } else {
    console.log("Checkbox state changed to unchecked!");
  }
});
