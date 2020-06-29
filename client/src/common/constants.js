export const HTTP_HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}   

export const SEARCH_TITLE = "Search"
export const SEARCH_PLACEHOLDER = "Search photos..."

//http://localhost:PORT/flickr/serachByText
export const PORT = process.env.SERVER_PORT || 8080;
export const BASIC_URL = "http://localhost:"+PORT;
export const FLICKR_API =  BASIC_URL + "/api/flickr";
export const SEARCH_BY_TEXT_API_URL =  FLICKR_API + "/serachByText";

export const MAX_PHOTOS_PER_FETCH = 10;



