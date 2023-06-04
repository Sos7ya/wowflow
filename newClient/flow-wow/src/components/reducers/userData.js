const userData = (userData = '', action) => {
    switch(action.type){
        case 'FETCH_USER':
            return action.payload;
        default:
            return userData;
    }
}

export default userData;