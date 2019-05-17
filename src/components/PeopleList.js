import React from "react";

function PeopleList(props) {
  return (
    <ul>
      {props.peopleData.map((person, ind) => {
        return (
          <li key={ind}>
            <h2>{`${person.name.first} ${person.name.last}`}</h2>
            <div
              style={{
                backgroundImage: `url(${person.picture.thumbnail})`,
                height: "48px",
                width: "48px"
              }}
            />
            <p>{person.location.city}</p>
            <p>{person.dob.age}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default PeopleList;
