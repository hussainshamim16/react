import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar bg-color1 text-white ps-10 shadow-md">
      {/* Left: Logo/Name */}
      <div className="flex-1">
        <a className="text-2xl font-bold text-white">Sopra</a>
      </div>

      {/* Center: Menu Links */}
      <div className="flex-none hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-medium">
          <li><Link to='/'>Home</Link></li>
          <li><Link to=''>Features</Link></li>
          <li><Link to=''>About</Link></li>
          <li><Link to=''>Pricing</Link></li>

          
        </ul>
      </div>

      {/* End: Auth Buttons */}
      <div className="flex-none">
        <Link to='/login' className="btn  btn-sm btn-ghost  hover:bg-emerald-800 ">Login</Link>
        <Link to='/signup' className="btn bg-emerald-600 btn-sm bg-color3 ml-2 hover:bg-emerald-800 ">Sign Up</Link>
      </div>
    </div>
  );
};

export default Header;
