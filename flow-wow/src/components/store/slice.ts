import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./GameApi";

// const answer= 
// {id: number,
// value: string,
// promo: string,}

export interface GameState{
    answer:{
        id:number;
        value: string;
        promo: string;
    };
    status: 'idle' | 'loading' | 'failed';
}

const initialState: GameState = {
    answer:{
        id: NaN,
        value: ' ',
        promo: ' '
    },
    status: 'idle',
}

export const getGameData = createAsyncThunk(
    'game/getData',
    async(data:{
        id:number,
        value: string,
        promo: string,
    }) =>{
        const response = await fetchData(data);
        return response.data;
    }
)

// export const getGameObj = () => async dispatch => {
//     try{
//         const response = await fetchData()
//         const data = await response
//         dispatch({type:
//         'GET_OBJ_SUCCESS', payload: data})
//     }
// }

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
            .addCase(getGameData.pending, (state)=>{
                state.status = 'loading';
            })
            .addCase(getGameData.fulfilled, (state, action)=>{
                state.status = 'idle'
                state.answer = action.payload
            })
            .addCase(getGameData.rejected, (state)=>{
                state.status = 'failed'
            })
    }
})



export default gameSlice.reducer;