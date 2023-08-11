import axios from "axios";

const baseURL = "http://localhost:5000";

const getBackendData = async (endpoint) => {
  return new Promise((resolve, reject) => {
    axios.get(baseURL + endpoint).then((response) => {
      resolve(response);
    });
  });
};

export default getBackendData;
