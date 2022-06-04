/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import s from '../styles/Home.module.css';

export default function Home({ countries }) {
  const [text, setText] = useState('');

  //   useEffect(() => {
  //     async function getCountryData() {
  //       const res = await fetch('https://restcountries.com/v2/all');
  //       const data = await res.json();
  //       setCountries(data);
  //     }
  //     getCountryData();
  // //use effect therey meethi beynun kurey (react bunefa inty use effect therey data fetch nukuran// misaalakah react query beynun kuraany data fetch kuran)
  //     // fetch('https://restcountries.com/v2/all')
  //     //   .then((res) => res.json())
  //     //   .then((data) => {
  //     //     setCountries(data);
  //     //   });
  //   }, []);

  if (!countries.length) return <div>LOADING...</div>;
  console.log(text.toLowerCase());

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className={s.search}>
      <input
        className={s.searchbox}
        placeholder='search a country'
        value={text}
        onChange={(e) => setText(e.target.value)}
        type='text'
      />
      <div className={s.country}>
        {filteredCountries.map((country) => (
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

export async function getStaticProps() {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
}
