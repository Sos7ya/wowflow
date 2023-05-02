import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchValue } from "./gameApi";


export interface ActionState{
    value: number,
    status: 'active' | 'non-active'
}

const initialState : ActionState={
    value: 1,
    status: 'active'
}

export const setValue = createAsyncThunk(
    '',
    async (value: number)=>{
        const response = await fetchValue(value)
        return response.data;
    }
)

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers:{
        decrement: (state) => {
            state.value -= 1;
          }
    }
    
})

export const {decrement} = gameSlice.actions

export default gameSlice.reducer;