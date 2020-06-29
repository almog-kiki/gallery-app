import * as Constants from '../common/constants'
import axios from 'axios';

class DataService {

    async search (pageNumber, searchString){
        const body = {
            text: searchString,
            perPage: Constants.MAX_PHOTOS_PER_FETCH,
            pageNumber: pageNumber
        }
        const data = await axios.post( Constants.SEARCH_BY_TEXT_API_URL, body , { headers: Constants.HTTP_HEADERS })
        return data.data;
    }
}

export default new DataService();
