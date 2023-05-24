const reward = (reward = '', action) => {
    switch(action.type){
        case 'REWARD':
            return action.payload;
        default:
            return reward;
    }
}

export default reward;