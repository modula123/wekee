// src/serviceWorkerRegistration.js

// Check if service workers are supported by the browser
export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Register the service worker with 'module' type
        navigator.serviceWorker
          .register('/service-worker.js', { type: 'module' }) // Specify 'module' type for ES modules
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          registrations.forEach((registration) => {
            registration.unregister();
          });
        })
        .catch((error) => {
          console.error('Error unregistering service worker:', error);
        });
    }
  }
  