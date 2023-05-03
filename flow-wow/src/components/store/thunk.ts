import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_VALUE_ALICE, TActionDetali } from "./type";
import {notification} from 'antd'

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
    string,
    {
        rejectValue: Error
    }
    >(`${ACTION_VALUE_ALICE}/get`, async(id: string, {rejectWithValue})=>{
        try{
            return mockData
        }
        catch(error){
            notification.error({ message: 'error!' });
            return rejectWithValue(error as Error)
        }
    });