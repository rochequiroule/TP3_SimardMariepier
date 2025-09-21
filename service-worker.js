// Nom du cache — change ce nom si tu veux forcer une mise à jour
const CACHE_NAME = "static-cache-v16";

// Fichiers à mettre en cache au moment de l’installation
const FILES_TO_CACHE = [
  "/TP3_SimardMariepier/offline.html",
  "/TP3_SimardMariepier/index.html",
  "/TP3_SimardMariepier/style/css/style.css",
  "/TP3_SimardMariepier/contact.html",
  "/TP3_SimardMariepier/confirmation-form.html",
  "/TP3_SimardMariepier/confirmation-infolettre.html",
  "/TP3_SimardMariepier/realisation.html",
  "/TP3_SimardMariepier/script/animation.js",
  "/TP3_SimardMariepier/script/script.js",
  "/TP3_SimardMariepier/script/validationForm.js",
  "/TP3_SimardMariepier/script/validationInfolettre.js",
  "/TP3_SimardMariepier/image/1400x780-chaise-mur.jpg",
  "/TP3_SimardMariepier/image/image-250x200-banc.jpg",
  "/TP3_SimardMariepier/image/image-250x200-plancheadecouper.jpg",
  "/TP3_SimardMariepier/image/image-500x200-bois.jpg",
  "/TP3_SimardMariepier/image/realisation_01-c.jpg",
  "/TP3_SimardMariepier/image/realisation_01-v.jpg",
  "/TP3_SimardMariepier/image/realisation_01.jpg",
  "/TP3_SimardMariepier/image/realisation_02-c.jpg",
  "/TP3_SimardMariepier/image/realisation_02-v.jpg",
  "/TP3_SimardMariepier/image/realisation_02.jpg",
  "/TP3_SimardMariepier/image/realisation_03-c.jpg",
  "/TP3_SimardMariepier/image/realisation_03-v.jpg",
  "/TP3_SimardMariepier/image/realisation_03.jpg",
  "/TP3_SimardMariepier/image/realisation_04-c.jpg",
  "/TP3_SimardMariepier/image/realisation_04-v.jpg",
  "/TP3_SimardMariepier/image/realisation_04.jpg",
  "/TP3_SimardMariepier/image/realisation_05-c.jpg",
  "/TP3_SimardMariepier/image/realisation_05-v.jpg",
  "/TP3_SimardMariepier/image/realisation_05.jpg",
  "/TP3_SimardMariepier/image/realisation_06-v.jpg",
  "/TP3_SimardMariepier/image/realisation_06.jpg",
  "/TP3_SimardMariepier/image/ReBois_logo.svg",
  "/TP3_SimardMariepier/video/4480575-hd_1920_1080_30fps.mp4",
];

// INSTALL
self.addEventListener("install", (evt) => {
  console.log("[ServiceWorker] Install");
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline page");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (evt) => {
  console.log("[ServiceWorker] Activate");
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", async (evt) => {
  console.log("[ServiceWorker] Fetch", evt.request.url);

  if (evt.request.mode !== "navigate") {
    return; // on ignore tout sauf les navigations
  }

  evt.respondWith(
    fetch(evt.request).catch(async () => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match("/TP3_SimardMariepier/offline.html");
      });
    })
  );
});
