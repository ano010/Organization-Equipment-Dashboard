import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response >= 400 && error.response < 500;

  if (!expectedError) {
    console.log(error);
    console.log("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
};
