/* eslint-disable @next/next/no-img-element */
import { useState, useMemo } from 'react';
import Link from 'next/link';
import s from '../styles/Home.module.css';
import { icons } from 'react-icons';
import { IoMdArrowBack } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import Filter from '../components/Filter';

export default function Home({ countries }) {
  const [text, setText] = useState('');
  const [filter, setFilter] = useState('');

  const filterCountriesBySearch = countries?.filter((c) =>
    c.name.toLowerCase().includes(text.toLowerCase())
  );

  const filterCountriesByRegion = countries?.filter((c) =>
    c.region.includes(filter)
  );

  const filterToApply =
    text && filterCountriesBySearch.length
      ? filterCountriesBySearch
      : filterCountriesByRegion;

  return (
    <div className={s.search}>
      <div className={s.searchFilter}>
        <label htmlFor=''>
          <BiSearch className={s.icon} onClick={() => {}} />
          <input
            className={s.searchbox}
            placeholder='search a country'
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
          />
        </label>
        <Filter filter={filter} setFilter={setFilter} />
      </div>

      <div className={s.country}>
        {filterToApply?.map((country) => (
          <Link key={country.name} href={`/country/${country.name}`}>
            <div className={s.card}>
              <img src={country.flags.png} alt='' />
              <div className={s.texts}>
                <h2> {country.name} </h2>
                <p>
                  <span>Population:</span> {country.population}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Capital:</span> {country.capital}
                </p>
              </div>
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
