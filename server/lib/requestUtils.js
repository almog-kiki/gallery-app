const axios = require('axios');
const utils = require('./utils');
const constants = require('./constants');
const download = require('images-downloader').images;

const axiosGet = async(url) =>{
    const response = await axios({
        url,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return response.data;
}

const getPhotosUrl = (photos)=>{
    let photosUrls = [];
    photos.forEach(photo=>{
        photosUrls.push(utils.buildPhotoUrl(photo))
    });
    return photosUrls;
}

const saveImages = async(photos)=>{
    let photosUrls = getPhotosUrl(photos)
    let photoInCache = [];
    let photosNotInCache = utils.getPhotosUrlIsNotInCache(photosUrls, photoInCache);
    
    let result = await download(photosNotInCache, constants.IMAGES_PATH);
    utils.convertPhotoPathToClientUrl(result);
    utils.setPhotosToCache(result);
    
    return result.concat(photoInCache);
}

exports.downloadImages = async function(url){
   try{
        const responseData = await axiosGet(url);
        if(responseData.stat != "ok"){ throw responseData.stat}
        return await saveImages(responseData.photos.photo)
   } catch( error){
        console.log(error.stack)
        throw error
   }
   
}

exports.retrunSuccessResponse = function(res,data){
    res.json(data);
}

exports.retrunFailureResponse = function(res, error){
    res.status(500).json(error);
}