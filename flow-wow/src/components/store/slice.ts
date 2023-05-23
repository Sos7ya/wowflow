import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./GameApi";

export interface GameState{
    answer: 
    {id: number;
    value: string;
    promo: string;};
    status: 'idle' | 'loading' | 'failed';
}

const initialState: GameState = {
    answer:{
        id: 0,
        value:' ',
        promo: ' ',
    },
    status: 'idle',
}

export const getGameData = createAsyncThunk(
    'game/getData',
    async() =>{
        const response = await fetchData();
        return response;
    }
)

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
                // state.answer = action.payload
            })
            .addCase(getGameData.rejected, (state)=>{
                state.status = 'failed'
            })
    }
})



export default gameSlice.reducer;