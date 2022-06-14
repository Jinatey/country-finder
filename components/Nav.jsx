import navS from '../styles/Nav.module.css';
import { icons } from 'react-icons';
import { MdOutlineDarkMode } from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${navS.navbar} ${darkMode ? navS.navbarDark : ''}`}>
      <div className={navS.texts}>
        <h1>Where in the world</h1>
        <p    onClick={() => {
              setDarkMode(!darkMode);
            }}>
          <MdOutlineDarkMode
         
          />{' '}
          Dark Mode
        </p>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts');
  const posts = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}

export default Nav;
