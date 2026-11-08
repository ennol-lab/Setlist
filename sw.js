// Offline-Cache für die App-Dateien. Bei Änderungen an der App VERSION erhöhen.
const VERSION = 'setlist-v3';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './lib/pdf.min.js',
  './lib/pdf.worker.min.js',
  './lib/Sortable.min.js',
  './lib/jszip.min.js',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      // Große Dateien (Texterkennung) beim ersten Laden für offline merken
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy));
      }
      return res;
    }))
  );
});
