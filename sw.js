// Service Worker
//
//      WIP
//
//

const CACHE_NAME = 'my-site-cache-v1'
const urlsToCache = [
    '/',
    '/javascripts/script.js'
]

self.addEventListener('install', event => {
    self.skipWaiting()
    console.dir(clients)
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache')
                return cache.addAll(urlsToCache)
            })
    )
})

self.addEventListener('fetch', event => {
    console.dir(event)
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response)
                    return response
                return fetch(event.request)
            })
    )
})

self.addEventListener('activate', event => {
    console.log("ovde kao neki activate")
})
