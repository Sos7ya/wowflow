import * as api from '../api';

export const getReward = () => async(dispatch) => {
    try{
        const  {data}  = await api.getReward()
        console.log(data)
        dispatch({type: 'REWARD', payload:data});
    } catch(error){
        console.log(error.message);
    }
}