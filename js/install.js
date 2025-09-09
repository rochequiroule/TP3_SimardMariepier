let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");

// 1️⃣ Événement avant installation
window.addEventListener("beforeinstallprompt", (evt) => {
  console.log("beforeinstallprompt fired!", evt);
  deferredInstallPrompt = evt;
  installButton.removeAttribute("hidden"); // montre le bouton
});

// 2️⃣ Clic sur le bouton
installButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;

  // Affiche la popup d'installation
  deferredInstallPrompt.prompt();

  // Log la réponse de l'utilisateur
  const choice = await deferredInstallPrompt.userChoice;
  console.log(choice.outcome === "accepted" ? "User accepted" : "User dismissed", choice);

  // Cache le bouton et réinitialise
  installButton.setAttribute("hidden", true);
  deferredInstallPrompt = null;
});

// 3️⃣ Événement PWA installée
window.addEventListener("appinstalled", (evt) => {
  console.log("PWA installed!", evt);
});
