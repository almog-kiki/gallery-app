const express       = require('express');
const bodyParser    = require('body-parser');
const dotenv        = require("dotenv");
const constants     = require('./lib/constants');
const cluster       = require('cluster');
const numCPUs       = require('os').cpus().length;
const flickr        = require('./routes/flickr.route');
const utils         = require('./lib/utils');

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/images', express.static(__dirname+'/images/'));
app.use('/api/flickr', flickr);

const startServer = async(port) =>{
    await utils.createImagesDirectory(constants.IMAGES_PATH);
    app.listen(port);
    console.log("Server listening at http://%s:%s", "localhost", port);
}

function createCluserts(){
    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);
        for (let i = 0; i < numCPUs; i++) {
          cluster.fork();
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        startServer(process.env.PORT || 8002)
    }
    console.log(`Worker ${process.pid} started`);
}

if (process.env.NODE_ENV !== 'test') {
    createCluserts();
} else {
    startServer(process.env.TEST_PORT || 7999)
}

process.on('uncaughtException', function(error) {
    console.log('Caught exception: ' + error);
    console.log('error.stack: ' + error.stack);
});

  module.exports = app;
