import React from "react";

function Filter(props) {
  return (
    <div>
      <ul className="first__filter">
        {props.filteredCities.map((city, index) => (
          <li key={index}>
            <input 
                type="checkbox"
                id={city}
                name="cities"
                value={city}
                checked={!props.filteredCities.includes(city)}
                onChange={props.handleCheckboxCity}
            />
            <label
                htmlFor={city}
            >{city}</label>
          </li>
        ))}
      </ul>
      <ul className="second__filter">
        {props.filteredGenders.map((gender, index) => (
          <li key={index}>{gender}</li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
