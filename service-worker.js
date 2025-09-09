// Nom du cache — change ce nom si tu veux forcer une mise à jour
const CACHE_NAME = "static-cache-v6";

// Fichiers à mettre en cache au moment de l’installation
const FILES_TO_CACHE = ["/TP3_SimardMariepier/offline.html", "/TP3_SimardMariepier/index.html", "/TP3_SimardMariepier/style/css/style.css"];

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
        return cache.match("/rochequiroule/TP3_SimardMariepier/offline.html");
      });
    })
  );
});
