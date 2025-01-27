// src/utils/api.js
const axios = require("axios");

const fetchData = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  return response.data;
};

module.exports = { fetchData };
