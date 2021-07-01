const axios = require('axios');

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000,
  params: {
    apikey: process.env.VUE_APP_API_KEY,
    plot: 'full',
  },
});

export default instance;
