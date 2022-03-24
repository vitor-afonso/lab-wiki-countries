//jshint esversion:9

import "./App.css";
import {Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CountryDetails } from "./components/CountryDetails";
import { useState } from 'react';
import countriesDataList from './countries.json';
import { CountriesList } from "./components/CountriesList";

function App() {
  const [countriesData, setCountriesData] = useState(countriesDataList);
  return (
    <div className="App">
      <Navbar />

      <div className="container">

        <div className="row">

          <CountriesList countries={countriesData} />

          <Routes>
            <Route path="/:id" element={<CountryDetails />} />
          </Routes>

        </div>
      </div>
    </div>);
}
export default App;
