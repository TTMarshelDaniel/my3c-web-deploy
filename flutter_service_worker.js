'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Roboto/Roboto-BlackItalic.ttf": "c470ca2b5b4f4437a3fe71b113a289a2",
"assets/fonts/Roboto/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/Roboto/Roboto-Black.ttf": "301fe70f8f0f41c236317504ec05f820",
"assets/fonts/Roboto/Roboto-Thin.ttf": "4f0b85f5b601a405bdc7b23aad6d2a47",
"assets/fonts/Roboto/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/fonts/Roboto/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/fonts/Roboto/Roboto-BoldItalic.ttf": "0be9fa8f2863998d1e52c84165976880",
"assets/fonts/Roboto/Roboto-ThinItalic.ttf": "7384da64612787e3662872e9d19cbc2d",
"assets/fonts/Roboto/Roboto-LightItalic.ttf": "2ffc058ddedacfeaa23542026c8108e2",
"assets/fonts/Roboto/Roboto-MediumItalic.ttf": "cabdb4a12e5de710afde298809306937",
"assets/fonts/open_sans/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/fonts/open_sans/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/fonts/open_sans/OpenSans-LightItalic.ttf": "c147d1302b974387afd38590072e7294",
"assets/fonts/open_sans/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/fonts/open_sans/OpenSans-SemiBoldItalic.ttf": "4f04fe541ca8be9b60b500e911b75fb5",
"assets/fonts/open_sans/OpenSans-ExtraBoldItalic.ttf": "37f52104364c2eb5482fd85777bda0ac",
"assets/fonts/open_sans/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/fonts/open_sans/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/fonts/open_sans/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/fonts/open_sans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/images/Logo-two.png": "8647a972bc02d7d1081e17dbe130ad34",
"assets/assets/images/icons/time.png": "0493e2cb0adf26059ccf8f3862c9ca35",
"assets/assets/images/icons/calender-blue.png": "1f042e5f036372ea316428254a5581b8",
"assets/assets/images/icons/icons8-traveler-64%25201.png": "4311887feff53e7c69797d3ec9ed679b",
"assets/assets/images/icons/icons8-non-stop-flight-64%25201.png": "e36a9956d25ff4213bdbe25aa0e1296c",
"assets/assets/images/icons/cross_circle.png": "cd067f563475c80317dbf2e716550d6f",
"assets/assets/images/icons/icons8-pass-fail-64%25201.png": "d154c0b44fcadb562c112609c047c915",
"assets/assets/images/icons/QR-code.png": "dc08bc4edfce52c4521ae57d27ec18b4",
"assets/assets/images/icons/hotmail.png": "31e6a106ae0d25198e97f540e9ce2199",
"assets/assets/images/icons/calender%2520red.png": "5c83a636297fe0feacc23a080f4cd77c",
"assets/assets/images/icons/navigation_icn.png": "915a0ca0d1c83140562d0bf74f6676f9",
"assets/assets/images/icons/check_circle.png": "65677a8826f6ac6f83fe1ef09aa3ea8c",
"assets/assets/images/icons/check-green.png": "e094de1f1e89a983c2499255639f119b",
"assets/assets/images/icons/icons8-empty-test-tube-80%25201.png": "84cfda72f3e6d07f53069453dd5a41cd",
"assets/assets/images/icons/email.png": "565cf1b4df3bd0f72afd5797c4a4a508",
"assets/assets/images/icons/yahoo.png": "9fbe75837d135c6546d4f4a1841576f9",
"assets/assets/images/icons/time-red.png": "c17e5b806ffa3a2dd15e3ea2e61e500f",
"assets/assets/images/icons/icons8-boarding-pass-64%25201.png": "9b0dfeb219d0b68b7714edb66ef9c0ff",
"assets/assets/images/icons/map.png": "081b4edfc27fd015a8c8dc43fd37b393",
"assets/assets/images/icons/icons8-health-64%25201.png": "82de4774150181b73f8561b41880c28e",
"assets/assets/images/icons/navigation_icn_.png": "a7656ac7ecacde71d90d5c3c672e14d5",
"assets/assets/images/icons/cloud_download.png": "afa00689c40581d3075368d33667acc1",
"assets/assets/images/icons/icons8-hotel-building-64%25201.png": "02b6bd9d1c1e98dba17a091e6921d039",
"assets/assets/images/icons/time-blue.png": "e499ca3f3903560f92d92d74c5af057c",
"assets/assets/images/icons/persons.png": "ec4f107c7bb0af30b7cb26471ce53a2c",
"assets/assets/images/icons/google.png": "195e0d67a6a8d4625a5d17721438ed17",
"assets/assets/images/vaccinated.png": "46a14fd6ee5f4250b44a44a558ec6a99",
"assets/assets/images/bottom-sheet-bg.png": "48810f1aa014bb124dd23fe58ef29929",
"assets/assets/images/pre-login.png": "ca68c70e0e46a3e843eacd1c8d5dca45",
"assets/assets/images/airplane.png": "eba2e2baa3e33cb10136590b493ed422",
"assets/assets/images/user_avatar.png": "695aec55f3bde097219d1e5ba09403e9",
"assets/assets/images/indicator.png": "2da079e7a47034e8344a921f231e89e4",
"assets/assets/images/image_flag.png": "069d498c1fa5a1943566fc695045a956",
"assets/assets/images/home-leading.png": "cd524ed7f88757023e867f71dd90c265",
"assets/assets/images/country-choose.png": "103ff361f3635a1d0624a47866cf4181",
"assets/assets/images/WhatsApp-Image.png": "7a2012707147c9849cb3b4665587782d",
"assets/assets/images/syringe.png": "9a48f0adebdaa9bfa034243161af0cb2",
"assets/assets/images/india.png": "087d75c527f04b62877e1e277c3177dc",
"assets/assets/images/WhatsApp-Image_1.jpeg": "21dc443f1614a13e72999b1b5509b69b",
"assets/assets/images/download_icon.png": "7a8f24d5176ca4b1739fb355e5a3da53",
"assets/assets/images/logo-gmr.png": "9d0bd598919c67d2730b01acf83ad553",
"assets/assets/images/profile.png": "e1901e1e0b5b2f7c5636bb77b87859cb",
"assets/assets/images/profile2.png": "d9ee2049ae868887edab0fe093874205",
"assets/assets/images/home-tab-icon.png": "65a94f0f9d3e59ca0c60dcf32cd25ba1",
"assets/assets/images/WhatsApp-Image_.jpeg": "cb1b0eadf0e2555140f596844113af3d",
"assets/assets/images/covid_ve.png": "aaaa8c1203ea2c4fca7733ccf6c30370",
"assets/assets/images/dashboard/travel_pass_icn.png": "58a5ed59530ac9ff53c76a697ef3e258",
"assets/assets/images/dashboard/travel_passes.png": "9b5377935e05e8fd56a27c7611826ec5",
"assets/assets/images/dashboard/travellers_icn.png": "c8a92697545abd59680ea997b4126e86",
"assets/assets/images/dashboard/my_trip_text.png": "55ff2f50766990d313ccd70493040f8a",
"assets/assets/images/dashboard/hotel_booking_icn.png": "aba129ebb36aee53f640d5389e8e36e9",
"assets/assets/images/dashboard/my_test_text.png": "7877c1c27af292afe164bfcaf606e80f",
"assets/assets/images/dashboard/support-text.png": "bcf16048bfac651e7b480725a54e64a8",
"assets/assets/images/dashboard/travellers_text.png": "43e2afa341103de65194b8555b485f33",
"assets/assets/images/dashboard/travellers.png": "8e0b0d02671b0c362258719effa68dc0",
"assets/assets/images/dashboard/insurance-icn-2.png": "6b3d525bee38806943984baa1e61b03d",
"assets/assets/images/dashboard/hotel_booking.png": "5b5c6f6b5a23780de96c7843b838b444",
"assets/assets/images/dashboard/hotel_booking_text.png": "a3361a00d641d6aef32d283f91d32713",
"assets/assets/images/dashboard/travel_pass_text.png": "977c282edc40426f770bb0d6c0a06570",
"assets/assets/images/dashboard/my-tests-icn-2.png": "f74113663edbc41d5f679465516fd966",
"assets/assets/images/dashboard/insurance.png": "f683ce137dba0c9d83c95aa7b365861c",
"assets/assets/images/dashboard/insurance_icn.png": "b7811a726a679506dc0629cc49dd29f1",
"assets/assets/images/dashboard/my-trips-icn-2.png": "d961ea8334b201b9218394db7a17da98",
"assets/assets/images/dashboard/insurance_text.png": "609e701ab613381d5e5ec0398a6d7af6",
"assets/assets/images/dashboard/co_vaxin_cert_icn.png": "1636e2ff80a9bf0a4161ee0e52936c4c",
"assets/assets/images/dashboard/my_trips.png": "cdb0137c6b0a139eb3e8d7b5f950df26",
"assets/assets/images/dashboard/travel-pass-icn-2.png": "1168a8ff634bc1b7fe9a233b05b90cfd",
"assets/assets/images/dashboard/my_test_icn.png": "213a41923227932c423502315c52a08e",
"assets/assets/images/dashboard/my_tests.png": "64dd8c13b2e2dfa4b54800c573ed8034",
"assets/assets/images/dashboard/co_vaxin_cert_test.png": "f2706309d406722852373d1146fe04b6",
"assets/assets/images/dashboard/vaccne-icn-2.png": "333d5f2ecc1dfa33ea42af8bddd3c1f1",
"assets/assets/images/dashboard/map.png": "32ef4631753cf229cee090c5d074c6cb",
"assets/assets/images/dashboard/icons-support.png": "be762a8593605455e439d0a2e632d993",
"assets/assets/images/dashboard/covid_vaccination_certificate.png": "4b5376ec76c49780f9ed3f32b1ad5058",
"assets/assets/images/dashboard/travellers-icn-2.png": "1e88d3d542c60fc2a5ff75b6d92cc8ef",
"assets/assets/images/dashboard/my_trip_icn.png": "ed4cfcbdc384d587581d207877b8236d",
"assets/assets/images/mask_image.png": "436ea61fb32a40c5c866ceb3a84d6941",
"assets/assets/images/Logo_.png": "a26f8c55ffc4f56716044ea97f2b12d5",
"assets/assets/images/Logo.png": "b3911552472590ac0d886d5316651184",
"assets/assets/images/my_trip_1.png": "b79d9eb22ff56370fc53fd1d07d091b8",
"assets/assets/images/usa.png": "72218e0e712e6f5ec6267deca3d0ddd1",
"assets/assets/images/fromto.png": "d459d8f5fc9ab28bdb51e141f3f93a56",
"assets/assets/images/qr_code.png": "6b7ce26ccb1a50dfd1d1e461579af4e6",
"assets/assets/images/map_background.png": "d9d447b51b5f7fa2b218d36beee44394",
"assets/assets/images/icons_1x.png": "48f4fb2d8ef2dd48e54a669f095832f0",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "b6efd12aff601ba220b30d35afeeb623",
"assets/NOTICES": "a56132478fc0364e2a73460210532ca6",
"assets/AssetManifest.json": "993dc155c00ca2479899d0e8171d68d8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "70a9226d6a88ee2f06dcc0728caadd72",
"main.dart.js": "831c3b8cd0f14a04a3c6cc1edf120d96",
"index.html": "5faffa6b4812a7d448e6cf72b19075dc",
"/": "5faffa6b4812a7d448e6cf72b19075dc",
"manifest.json": "bbd3366dea780de8e30b3b8ae98e6269"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
