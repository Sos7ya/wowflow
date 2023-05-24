import axios from 'axios';

export const fetchUserData = () => axios.get(window.location.href);
export const getReward = () => axios.post(window.location.hostname);