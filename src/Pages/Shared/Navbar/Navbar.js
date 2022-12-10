import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const menuItems = <>
    <li><NavLink className="m-1" to="/home">Home</NavLink></li>
    <li><a className="m-1" href="https://form.jotform.com/223433296548058" target={`_blank`}>Contact</a></li>
    <li><a className="m-1" href="#projects">Project</a></li>
  </>

  return (
    <div className='dark:bg-gray-600 bg-slate-400 sticky top-0 z-50'>
      <div className='container mx-auto'>
        <div className="navbar p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {menuItems}
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl" to="/">Yusuf Khan</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItems}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn mr-2 sm:mr-0 btn-outline" href='https://drive.google.com/file/d/1qleVLJGI5jU6fmDItFsJISNvf6v3UZCs/view' target={`_blank`}>Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;