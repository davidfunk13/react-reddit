import Axios from "axios";

export const Reddit = {
  login: (info) => {
    console.log(info)
    // console.log(process.env.NODE_ENV)
    console.log(process.env.REACT_APP_TEST)
    console.log(process.env.REACT_APP_CLIENT_ID)
    // function randomString() {
    //     var text = "";
    //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    //     for (var i = 0; i < 10; i++)
    //       text += possible.charAt(Math.floor(Math.random() * possible.length));

    //     return text;
    //   }
    // let User = info.User;
    // let Pass = info
    let CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
    let TYPE = process.env.REACT_APP_RESPONSE_TYPE;
    let URI = process.env.REACT_APP_REDIRECT_URI;
    let RANDOM_STRING = 'myanusisbleeding';
    let DURATION = process.env.REACT_APP_DURATION;
    let SCOPE_STRING = process.env.REACT_APP_SCOPE_STRING;


    Axios.post(`
    https://www.reddit.com/api/v1/authorize?
    client_id="${CLIENT_ID}"
    &response_type=${TYPE}
    &state=${RANDOM_STRING}
    &redirect_uri=${URI}
    &duration=${DURATION}
    &scope=${SCOPE_STRING}
    `).then(response=>{
      console.log(response)
    })

  }
}

export default Reddit