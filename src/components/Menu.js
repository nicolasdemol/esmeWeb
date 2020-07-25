import React, { useState } from 'react';
import { authService } from '../services';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

const Menu = () => {
  const [isActive, setActive] = useState(false);
  const handlerClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={handlerClick}
          >
            Options
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      {isActive ? <DropdownMenu /> : ''}
    </div>
  );
};

const DropdownMenu = () => {
  return (
    <div className="origin-top-right relative md:absolute right-0 mt-4 w-56 rounded-md shadow-lg">
      <div
        className="rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1">
          <NavLink
            to={ROUTES.ACCOUNT}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Paramètres
          </NavLink>
        </div>
        <div className="border-t border-gray-100"></div>
        <div className="py-1">
          <div
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Partager
          </div>
          <div
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Ajouter aux favoris
          </div>
        </div>
        <div className="border-t border-gray-100"></div>
        <div className="py-1">
          <NavLink
            to={ROUTES.LANDING}
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            onClick={authService.doSignOut}
            role="menuitem"
          >
            Se déconnecter
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
