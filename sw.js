const VERSION = 'v1';

// Se crea evento para que se llamar cuando el navegador instale
// el 'Service Worker'
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

// Se crea evento que se llama cuando se hace una petición
// vamos al cache para ver si encontramos la respuesta
self.addEventListener('fetch', event => {
  const request = event.request;
  // Trabajamos con los 'get', ya que cualquier otra petición trae datos
  // que no se quieren cachear. Esto pasa en 'request'
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache, con una respuesta cacheada
  event.respondWith(cachedResponse(request));

  // actualizar el cache, para actualizar los archivos y que el usuario no se quede
  // con una copia vieja de los archivos.
  event.waitUntil(updateCache(request));
});

// Se crea el 'precache', al cual le damos una lista de
// recurso que quiero que se mantengan en cache.
async function precache() {
  const cache = await caches.open(VERSION); // Regresa una promesa
  // Lista de recursos (assets)
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.ts',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request) { // Declaramos la función async, yauqe esperamos una promesa
  const cache = await caches.open(VERSION);// Abrimos el cache
  const response = await cache.match(request);// Verificamos si tenemos la respuesta
  // En la respuesta, si no existe en cache, 'request' es 'undefined'. En caso de que
  // sea 'undefined' debemos hacer la consulta a la red 'fetch(request)' y contestamos
  // con lo que venga de internet
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);// Abrimos el cache
  const response = await fetch(request);// Buscamos las copias actulizadas en internet
  return cache.put(request, response); // Añadimos las nuevas copias en cache
}
