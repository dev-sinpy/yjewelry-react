import axios from "axios";

const client = axios.create({
  baseURL: "https://dev.y.jewelry",
  timeout: 100000,
});

// client.interceptors.request.use(
//   function (config) {
//     const state = store.getState();
//     const user = state.auth.user;
//     const accessToken = user.accessToken;

//     config.headers = {
//       Authorization: `Bearer ${accessToken}`,
//     };
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export default client;
