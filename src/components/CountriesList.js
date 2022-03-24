//jshint esversion:9

import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const CountriesList = ({countries}) => {


  return (
    
    

    <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>

        <div class="list-group">

            {countries.map(oneCountry => {
                
                return (
                    
                    <Link to={`/${oneCountry.alpha3Code}`} className="list-group-item list-group-item-action">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54//${oneCountry.alpha2Code}.png`} alt="flag"/>
                        {oneCountry.name.common}
                    </Link>
                );

            })}
        
        </div>

    </div>
    
  )
}
