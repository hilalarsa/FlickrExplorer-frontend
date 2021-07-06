import axios from 'axios'

const getImages = async () => {
    let result = await axios.get('http://localhost:3001/')
    return result.data
}

export { getImages }
