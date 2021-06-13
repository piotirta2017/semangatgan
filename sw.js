var CACHE_NAME = 'alian-vt-v1';
var urlsToCache = [
  '/',
  '/index.html',  
  './css/style.css',
  './css/quiz.css',
  '/js/index.js',
  '/js/barclick.js',
  '/js/butterfly-collection.js',
  '/js/camera-rig.js',
  '/js/orientation.js',
  '/js/quiz.js',
  '/js/toggleaudio.js',
  '/js/zoom.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        // if (event.request.method === 'GET' && event.request.url.indexOf('https://raw.githubusercontent.com/') !== -1) {
        //   event.respondWith(
        //     caches.open('mysite-dynamic').then(cache => {
        //       return fetch(event.request).then(response => {
        //         cache.put(event.request, response.clone());
        //         return response;
        //       });
        //     })
        //   );
        // }
        // if (event.request.method === 'GET' && event.request.url.indexOf('https://admin.alianbutterflypark.com/api/architectures_entity') !== -1) {
        //   event.respondWith(
        //     caches.open('mysite-dynamic-1').then(cache => {
        //       return fetch(event.request).then(response => {
        //         cache.put(event.request, response.clone());
        //         return response;
        //       });
        //     })
        //   );
        // }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      }).catch(function () {
          // If both fail, show a generic fallback:
          return caches.match('/offline.html');
          // However, in reality you'd have many different
          // fallbacks, depending on URL and headers.
          // Eg, a fallback silhouette image for avatars.
        }),
    );
});

  self.addEventListener('activate', function(event) {

    var cacheAllowlist = CACHE_NAME;
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheAllowlist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });