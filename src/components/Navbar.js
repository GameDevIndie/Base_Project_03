import React, { useState, useContext } from 'react';
import Logo from '../assets/udemylogo.jpg';
//import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContext from '../store/auth-context';
//import Button from '../pages/Button';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const ctx = useContext(AuthContext);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt='Udemy' />
      </div>
      {/* <div className='rightSide'>
        <Link to='/home'> Home </Link>
        <Link to='/courses'> Courses </Link>
        <Link to='/teach'> Teach </Link>
        <Link to='/business'> Business </Link>
        <Link to='/'> Login </Link>
        <button onClick={toggleNavbar}></button>
      </div> */}
      
      {ctx.isLoggedIn && (
        <a href='/'>Home</a>
      )}
      {ctx.isLoggedIn && (
        <button>Logout</button>
      )}
    </div>
  );
}

export default Navbar;
