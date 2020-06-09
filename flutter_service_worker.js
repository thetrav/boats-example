'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cb477c3f3e8c9e5094f1695ab4b738ef",
"assets/assets/images/aground.png": "923f1ad7025fd9e71e9e3b4b41fa284a",
"assets/assets/images/anchored.png": "19ecc2098dad873b8c0bc37c8b5ed254",
"assets/assets/images/boarders%2520ready.png": "1388fe3293d81d2434e3eed1bd3a3aab",
"assets/assets/images/Class%25201%2520FS.png": "2e7b767abd82547ff31c7f57168d6cfb",
"assets/assets/images/Class%25201%2520MS.png": "5069b2009bc92d4c7029e014a8cd214e",
"assets/assets/images/Class%25202%2520FS.png": "670a54db2ac507d2404ccc5b4b66eb84",
"assets/assets/images/Class%25202%2520MS.png": "410175540e67a6eaeab339a58f773739",
"assets/assets/images/Class%25203%2520FS.png": "4532d5b9ee6875c148264180a0e2c579",
"assets/assets/images/Class%25203%2520MS.png": "bf6650ce1d302941d48537f1883012c1",
"assets/assets/images/Class%25204%2520FS.png": "673b03b181eb971e09c87c94d783ce5f",
"assets/assets/images/Class%25204%2520MS.png": "7f7ab65933bbdd59b2b46e832eebc7f6",
"assets/assets/images/Dismasted.png": "cf62ca781a13a3bd2545bcf6d1fce48d",
"assets/assets/images/drift.png": "695c301620915d0d11d04ce154ee2e0c",
"assets/assets/images/fouled.png": "aadf74426c2f2f6594f21127d3b69e3c",
"assets/assets/images/Furled.png": "e2b99840ba060a0448b84f50a29f71d7",
"assets/assets/images/grappled.png": "b0adeb382a5555467b0a09b0713260c7",
"assets/assets/images/gunboat.png": "02123839b51661776a0e6f9803e05a92",
"assets/assets/images/inirons.png": "b095669fae1135db56a80ad977263592",
"assets/assets/images/meninrigging.png": "4487288853ea284c24c3a35c51898d42",
"assets/assets/images/onfire.png": "0530071ec1fafd56bd5b0314bd354d85",
"assets/assets/images/Plain%2520Sail.png": "787bb81219d9df4c1c2eaeefe2fabb5b",
"assets/assets/images/plainsail.png": "bca2cd45cbfef77b9d4ecf43ee51dc22",
"assets/assets/images/rudderdestroyed.png": "c1e6fd1ca5f18df785de245d6752a659",
"assets/assets/images/shipboats.png": "00c52a905edb611001dedfa9d65c323d",
"assets/assets/images/shorebattery.png": "5644846b4e1641ab68c6f84eb071136d",
"assets/assets/images/towing.png": "731f7a9416f2e5da53eefd626b40a53f",
"assets/assets/images/wheelshotaway.png": "6348fcfabaccb8820780d2176f6f5c73",
"assets/assets/tables/movement_determination.csv": "a5bdb9f1a5c5d0981e232df425813e60",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "3034ddf27fef3bfc05bf0d1010122e0c",
"index.html": "9464571ed319b35d55d3552df0a2a59e",
"/": "9464571ed319b35d55d3552df0a2a59e",
"main.dart.js": "1669c75a0552a1662af1b454611a36fd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
