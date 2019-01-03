export const Reddit = {
  authorize: () => {
    let url = window.location.href;
    // console.log(url)
    if (url.includes('token')) {
      let state = url.match(/state=(.*?)&/)[1];
      let bearer = url.match(/token=(.*?)&/)[1]
      if (state === process.env.REACT_APP_RANDOM_STRING && bearer !== undefined) {
        console.log(state, bearer)
        sessionStorage.setItem("t", bearer);
        return bearer;
      }
    } else {
      return null
    }
  }
}

export default Reddit