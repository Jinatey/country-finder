/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import s from '../../styles/Country.module.css';

const CountryName = () => {
  const router = useRouter();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    if (!router.query.countryName) return;

    fetch(`https://restcountries.com/v2/name/${router.query.countryName}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (country.status === 404) {
          router.replace('/');
          // alert(country.message);
        }

        setCountry(data);
      });
  }, [country.status, router, router.query.countryName]);

  if (!country.length) return <div className='loading'>Loading...</div>;

  return (
    <div className={s.wrap}>
      <Link href='/'>
        <a className={s.backButton}>Back</a>
      </Link>
      <div className={s.infos}>
        <img src={country[0]?.flags.png} alt='' />

        <div className='texts'>
          <div>
            {' '}
            <h2> {country[0]?.name}</h2>
          </div>
          <div className={s.infos}>
            <div className='left'>
              <p>Native Name: {country[0]?.nativeName}</p>
              <p>Population: {country[0]?.population}</p>
              <p>Region: {country[0]?.region}</p>
              <p>Subregion: {country[0]?.subregion}</p>
              <p>capital: {country[0]?.capital}</p>
            </div>

            <div className='right'>
              <p>Top Level Domain: {country[0]?.topLevelDomain}</p>
              <p>Currencies: {country[0]?.topLevelDomain}</p>
              <p>Languages: {country[0]?.topLevelDomain}</p>
            </div>
          </div>
          <div className='bottom'>
            {country[0]?.border && (
              <p>
                Border Countries:{' '}
                {country[0]?.borders.map((b) => (
                  <button key={b}>{b}</button>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryName;
