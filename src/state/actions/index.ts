import { ActionType } from "../actions-types/";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

interface Test {
  type: ActionType.TEST;
  payload: number;
}

interface People {
  type: ActionType.SET_PEOPLE;
  payload: IState["people"];
}

export type ActionTest = Test;
export type ActionPeople = People;
