//jshint esversion:9

import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CountryDetails } from "./components/CountryDetails";
import { useState, useEffect } from 'react';
/* import countriesDataList from './countries.json'; */
import { CountriesList } from "./components/CountriesList";
import axios from "axios";

function App() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {

    (async () => {
      let response = await axios.get("https://ih-countries-api.herokuapp.com/countries");
      setCountriesData(response.data);
    })();

  }, []);


  return (
    <div className="App">
      <Navbar />

      <div className="container">

        <div className="row">

          <CountriesList countries={countriesData} />

          <Routes>
            <Route path="/:countryId" element={<CountryDetails />} />
          </Routes>

        </div>
      </div>
    </div>);
}
export default App;
