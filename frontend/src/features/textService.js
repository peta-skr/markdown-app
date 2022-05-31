import axios from "axios";

const API_URL = "http://localhost:5000";

//get all texts
const getTexts = async () => {
  const result = await axios.get("http://localhost:5000");
  return result.data;
};

const saveText = async (data) => {
  const result = await axios.post(API_URL, data);
  return result.data;
};

const updateText = async (data) => {
  const result = await axios.put(API_URL, data);
  return result.data;
};

const textService = {
  getTexts,
  saveText,
  updateText,
};

export default textService;
