import axios from "axios"; // axios is connecting backEnd with frontEnd
const baseUrl = "http://localhost:3001/api/ads"; // before build url was 'http://localhost:3001/api/units'

const getAll = async () => {
  return await axios.get(baseUrl).then((res) => res.data);
};

const createAd = async (newAd, token) => {
  const res = await axios.post(baseUrl, newAd, token);
  return res.data;
};

const updateAd = async (id, changedAd) => {
  const req = await axios.post(`${baseUrl}/${id}`, { url: changedAd });
  return req.then((res) => res.data);
};

const deleteData = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`);
  return res.data;
};

export default { getAll, deleteData, createAd, updateAd }; // exporting multiple objects
