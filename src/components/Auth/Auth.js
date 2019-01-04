import history from './history';

export const Auth = {

    handleAuthentication() {
        let url = window.location.href;
        if (url.includes('token')) {
            let expiresAt = JSON.stringify((3600) * 1000 + new Date().getTime());
            let state = url.match(/state=(.*?)&/)[1];
            let bearer = url.match(/token=(.*?)&/)[1]
            if (state === process.env.REACT_APP_RANDOM_STRING && bearer !== undefined) {
                console.log(state, bearer)
                sessionStorage.setItem("t", bearer);
                sessionStorage.setItem("expires_at", expiresAt);
                
            }
        } else {
            history.replace('/');
            return null;
        }
    },
    isAuthenticated() {
        let expiresAt = JSON.parse(sessionStorage.getItem('expires_at'));
        console.log(expiresAt)
        return new Date().getTime() < expiresAt;
    },
    logout() {
        sessionStorage.removeItem("t");
        sessionStorage.removeItem("expires_at");
        // location.pathname = LOGIN_FAILURE_PAGE;
        history.replace('/');
    },

    //   getProfile() {
    //     if (localStorage.getItem("id_token")) {
    //       // console.log(jwtDecode(localStorage.getItem("id_token")))
    //       // console.log(localStorage.getItem("id_token"));
    //       return jwtDecode(localStorage.getItem("id_token"));
    //     } else {
    //       return {
    //         name: 'Anon',
    //         nickname: 'Anon',
    //         picture: 'placeholder',
    //         uid: null,
    //       }
    //     }
    //   }
}