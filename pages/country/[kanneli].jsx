import React from 'react';
import { useRouter } from 'next/router';

const CountryName = () => {
  const router = useRouter();

  console.log(router.query.kanneli);

  return (
    <div style={{ fontSize: '2rem', background: 'darkblue', color: 'silver' }}>
      <div>
        {' '}
        <span style={{ backgroundColor: 'black' }}>
          {' '}
          what you&apos;ve written is{' '}
        </span>{' '}
        {router.query.kanneli}{' '}
      </div>
    </div>
  );
};

export default CountryName;
