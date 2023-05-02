import { createSlice } from "@reduxjs/toolkit";
import { 
    ACTION_VALUE_ALICE,
    TActionDetaliGame} from "./type";

import {getActionDetaliAction} from './thunk'


const initialState : TActionDetaliGame={
    loading: false,
    dataSourse: null,
}

const gameSlice = createSlice({
    name: ACTION_VALUE_ALICE,
    initialState,
    reducers:{
    },
    extraReducers: (builder)=>{
        builder.addCase(getActionDetaliAction.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(getActionDetaliAction.fulfilled, (state, {payload})=>{
            state.dataSourse = payload;
            state.loading = false;
        });
        builder.addCase(getActionDetaliAction.rejected, (state, {payload})=>{
            state.loading = false;
        });
    }
});

export default gameSlice.reducer;