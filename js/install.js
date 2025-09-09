let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");

// Log pour vérifier que le bouton est bien trouvé
if (installButton) {
  console.log("Install button trouvé !");
  installButton.addEventListener("click", installPWA);
} else {
  console.warn("Bouton d'installation introuvable !");
}

// Event pour détecter le moment où la PWA peut être installée
window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  console.log("beforeinstallprompt event fired !", evt);
  // Empêche le prompt automatique
  evt.preventDefault();
  deferredInstallPrompt = evt;

  // Affiche le bouton d'installation
  if (installButton) {
    installButton.removeAttribute("hidden");
    console.log("Bouton d'installation affiché !");
  }
}

function installPWA(evt) {
  console.log("installPWA triggered", evt);

  if (!deferredInstallPrompt) {
    console.warn("Aucun deferredInstallPrompt disponible.");
    return;
  }

  // Affiche la boîte de dialogue d'installation
  deferredInstallPrompt.prompt();

  // Masque le bouton pour ne pas pouvoir cliquer deux fois
  if (evt.srcElement) {
    evt.srcElement.setAttribute("hidden", true);
  }

  // Log de la réponse de l'utilisateur
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("Utilisateur a accepté le prompt A2HS", choice);
    } else {
      console.log("Utilisateur a refusé le prompt A2HS", choice);
    }
    deferredInstallPrompt = null;
  });
}

// Event pour détecter que la PWA a été installée
window.addEventListener("appinstalled", logAppInstalled);

function logAppInstalled(evt) {
  console.log("appinstalled event fired !", evt);
}
