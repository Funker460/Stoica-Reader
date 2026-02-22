/* Stoica Reader — Service Worker */
const V = 'stoica-free-1';
const CORE = ['./index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V).then(c =>
      Promise.allSettled(CORE.map(url => c.add(url).catch(() => {})))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== V).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Never cache API calls or translation requests
  if (url.includes('mymemory.translated.net') ||
      url.includes('api.anthropic.com') ||
      url.includes('/.netlify/')) {
    e.respondWith(fetch(e.request).catch(() => new Response('Offline', {status: 503})));
    return;
  }

  // CDN resources: network first, cache fallback
  if (!url.startsWith(self.location.origin)) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(V).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // Local files: cache first, network fallback
  e.respondWith(
    caches.open(V).then(c =>
      c.match(e.request).then(cached => {
        const fresh = fetch(e.request).then(res => {
          if (res.ok) c.put(e.request, res.clone());
          return res;
        });
        return cached || fresh;
      })
    )
  );
});
