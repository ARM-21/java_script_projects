
import { Link } from 'react-router-dom';
import './country.css';
export default function Country({countryDetails}){
    return (
            <div className="country">
            <Link to={`./${countryDetails.name.common}`}>
                <img src={countryDetails.flags.svg} alt={countryDetails.flags.alt}/>
                <div className="country_info">
                    <h3>{countryDetails.name.common}</h3>
                    <p><b>Population: </b><span>{countryDetails.population.toLocaleString('en-np')}</span></p>
                    <p><b>Region:</b> <span>{countryDetails.region}</span></p>
                    <p><b>Capital: </b><span>{countryDetails.capital}</span></p>
                </div>
            </Link>
            </div>

    )
}