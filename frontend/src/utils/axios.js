import axios from "axios";

const baseURL = "https://ott-backend-ttii.onrender.com";

const getBackendData = async (endpoint) => {
  return new Promise((resolve, reject) => {
    axios.get(baseURL + endpoint).then((response) => {
      resolve(response);
    });
  });
};

export default getBackendData;
