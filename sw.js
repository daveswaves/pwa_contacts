// console.log('Service worker inside sw.js');

// install service worker
self.addEventListener('install', evt => {
	console.log('Service worker has been installed.');
})

// activate service worker
self.addEventListener('activate', evt => {
	console.log('Service worker has been activated.');
})

// fetch event
self.addEventListener('fetch', evt => {
	console.log(evt);
})

