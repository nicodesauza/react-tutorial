interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List = ({ people }: IProps) => {
  const renderedList = (): JSX.Element[] => {
    return people.map((person, index) => {
      return (
        <li key={index} className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} alt="" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return (
    <ul>
      {renderedList()}
    </ul>
  );
};

export default List;
