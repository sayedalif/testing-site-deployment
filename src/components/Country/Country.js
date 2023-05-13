import React from 'react';
import './Country.css';

const Country = (props) => {
  let { country } = props;

  let { name, population, region, subregion, flags } = country;
  console.log("🚀 ~ file: js:5 ~ Country ~ country:", country);

  return (
    <div className='country-container'>
      <h1>country name: {name.official}</h1>
      <h2>population: {population}</h2>
      <h3>region : {region}</h3>
      <h3>subregion: {subregion}</h3>
      <img src={flags.png} alt="flags" />
    </div>
  );
};

export default Country;