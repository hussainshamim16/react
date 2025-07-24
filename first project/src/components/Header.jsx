import React from 'react';

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
          <li><a>Home</a></li>
          <li><a>Features</a></li>
          <li><a>About</a></li>
          <li><a>Pricing</a></li>
        </ul>
      </div>

      {/* End: Auth Buttons */}
      <div className="flex-none">
        <button className="btn  btn-sm btn-ghost  hover:bg-emerald-800 ">Login</button>
        <button className="btn bg-emerald-600 btn-sm bg-color3 ml-2 hover:bg-emerald-800 ">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
