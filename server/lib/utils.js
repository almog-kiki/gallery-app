const  fs = require('fs');
const cache = require('memory-cache');

const API_SERVICE_URL = "https://www.flickr.com/services/rest/?method=";
const FLICKR_API_KEY = "&api_key=c6849d58fc7efcaffd78785ed8ee30cf";
const FLICKR_FORMAT_TESTING= "&format=json&nojsoncallback=1";
//METHODS
const FLICKR_PHOTO_SEARCH_METHOD= "flickr.photos.search";


const buildSearchUrlByText = (text,perPage, pageNumber)=>{
  //https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=c6849d58fc7efcaffd78785ed8ee30cf&text=watch&format=json&nojsoncallback=1
  return API_SERVICE_URL + FLICKR_PHOTO_SEARCH_METHOD + FLICKR_API_KEY + "&text=" + text 
          + "&per_page=" + perPage + "&page=" + pageNumber + FLICKR_FORMAT_TESTING;
}

const buildPhotoUrl = (photo)=>{
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    return "https://farm"+photo.farm+".staticflickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+".jpg";
}

const convertPhotoPathToClientUrl = (photos) =>{
  for( photo of photos) {
    var filename = photo.filename.replace(/^.*[\\\/]/, '')
    photo.filename = "/images/"+filename;
  }
}

const setPhotosToCache = (photos) =>{
  photos.forEach(photo =>{
      cache.put(photo.url, photo);
  })
}

const getPhotosUrlIsNotInCache = (photosUrls, photoInCache) =>{
 let photosNotInCache = [];
  for(url of photosUrls){
      let cachePhoto = cache.get(url);
      if(!cachePhoto){
          photosNotInCache.push(url);
      }else{
          photoInCache.push(cachePhoto);
      }
 }
 return photosNotInCache;
}

const createImagesDirectory = async (dir)=>{
    try {
      await fs.promises.mkdir(dir);
    } catch (error) {
      if (error.code === 'EEXIST') {
        // Something already exists, but is it a file or directory?
        const lstat = await fs.promises.lstat(dir);

        if (!lstat.isDirectory()) {
          throw error;
        }
      } else {
        throw error;
      }
    }
}

module.exports = Utils = {
    buildSearchUrlByText:buildSearchUrlByText,
    buildPhotoUrl:buildPhotoUrl,
    createImagesDirectory:createImagesDirectory,
    convertPhotoPathToClientUrl: convertPhotoPathToClientUrl,
    setPhotosToCache:setPhotosToCache,
    getPhotosUrlIsNotInCache:getPhotosUrlIsNotInCache,

}