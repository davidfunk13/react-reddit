import axios from 'axios';

export const Reddit = {
    masterUser: (token) => {
        return axios.get('https://oauth.reddit.com/api/v1/me', { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => {
                return err.response
            });
    },
    fetchSaved: (user, token) => {
        return axios.get(`https://oauth.reddit.com/user/${user}/saved`, { headers: { Authorization: 'Bearer ' + token } })
            .catch(err => {
                console.log(err.response);
                return err.response
            });
    }
}