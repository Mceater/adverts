import axios from "axios" // axios is connecting backEnd with frontEnd
const baseUrl = 'http://localhost:3001/api/ads' // before build url was 'http://localhost:3001/api/units'

const getAll = () => {
    return axios.get(baseUrl)
    .then(res => res.data)
}



export default {getAll} // exporting multiple objects