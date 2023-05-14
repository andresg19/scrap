const { Router } = require("express");
const router = Router();
const axios = require("axios");
require('dotenv').config();




   var config = {
    method: 'get',
    url: 'https://v3.football.api-sports.io/widgets/Games',
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });







module.exports = router;