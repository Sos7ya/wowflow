import * as api from '../api';

export const fetchUser = () => async(dispatch) => {
    try{
        const { data } = await api.fetchUserData();

        dispatch({type: 'FETCH_USER', payload:data});
    } catch(error){
        console.log(error.message);
    }
}