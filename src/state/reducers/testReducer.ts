import { ActionType } from "../actions-types";
import { ActionTest } from "../actions/index";

const initialState = 0;

const testReducer = (state: number = initialState, action: ActionTest) => {
    switch(action.type) {
        case ActionType.TEST:
            return state + action.payload
        default:
            return state
    }
}

export default testReducer