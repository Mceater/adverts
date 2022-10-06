import axios from 'axios'

const baseURL = 'http://localhost:3001/api/ads'

const getAll = () => {
    return axios.get(baseURL)
    .then(res => res.data)
}

export default {getAll}