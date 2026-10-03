// Service worker: guarda la app para usarla sin conexión.
// Al cambiar archivos de la app, subir el número de VERSION.
const VERSION = 'pdv-v7';
const APP = ['./', 'index.html', 'aerodromos.js', 'datos_iniciales.js', 'manifest.webmanifest', 'icono-192.png', 'icono-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'];
const MAPAS = 'pdv-mapas';
const MAX_MAPAS = 1500;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(APP)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k !== VERSION && k !== MAPAS).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // Teselas del mapa: usar las guardadas y guardar las nuevas que se vean.
  if (url.hostname.endsWith('tile.openstreetmap.org')) {
    e.respondWith(caches.open(MAPAS).then(async (c) => {
      const guardada = await c.match(e.request);
      if (guardada) return guardada;
      const r = await fetch(e.request);
      if (r.ok || r.type === 'opaque') {
        c.put(e.request, r.clone());
        c.keys().then((ks) => { if (ks.length > MAX_MAPAS) ks.slice(0, ks.length - MAX_MAPAS).forEach((k) => c.delete(k)); });
      }
      return r;
    }));
    return;
  }
  // App: primero la red (para tener siempre la última versión), si no hay conexión, lo guardado.
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok && (url.origin === location.origin || url.hostname === 'cdnjs.cloudflare.com')) {
      const copia = r.clone();
      caches.open(VERSION).then((c) => c.put(e.request, copia));
    }
    return r;
  }).catch(() => caches.match(e.request, { ignoreSearch: true })));
});
