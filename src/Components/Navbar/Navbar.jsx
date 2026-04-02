import React from 'react';
import logo from '../../assets/logo.png'
import dollarImg from '../../assets/DoubleDollar.png'

const Navbar = ({coin}) => {
    return (
     <div className="navbar bg-base-100  w-11/12 mx-auto flex justify-between">
  <div className="flex-1">
    <a className=""><img src={logo} alt="Logo" height="40" width='40'/></a>
  </div>
  <ul className='hidden md:flex justify-between gap-10 pr-5'>
    <li><a href=''>Home</a></li>
    <li><a href=''>Fixure</a></li>
    <li><a href=''>Team</a></li>
    <li><a href=''>Shedules</a></li>
  </ul>
  <div className="flex-none font-bold">
    <button className="btn flex items-center font-bold text-xl">
    ${coin}
     <img src={dollarImg} alt="Dollar" />
    
    </button>
  </div>
</div>
    );
};

export default Navbar;