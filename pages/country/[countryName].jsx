/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import s from '../../styles/Country.module.css';
import { IoMdArrowBack } from 'react-icons/io';

const CountryName = ({ country }) => {
  if (!country) return <div>Loading!!!</div>;

  console.log(country);

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
            {country?.borderCountries && (
              <p>
                Border Countriesborders:
                {country?.borderCountries.map((b) => (
                  <Link href={`/country/${b.name}`} key={b.name}>
                    <button>{b.name} </button>
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
  const response = await fetch(
    `https://restcountries.com/v2/name/${params.countryName}`
  );
  const country = (await response.json())[0];

  const borderCountryResponse = country?.borders
    ? await fetch(
        `https://restcountries.com/v2/alpha?codes=${country?.borders.toString()}`
      )
    : null;

  const borderCountries = await borderCountryResponse?.json();
  const updatedCountry = { ...country, borderCountries };

  return {
    props: {
      country: updatedCountry,
    },
  };
}

export async function getStaticPaths() {
  const paths = [{ params: { countryName: 'Afghanistan' } }];

  return {
    paths: paths,
    fallback: true,
  };
}

export default CountryName;
