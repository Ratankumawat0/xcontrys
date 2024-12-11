import React from "react";
import CountryCard from "./CountryCard";

function CountriesGrid({ countries }) {
  return (
    <div className="countriesGrid">
      {countries.length > 0 ? (
        countries.map((country) => (
          <CountryCard
            key={country.cca3}
            flag={country.flags.png}
            name={country.name.common}
          />
        ))
      ) : (
        <p>No countries found.</p>
      )}
    </div>
  );
}

export default CountriesGrid;
