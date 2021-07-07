import axios from 'axios'

const API_URL = 'https://flickrexplorer-backend.herokuapp.com/'
// const API_URL = 'http://localhost:3001/'

const getImages = async () => {
    let result = await axios.get(API_URL)
    return result.data
}
const getImagesByTag = async (tag) => {
    if (!tag) {
        return []
    }
    let params = 'tags/' + tag
    let result = await axios.get(API_URL + params)
    return result.data.photos.photo
}

export { getImages, getImagesByTag }
