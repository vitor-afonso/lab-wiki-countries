//jshint esversion:9

import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const CountryDetails = () => {

    const [country, setCountry] = useState(null);

    const{countryId} = useParams();

    useEffect(() => {

        (async ()=> {

            let foundCountry = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
            setCountry(foundCountry.data);

        })();

    }, [countryId]);

  return (
    <div className="col-5" >
        {country && 
        <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" style={{width: "200px"}}/>
            <h1>{country.name.common}</h1>
            <p><b>Capital:</b> {country.capital[0]}</p>
            <p><b>Area:</b> {country.area} km<sup>2</sup></p>

            <ul>
                {country.borders.map((countryName, index) => {
                    return (<p key={index.toString()}><b>Border - </b>{countryName}</p>)
                })}
            </ul>

        </div>}
    </div>

  )
}
