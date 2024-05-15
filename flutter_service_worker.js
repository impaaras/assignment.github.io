'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1074f3d7efda7e78ac66e34a81a65a4d",
"version.json": "a1561810196a3ca0cdedf32d733b6779",
"index.html": "0874e533db8a793848d7e932a34dd936",
"/": "0874e533db8a793848d7e932a34dd936",
"main.dart.js": "ec3209f24e21d5607fa7068b77582bf2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bad795dae95711f557002f317f2fcf2f",
".git/config": "06ed272cd903101a06bcabef74c0beb7",
".git/objects/61/2e0c8afb905d5c17575acdbed46c299915b2ef": "b538150a77a3e0fa9baa466a0e50f272",
".git/objects/92/122f38c75693e201601aa183ecaa286420d985": "76e6d08d1c6a3bf93f5419c20c3955cf",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/fff8c27552d6b125153bbd086e10828230bfd2": "379c60162a964ecc90d9a310ecbdc6ea",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/51/3ec76a09a791016c168ec83146659e26b9b4ca": "e9643adf65a6209d2658d2054b1807e2",
".git/objects/51/0fd2ffb0c72535d68fd39ee4a9525b1bdc458f": "b6613d43c8d90d752599a8a9ce8a4224",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/60/36ff91c6a8418ec1b7bb0f7294195c5f1dbb06": "a8cb667a22b778bf30861265516078fc",
".git/objects/b5/3c262b30b1f6daae39b865a28f8dc742b49d4b": "521cd3a44a40a26128deeac420d10dd2",
".git/objects/d9/3694898a46513eaa4da684e7d486865ad192bd": "f7b5d3e032a135e8ae17988041fa32f5",
".git/objects/bb/4cfc10e2047a79e82ba721aa84bdb0f5b00ad5": "2457dbe701e95dcfa644411cca5d330d",
".git/objects/a5/690629aeaae73f54240fc8967bb2223d66af1f": "75d19654084a9704ff0eac571e8814d3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/614c7d1b7b397491949c8126fe52e203c8337a": "4f821d9585cc08c270d3bd286e20b5a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/cf/f0b3a4d9c8c0be8deb21161ebf0946bd6e65d9": "6bf674b4032fc7cb5c5ef6cb861e5527",
".git/objects/20/5f550631436f098e3583bb6c78173e5435af08": "fd8d06f8b9bc8978ece1be83b1a7cc20",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/e1ea7724cef76d4b90c6c4de13e61ded656a1e": "b615962573328a16c734ce4a9763b81d",
".git/objects/2f/1643914201c7e405390076443d9dabfaa32bf7": "a4c121ba7172b9ea26ff22ae0fb42287",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/7b0700d1eb80bca013d04552f3c11611f45013": "30e3d220163b541e94f99b4880dfde1d",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/5ae5b2a7f4454db789598c1e7eb1a99f117367": "098412bc90eeba1375eca2e256c50d19",
".git/objects/53/069d3c16a5c2782d775daba90ea4be68f504b3": "ef155537b8b0e91d50af90a5891dfa8e",
".git/objects/08/ba4b72ea8dd5778fe075bcfbc8385c18e382c9": "dc6499d065ed2f410b8dce609fd310d8",
".git/objects/52/599f04be9742e1f92505122c315e436cc6e7c5": "3336bfb47dc26197e59a3a4ffddfbf78",
".git/objects/97/c913df899a20d9dcc2020dad1a293faf5843bc": "0eaf43b6fda20a5c3a22891fdf4c704a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/791520fe728ba03a1516cbb07b8321219e3a2d": "fee461541653b8f87bdfea46f5560b3c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a9/c27ee4836148d35351bd9190203a037df19ecd": "ca531a17a9f20e6707c4276061e4ab82",
".git/objects/b7/6f8171201d866ce291f24822d413cd4be04b53": "114b30f068435243309fbbf4ffc48216",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/04989e010d7fc76025622fffbd1ebdff3935b7": "bda587d8a4b06fc960ec010ea06b2b17",
".git/objects/f9/ed73a23fd7f39b4db53dae58fb578a2736cac4": "40fad17884f682f899c54bbe6c5c9587",
".git/objects/46/5d733db57ffde6ba7d6188a16cd8e1657f1e40": "ef3a9110e3eb9ddca666557974275c28",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/e41d2fd3303fb3f3439ed2eab6c1779816e449": "6c703e87b121f1a67a8dd2594a58989b",
".git/objects/83/0b2550c1e7f6425d2997c782822eb66914e724": "8ca7242819a650572b6277fab02b83f8",
".git/objects/4f/f66022bbdfb2c8d1b02f2f538cb5f2e9ac1fd5": "8a0fa56ef74cd46332aa188d901cb03c",
".git/objects/4f/e7c2a684f288e463217c08a6bdf6c5575edd58": "6c0079e1178bf3341d24f17950bb4378",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/714c257d9350652a115b8f6bc44f33945a2d4f": "5b5cf6a126aa817d28f1f65f67465eb1",
".git/objects/40/464bc11b7d56601665e5f7abde510b6014da5b": "843796ee8fb183b772d08f51ea02622a",
".git/objects/8e/65aec10428644f58ac674785ff50d208092841": "c2bf24529311ec6fcdc55523035f95fd",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9e99b12a1e8e45f466e8a1f159f3501",
".git/logs/refs/heads/main": "9035d3dfab746bd84db6f0f279003d3a",
".git/logs/refs/remotes/origin/main": "d94c539216258f923235f4204e93f5e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e25490045720767013ddfa9e6c7c2628",
".git/refs/remotes/origin/main": "e25490045720767013ddfa9e6c7c2628",
".git/index": "9cb4f39a2d67f6ba2f3ecfbddcb48b17",
".git/COMMIT_EDITMSG": "e5706176e6ca56e66c27054cc5bd0830",
".git/FETCH_HEAD": "4e33052f592d28cdc3107ba2cab49322",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "db404a3a7809890151b4b09cb789b3d6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "eaaa04a2a38edd01d8d67b61455e2972",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "016a880a747a593960785246eab4d7b9",
"canvaskit/canvaskit.js.symbols": "bfe5b35e2e324e98853299399ad9098e",
"canvaskit/skwasm.wasm": "b8708f0f4a96eeb9b841e8dbc9e66f9c",
"canvaskit/chromium/canvaskit.js.symbols": "5781e1286bd92ff76563a7c4743348c6",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "82387ece3381c2b46a0629fd9de50f00",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "3e05c126f3b05d3e58cfacfbdbbc2efb",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
