/**
 * Event handler for butInstall - Does the PWA installation.
 *
 * @param {Event} evt
 */
function installPWA(evt) {
  // Add code show install prompt & hide the install button.
  deferredInstallPrompt.prompt();
  // Hide the install button, it can't be called twice.
  evt.srcElement.setAttribute("hidden", true);
  // Log user response to prompt.
}

// page 2
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

//page 3
// Add event listener for appinstalled event
window.addEventListener("appinstalled", logAppInstalled);
/**
 * Event handler for appinstalled event.
 * Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
  // Add code to log the event
  console.log("Weather App was installed.", evt);
}
