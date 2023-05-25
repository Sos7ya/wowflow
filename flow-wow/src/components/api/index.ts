import axios from 'axios';

export const fetchUserData = async() => axios.get(window.location.pathname==='/'?'/api':window.location.pathname);
export const getReward = () => axios.post('window.location.hostname');