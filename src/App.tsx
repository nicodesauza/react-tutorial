import { useSelector } from "react-redux";

import { State } from "./state";

import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

function App() {
  
  const people = useSelector((state: State) => state.people);

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people.people} />
      <AddToList people={people}/>
    </div>
  );
}

export default App;
