if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/TP3_SimardMariepier/service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((err) => console.log("Service Worker registration failed", err));
}

let deferredInstallPrompt = null;
const installButton = document.getElementById("butInstall");
installButton.addEventListener("click", installPWA);

window.addEventListener("beforeinstallprompt", saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
  // CODELAB: Add code to save event & show the install button.
  deferredInstallPrompt = evt;
  installButton.removeAttribute("hidden");
}

window.addEventListener("beforeinstallprompt", (evt) => {
  console.log("beforeinstallprompt fired!", evt);
  deferredInstallPrompt = evt;
  installButton.removeAttribute("hidden");
});

function installPWA(evt) {
  // Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute("hidden", true);
  // Log user response to prompt.
  deferredInstallPrompt.userChoice.then((choice) => {
    if (choice.outcome === "accepted") {
      console.log("User accepted the A2HS prompt", choice);
    } else {
      console.log("User dismissed the A2HS prompt", choice);
    }
    deferredInstallPrompt = null;
  });
}

// Add event listener for appinstalled event
window.addEventListener("appinstalled", logAppInstalled);

function logAppInstalled(evt) {
  // Add code to log the event
  console.log("Weather App was installed.", evt);
}
