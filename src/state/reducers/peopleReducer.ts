import { ActionType } from "../actions-types";
import { ActionPeople } from "../actions/index";

interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const INITIAL_STATE = {
  people: [
    {
      name: "LeBron James",
      url: "https://a-static.besthdwallpaper.com/agent-jett-valorant-riot-video-game-wallpaper-73369_L.jpg",
      age: 36,
      note: "test note",
    },
    {
      name: "Kobe",
      url: "https://a-static.besthdwallpaper.com/agent-jett-valorant-riot-video-game-wallpaper-73369_L.jpg",
      age: 36,
      note: "test aja",
    },
  ],
};

const peopleReducer = (
  state: IState = INITIAL_STATE,
  action: ActionPeople
) => {
  switch (action.type) {
    case ActionType.SET_PEOPLE: {
      const people = action.payload;
      state.people.push(people)
      
      return state;
    }
    default:
      return state;
  }
};

export default peopleReducer