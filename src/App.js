import React, { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import CountriesGrid from "./Components/CountriesGrid";
import "./App.css";



const API_URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <CountriesGrid countries={filteredCountries} />
    </div>
  );
}

export default App;
