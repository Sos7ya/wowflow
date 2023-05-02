import { RootState } from "./store";

export const getActionDetaliSource = (store: RootState)=>
    store.game.dataSourse;

