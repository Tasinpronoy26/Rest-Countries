import React, { useState, useEffect }
    from 'react';
import Country from '../Country/Country';
import'./Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div className='container'>

            <h1>Hello From All Countries</h1>
            <p>Total Country: {countries.length}</p>
            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}>

                    </Country>)
                }

            </div>
        </div>
    );
};




export default Countries;