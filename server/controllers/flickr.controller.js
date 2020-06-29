
const requestUtils  = require('../lib/requestUtils');
const utils         = require('../lib/utils');

exports.serachByText = async function (req, res){
    try{
        const { text, perPage, pageNumber } = req.body;
        let url = utils.buildSearchUrlByText(text, perPage, pageNumber);
        let data = await requestUtils.downloadImages(url);
        requestUtils.retrunSuccessResponse(res, data)
    } catch (error){
        console.log(error.stack)
        requestUtils.retrunFailureResponse(res, error);
    }
}


