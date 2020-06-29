##  Gallery App 

Search photos with flickr API.
This app using Node.js + VueJS + ReactJS platforms, and Vue is the main app with combined React Component.

The server using cache-memory for saving photos, the key is the url of the photo from Flickr API.

# How to run 
```
docker-compose -f docker-compose-<target>.yml  <Commands>
```
- development
```
docker-compose -f docker-compose-dev.yml build
docker-compose -f docker-compose-dev.yml up -d
```

- production
```
docker-compose -f docker-compose-prod.yml build
docker-compose -f docker-compose-prod.yml up -d
```

- stop:
```
docker-compose -f docker-compose-<target>.yml down
```


## Referencing external resources:

- How add react component in vue app:
https://github.com/akxcv/vuera


https://www.npmjs.com/package/memory-cache
https://github.com/tekdreams/images-downloader

- Lightbox:
https://www.npmjs.com/package/react-image-lightbox

- Infinite Scroll:
https://www.digitalocean.com/community/tutorials/how-to-build-an-infinite-scroll-image-gallery-with-react-css-grid-and-unsplash

https://codepen.io/Chuloo/full/BMPXqy

- build photo url from flickr:
https://idratherbewriting.com/learnapidoc/docapis_flickr_example.html


## Note
```
// there is problem with a lot of request probably:

Error: getaddrinfo ENOTFOUND farm66.staticflickr.com
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:66:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'farm66.staticflickr.com'
}
worker 25 died
events.js:292
      throw er; // Unhandled 'error' event
      ^

Error: getaddrinfo ENOTFOUND farm66.staticflickr.com
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:66:26)
Emitted 'error' event on ClientRequest instance at:
    at TLSSocket.socketErrorListener (_http_client.js:467:9)
    at TLSSocket.emit (events.js:315:20)
    at emitErrorNT (internal/streams/destroy.js:100:8)
    at emitErrorCloseNT (internal/streams/destroy.js:68:3)
    at processTicksAndRejections (internal/process/task_queues.js:84:21) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'farm66.staticflickr.com'
}
```







