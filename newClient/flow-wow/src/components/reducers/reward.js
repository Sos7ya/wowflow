const result = (result = '', action) => {
    switch(action.type){
        case 'REWARD':
            return action.payload;
        default:
            return result;
    }
}

export default result;