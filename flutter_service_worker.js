'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {
"assets/AssetManifest.bin": "69268cf0b16a4798f45e578fce1717ec",
"assets/AssetManifest.bin.json": "ca971a961e2b0d39f0011ce03278105e",
"assets/AssetManifest.json": "621d04eb28802c3956a89c6752c55ab3",
"assets/FontManifest.json": "6415dad517068eb609406ad8bcb96a54",
"assets/fonts/MaterialIcons-Regular.otf": "9585e0096afa86a6d3bffe7cf7a5e635",
"assets/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf": "5a669c0a71801494df35130ab2f55295",
"assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf": "b87689f37dfb5c51719210e4d96a34a2",
"assets/fonts/NotoSerifAhom/NotoSerifAhom-Regular.ttf": "dd8763a160c6df9e3c6cd1f6a441caac",
"assets/fonts/Oxygen/Oxygen-Regular.ttf": "d5ea9b254845291bc569162d298ac3f6",
"assets/fonts/Staatliches/Staatliches-Regular.ttf": "0b1946eaefaeda766701618dba33e03c",
"assets/images/arrow_down.gif": "09ab57c959d39e007e1a9bfdd12a55a5",
"assets/images/eaterly/cust-side.png": "a24084b284813fdb211f5d15564bef41",
"assets/images/eaterly/logo.png": "33d507813e64e0852f3886f7ef5c147c",
"assets/images/eaterly/seller-side.png": "2586a25dd321ae5606783260e71c17c5",
"assets/images/github.png": "641fb712b46ad60639eda32a05e9b298",
"assets/images/healthish/classifier_scores.png": "e8aafcc6fdbd0c87206814e0419cc5dc",
"assets/images/healthish/dashboard.png": "ef1e6b02726d6283c27fa0a9706003a8",
"assets/images/healthish/data_management.png": "e420e65fa887d7378374087621bde05f",
"assets/images/healthish/logo.png": "b29932940c8cb6a358418c848a8a968c",
"assets/images/healthish/prediction.png": "737fe81ed6f9009da24afc3761ef2684",
"assets/images/insighter/aggregation.png": "d1a6127cc403d3f8b2a9da156abf1f5e",
"assets/images/insighter/auth.png": "cd8491ad4de8f6cef2154f9dd3b60bc5",
"assets/images/insighter/dash.png": "180450fa809cc5752bf55821b5791428",
"assets/images/insighter/history.png": "d9e43dc154324ce02adbbbccecb4c157",
"assets/images/insighter/logo.png": "7f7a0b535784985c6ff9af0356472df3",
"assets/images/insighter/result.png": "3a409165e441eb66335aa38c41594b12",
"assets/images/laundry-tally-ai/logo.png": "1f80ba9e04ca9c5bbc2699f0100acfbd",
"assets/images/laundry-tally-ai/part-1.png": "a93d7f4b445df1cfecbc4e578b43633d",
"assets/images/laundry-tally-ai/part-2.png": "cdae501912572d71724df3bd17c1fd5f",
"assets/images/laundry-tally-ai/part-3.png": "229f8af89f6055a1cd595146f5291517",
"assets/images/linkedin.png": "2c82c51c4ba85380e94631470e092b66",
"assets/images/motion/create.png": "36efbcef9595fdc51ba8fdf8871bb651",
"assets/images/motion/create_page.png": "1b1f5bc44942d23dd8e64f26ba19ac1d",
"assets/images/motion/home_page.png": "e6d682d9ba2901b35e2bbb5c1d13efe9",
"assets/images/motion/login.png": "69fddbe96d6cca300854e1023b2decf4",
"assets/images/motion/logo.png": "0e3ed8ad4b45223f30170c4f2a9a4107",
"assets/images/motion/progress.png": "e93d67d59abe8af75a731a495f3a4c96",
"assets/images/motion/view_all.png": "d89ab4ba4a0e726b8c716e8d5660296e",
"assets/images/profile.png": "5df201eaddd7444837391d24089bd047",
"assets/images/technologies/Android%2520Studio.png": "704bf879089661ff1d654825e7b2ef0a",
"assets/images/technologies/Arduino%2520IDE.png": "f6c37c362e90cf58c3f8b5e0b430de84",
"assets/images/technologies/C++.png": "85e3cf95aa9d25a67cec07586d79197a",
"assets/images/technologies/Claude.png": "b6887effeaa1c82fbd8219c0a0fd6956",
"assets/images/technologies/ExpressJS.png": "323a6d6568d25b17467f4517da4c27e1",
"assets/images/technologies/Firebase.png": "646a8815a6758637c459e526ee4b2017",
"assets/images/technologies/Flask.png": "18b211d525d7adf1669550c778558979",
"assets/images/technologies/Java.png": "df7a9f3d5b31296d12d8b9e486d3ef1d",
"assets/images/technologies/Jetpack%2520Compose.png": "8e81148314d6b5d733e32b9e68fde4bd",
"assets/images/technologies/JS.png": "84bf4ab0cbf4bf51a6eea92df3336553",
"assets/images/technologies/Kotlin.png": "25d7b37e5778ec468a88c640a250f9cd",
"assets/images/technologies/Kubernetes.png": "b7c3d026143cd82a2f441c69d265c5c2",
"assets/images/technologies/Laravel.png": "29b52891f724de66ec792f6c033bbda3",
"assets/images/technologies/MySQL.png": "dbab1988bfbbef79513561df92cdd3f7",
"assets/images/technologies/Netbeans.png": "681bc61473762d606dc34551e7d07f4d",
"assets/images/technologies/Ngrok.png": "b7dfaad83f3e1565c2b4862e87aa0014",
"assets/images/technologies/NodeJS.png": "fc3746a39fedae425ac909ae42e58385",
"assets/images/technologies/PHP.png": "cb445bef2ad3e082b06e5653422ca079",
"assets/images/technologies/PostgreSQL.png": "41d3d6aaf4455dfbc48caf57e22d4224",
"assets/images/technologies/Puppeteer.png": "c50b324c1fde53b7194c0b9a1eb69fee",
"assets/images/technologies/Python.png": "5d8f459e8b85b33fae59911c39608f2f",
"assets/images/technologies/ReactJS.png": "aea865221fb4c013b05fc2fce5f1eca1",
"assets/images/technologies/TensorFlow.png": "c4fd7e57b409ca9d748cd6a81e1c0e32",
"assets/images/technologies/YoloV8.png": "bcd61b1b7ea087db97801a5e5383c414",
"assets/images/trash-ai/logo.png": "58f2b3e24ad408e2e82c7abc5b750956",
"assets/images/trash-ai/trash-ai.png": "05ccd7cbb76329178b0bea773430a6e9",
"assets/images/twitter-clone/auth.png": "4a02d6500eae5818852e41df93bbaa9d",
"assets/images/twitter-clone/home.png": "2495f2738c8d7e7c0facba1131cf9fa2",
"assets/images/twitter-clone/logo.png": "ede09dee3013fc64728d18233c3be6e8",
"assets/images/twitter-clone/register.png": "6842a6f252f6b3fb0179754aee674b27",
"assets/images/vocal-edge/gold.png": "6e36e22249d34eea437ace8c6ebf8615",
"assets/images/vocal-edge/history.png": "baa9a29621fa6edb119882f37f46d31e",
"assets/images/vocal-edge/logo.png": "fb8b4539562f41e331d23ff94ec52fa1",
"assets/images/vocal-edge/time.png": "cddfed47c27902d914fffaf64375a771",
"assets/images/vocal-edge/weather.png": "045347fbeebf290a2f3ef451f0c817e5",
"assets/NOTICES": "cf4f35ab5211575e4c474f1e6fae1bf3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "1233867ae11a4b3e837ee4c8e2445237",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "0a3211b833a0c88483df1657555e1583",
"icons/Icon-512.png": "247a44296f3f6ca005207e77311ca521",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e8b55eb1be161b3e7f9bc8f22c756574",
"/": "e8b55eb1be161b3e7f9bc8f22c756574",
"main.dart.js": "3246394665c74232efce94a717fde545",
"manifest.json": "20ec0696d81e54a9e5d8578a81457c62",
"version.json": "12a92ef79835b40a6093bcc932b54998"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
