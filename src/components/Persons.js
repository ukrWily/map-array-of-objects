import Person from "./Person";
import persons from "../data/persons";
//
const Persons = () => {
  console.log("Persons");
  return (
    <div>
      {persons.map((person) => {
        return <Person {...person} key={person.id} />;
      })}
    </div>
  );
};

export default Persons;
