import React from 'react';
import axios from 'axios';

let games;

axios({
  "method":"GET",
  "url":"https://free-nba.p.rapidapi.com/games",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"free-nba.p.rapidapi.com",
  "x-rapidapi-key":"5ed95300demsh3035207a47f19d8p146182jsne8bd14461108",
  "useQueryString":true
  },"params":{
  "page":"0",
  "per_page":"25"
  }
  })
  .then((response)=>{
    //console.log(response)
    games = response;
    console.log(games)
  })
  .catch((error)=>{
    console.log(error)  
  })

  export default games;