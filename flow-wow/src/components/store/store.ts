import { configureStore} from '@reduxjs/toolkit';
import gameReducer from './slice'

export const store =()=> configureStore({
    reducer:{
        game: gameReducer,
    },
});

type Store = ReturnType<typeof store>

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;