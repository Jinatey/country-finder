/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import s from '../../styles/Country.module.css';

import { icons } from 'react-icons';

import { IoMdArrowBack } from 'react-icons/io';

const CountryName = ({ country }) => {
  // const router = useRouter();
  if (!country) return <div>Loading!!!</div>;
  // const [country, setCountry] = useState([]);

  // useEffect(() => {
  //   if (!router.query.countryName) return;

  //   fetch(`https://restcountries.com/v2/name/${router.query.countryName}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       if (country.status === 404) {
  //         router.replace('/');
  //         // alert(country.message);
  //       }

  //       setCountry(data);
  //     });
  // }, [country.status, router, router.query.countryName]);

  // if (!country.length) return <div className='loading'>Loading...</div>;

  return (
    <div className={s.wrap}>
      <Link href='/'>
        <a className={s.backButton}>
          <span>
            <IoMdArrowBack />
          </span>{' '}
          Back
        </a>
      </Link>
      <div className={s.infoss}>
        <img src={country?.flags.png} alt='' />

        <div className='texts'>
          <div>
            {' '}
            <h2> {country?.name}</h2>
          </div>
          <div className={s.infos}>
            <div className='left'>
              <p>Native Name: {country?.nativeName}</p>
              <p>Population: {country?.population}</p>
              <p>Region: {country?.region}</p>
              <p>Subregion: {country?.subregion}</p>
              <p>capital: {country?.capital}</p>
            </div>

            <div className='right'>
              <p>Top Level Domain: {country?.topLevelDomain}</p>
              <p>Currencies: {country?.topLevelDomain}</p>
              <p>Languages: {country?.topLevelDomain}</p>
            </div>
          </div>
          <div className='bottom'>
            {country?.borders && (
              <p>
                Border Countries:{' '}
                {country?.borderCountries?.map((b) => (
                  <Link href={`/country/${b.name}`} key={b.name} passHref>
                    <button>{b.name}</button>
                  </Link>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://restcountries.com/v2/name/${params.countryName}`
  );
  const country = (await res.json())[0];

  const borderCountryRes = country?.borders
    ? await fetch(
        `https://restcountries.com/v2/alpha?codes=${country?.borders.toString()}`
      )
    : null;

  const borderCountries = await borderCountryRes?.json();
  const updatedCountry = { ...country, borderCountries };

  return {
    props: {
      country: updatedCountry,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://restcountries.com/v2/all');
  const countries = await res.json();

  const paths = countries.map((c) => ({ params: { countryName: c.name } }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default CountryName;
