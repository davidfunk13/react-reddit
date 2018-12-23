import axios from "axios";
import React from 'react';
export const Reddit = {
  login: (state, code) => {
    console.log(state, code)
// axios.post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000`)
// const axiosPost = axios({
//   url: 'https://www.reddit.com/api/v1/access_token',
//   method: 'post',
//   headers: {

//   },
//   responseType: 'json',
//   data: {
//     grant_type: 'authorization_code',
//     code: code,
//     redirect_uri: 'http://localhost:3000' 
//   }
// });
// return axiosPost.then(response=>{console.log(response)})
  }
}

export default Reddit