// public/service-worker.js

// You can import external libraries here if needed using importScripts
// Example: importScripts('/someExternalLibrary.js');

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  // Perform install steps (e.g., caching assets)
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        '/', // Cache homepage
        '/index.html', // Cache HTML files
        '/styles.css', // Cache stylesheets
        '/app.js', // Cache JavaScript
        // Add more assets you want to cache during installation
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated...');
  // Perform cleanup tasks if needed (like removing old caches)
});

self.addEventListener('fetch', (event) => {
  // Intercept network requests and serve cached files when offline
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return cached response if available
      }
      return fetch(event.request); // Otherwise, fetch from the network
    })
  );
});
