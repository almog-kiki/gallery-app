

const path = require('path');

const CORS_OPTIONS = { origin: 'http://localhost:3003' };
const IMAGE_DIRECTORY_NAME = 'images';
const IMAGE_PATH = path.join( path.dirname(require.main.filename || process.mainModule.filename), IMAGE_DIRECTORY_NAME);

module.exports = Constants = {
    IMAGES_PATH: IMAGE_PATH,
    CORS_OPTIONS: CORS_OPTIONS

}