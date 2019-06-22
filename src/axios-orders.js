import axios from 'axios';

let config = {
    baseURL: 'https://burger-builder-a6962.firebaseio.com/'
};

const instance = axios.create(config);

export default instance;
