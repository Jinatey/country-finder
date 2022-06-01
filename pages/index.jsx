/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useState, useEffect } from 'react';
import s from '../styles/Home.module.css';

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  console.log(Array.isArray(countries));

  return (
    <div>
      <div className={s.country}>
        {countries.map((country) => (
          <div key={country.name} className={s.card}>
            <img src={country.flags.png} alt='' />
            <h2> {country.name} </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
