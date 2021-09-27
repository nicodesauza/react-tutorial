import { ActionType } from "../actions-types";
import { Dispatch } from "redux";
import { ActionTest, ActionPeople } from "../actions";

interface IState {
    people: {
      name: string;
      age: number;
      url: string;
      note?: string;
    }[];
  }

export const test = (amount: number) => {
    return (dispatch: Dispatch<ActionTest>) => {
        dispatch({
            type: ActionType.TEST,
            payload: amount,
        })
    }
}

export const setPeople = (people: IState["people"]) => {
    return (dispatch: Dispatch<ActionPeople>) => {
        dispatch({
            type: ActionType.SET_PEOPLE,
            payload: people,
        })
    }
}