const CACHE_NAME = 'toan1-static-v7-0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './favicon.svg',
  './assets/js/app.js'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS).catch(() => {}))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Không cache API động / Google TTS / Apps Script.
  if (
    url.hostname.includes('script.google.com') ||
    url.hostname.includes('script.googleusercontent.com') ||
    url.hostname.includes('translate.google.com')
  ) {
    event.respondWith(fetch(req));
    return;
  }

  // HTML/JS/JSON: network-first để cập nhật code và dữ liệu nhanh.
  if (
    req.mode === 'navigate' ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.json')
  ) {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Tài nguyên tĩnh còn lại: cache-first.
  event.respondWith(caches.match(req).then(cached => cached || fetch(req)));
});
