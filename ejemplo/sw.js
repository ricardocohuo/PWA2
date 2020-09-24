self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('fox-store').then(function(cache) {
     return cache.addAll([
       '/pwa-ejemplo/ejemplo/',
       '/pwa-ejemplo/index.html',
       '/pwa-ejemplo/index.js',
       '/pwa-ejemplo/style.css',
       '/pwa-ejemplo/images/fox1.jpg',
       '/pwa-ejemplo/ejemplo/images/fox2.jpg',
       '/pwa-ejemplo/images/fox3.jpg',
       '/pwa-ejemplo/ejemplo/images/fox4.jpg'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
