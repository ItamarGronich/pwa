
const cacheName = 'v1';

self.addEventListener('install', (event) => {
  // // Perform install steps
  // event.waitUntil(
  //   caches.open(cacheName)
  //     .then((cache) => {
  //       console.log('Opened cache');
  //       return cache.addAll(cacheAssets);
  //     })
  //     .then(() => self.skipWaiting())
  // );
});

self.addEventListener('activate', (event) => {
  // Remove unwanted caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then(res => {
        const resClone = res.clone();
        //Open cache
        caches.open(cacheName)
          .then(cache => {
            //Add response to cache
            cache.put(event.request, resClone);
          })
        return res;
      })
      .catch((err => caches.match(event.request))
        .then(res => res))
  );
});
