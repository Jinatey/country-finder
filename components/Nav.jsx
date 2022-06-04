import navS from '../styles/Nav.module.css'


const Nav = () => {
  return (
    <div className={navS.navbar}>

      <div className={navS.texts}>
        <h1>Where in the world</h1>
        <p>Dark Mode</p>
        </div>
    </div>

  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://.../posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Nav