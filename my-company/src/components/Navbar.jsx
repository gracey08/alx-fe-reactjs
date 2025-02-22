import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#007BFF',
        padding: '15px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.2em',
          padding: '5px 10px',
          ':hover': { backgroundColor: '#0056b3' }
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.2em',
          padding: '5px 10px'
        }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.2em',
          padding: '5px 10px'
        }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{
          color: 'white',
          textDecoration: 'none',
          fontSize: '1.2em',
          padding: '5px 10px'
        }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;