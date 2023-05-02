import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_VALUE_ALICE, TActionDetali } from "./type";

export const mockAction: TActionDetali={
    id: 1,
    value: 'КОД КУПОНА',
    quantity: 1
}

const mockData: TActionDetali={
    id: 1,
    value: 'КОД КУПОНА',
    quantity: 1
}

export const getActionDetaliAction = createAsyncThunk<
    TActionDetali,
    number,
    {rejectValue: Error}
    >(`${ACTION_VALUE_ALICE}/get`, async(id:number, {rejectWithValue})=>{
        try{
            return mockData
        }
        catch(error){
           return rejectWithValue(error as Error)
        }
    });