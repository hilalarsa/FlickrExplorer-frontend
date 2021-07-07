import axios from 'axios'

const getImages = async () => {
    console.log(process.env.API_URL)
    let result = await axios.get(process.env.API_URL ? process.env.API_URL : "https://flickrexplorer-backend.herokuapp.com/")
    return result.data
}

export { getImages }
