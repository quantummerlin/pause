/**
 * Gravity Pause - Service Worker
 * Enables offline functionality and PWA features
 * 
 * Chase Hughes principle: "Return visits without reminders"
 * The page should work even without internet connection.
 */

const CACHE_NAME = 'gravity-pause-v2';
const OFFLINE_URL = '/';

// Files to cache for offline use
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/personal.js',
  '/about.html',
  '/daily-reset.html',
  '/before-sleep.html',
  '/start-of-day.html',
  '/collective-breath.html',
  '/gravity-pause-2026.html'
];

/**
 * Install event - cache essential files
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
      .then(() => {
        // Activate immediately
        return self.skipWaiting();
      })
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
      .then(() => {
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

/**
 * Fetch event - serve from cache, fallback to network
 * Fixed for Safari: Avoid returning redirected responses
 */
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // For navigation requests (HTML pages), use network-first strategy
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Don't cache redirects (Safari fix)
          if (response.redirected) {
            return response;
          }
          // Cache successful responses
          if (response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(event.request)
            .then((cached) => cached || caches.match(OFFLINE_URL));
        })
    );
    return;
  }

  // For other requests (CSS, JS, images), use cache-first strategy
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful or redirected responses
            if (!response || response.status !== 200 || response.redirected) {
              return response;
            }

            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});

/**
 * Background sync for future features
 * (Currently unused, but ready for expansion)
 */
self.addEventListener('sync', (event) => {
  if (event.tag === 'gravity-pause-sync') {
    console.log('[ServiceWorker] Background sync triggered');
  }
});