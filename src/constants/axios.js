import axios from "axios";
import env from "react-dotenv";

axios.defaults.baseURL = env.BASE_API;

export default axios;

const Client = axios.create({
  baseURL: env.BASE_API,
});

Client.interceptors.request.use(
  function (config) {
    var token = localStorage.getItem("TOKEN");
    config.headers.Authorization = `Token ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

Client.interceptors.response.use(
  function (response) {
    var token = localStorage.getItem("TOKEN");
    response.headers.Authorization = `Token ${token}`;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const POST = (path, body) => {
  return new Promise((resolve, reject) => {
    Client.post(path, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const UPDATE = (path, body) => {
  return new Promise((resolve, reject) => {
    Client.post(path, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const GET = (path, body) => {
  return new Promise((resolve, reject) => {
    Client.get(path, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
const DELETE = (path, body) => {
  return new Promise((resolve, reject) => {
    Client.delete(path, body)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
export { Client, POST, UPDATE, GET, DELETE };
