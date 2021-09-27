import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state"

interface IState {
  input: {
    name: string;
    age: number;
    note: string;
    url: string;
  };
}

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const AddToList = ({ people }: IProps) => {
  const dispatch = useDispatch();

  const initialState = {
    name: "",
    age: 0,
    note: "",
    url: "",
  };

  const [input, setInput] = useState<IState["input"]>({
    name: "",
    age: 0,
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    dispatch(actionCreators.setPeople(input))

    setInput({ ...initialState });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={input.age === 0 ? "" : input.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="AddToList-input"
        value={input.url}
        name="url"
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        name="note"
        onChange={handleChange}
      />
      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
