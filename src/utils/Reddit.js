import axios from 'axios';

export const Reddit = {
    masterUser: () => {
        let token = sessionStorage.getItem('t');
        return axios.get('https://oauth.reddit.com/api/v1/me', { headers: { Authorization: 'Bearer ' + token } })
    }

}