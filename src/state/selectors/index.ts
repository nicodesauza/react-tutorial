import { createSelector } from "reselect";

const selectPeoples = (state) => state.people.people;

export { selectPeoples }