import { combineReducers } from "redux";

import userData from './userData';
import reward from './reward';

export default combineReducers({
    userData,
    reward
});