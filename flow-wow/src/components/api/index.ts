import axios from 'axios';


const options = {
    method: 'GET',
    url: 'http://92.53.99.171:5000/',
  };

export const fetchUserData = async() => axios(options);
export const getReward = () => axios.post('window.location.hostname');