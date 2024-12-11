import React from "react";

function CountryCard({ flag, name }) {
  return (
    <div className="countryCard">
      <img src={flag} alt={`Flag of ${name}`} />
      <p>{name}</p>
    </div>
  );
}

export default CountryCard;
