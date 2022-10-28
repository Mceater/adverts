import axios from "axios" // axios is connecting backEnd with frontEnd
const baseUrl = 'http://localhost:3001/api/ads' // before build url was 'http://localhost:3001/api/units'

const getAll = () => {
    return axios.get(baseUrl)
    .then(res => res.data)
}

const createAd = async (newAd, token) => {
    const res = await axios.post(baseUrl, newAd, token)
    return res.data
}

const updateAd = (id, changedAd) => {
    const req = axios.put(`${baseUrl}/${id}`, changedAd)
    return req.then(res => res.data)
}

const deleteData = async (id) => {
    const res = await axios.delete(`${baseUrl}/${id}`)
    return res.data
}

export default {getAll, deleteData, createAd} // exporting multiple objects