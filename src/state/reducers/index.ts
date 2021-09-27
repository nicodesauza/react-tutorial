import { combineReducers } from "redux";

import testReducer from './testReducer';
import peopleReducer from './peopleReducer';

const rootReducer = combineReducers({
    test: testReducer,
    people: peopleReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>