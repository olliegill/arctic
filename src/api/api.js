import axios from 'axios';

export const fetchData = (query) => {
    return axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars`);
}
