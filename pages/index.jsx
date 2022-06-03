/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Link from 'next/link';
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

  if (!countries.length) return <div>LOADING...</div>;

  return (
    <div>
      <div className={s.country}>
        {countries.map((country) => (
          <Link key={country.name} href={`/country/${country.name}`}>
            <div className={s.card}>
              <img src={country.flags.png} alt='' />
              <h2> {country.name} </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
