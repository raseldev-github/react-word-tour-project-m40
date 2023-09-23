import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {
    //    console.log(country)
       
    const {name, flags, population, area, cca3} = country;
       const [visited, setVisited] = useState(false)
       
       const handleVisited =()=>{
            // setVisited(true)
            setVisited(!visited)
       }
        //  console.log(handleVisitedCountries)
    
    

    return (
        <div className={`box ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'wheat'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Poputaltion: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() =>handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
            {visited ? 'I have visited this country.': 'I want to visit.'}
        </div>
    );
};

export default Country;