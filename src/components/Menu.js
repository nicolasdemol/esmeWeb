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
    <div class="relative inline-block text-left">
      <div>
        <span class="rounded-md shadow-sm">
          <button
            type="button"
            class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={handlerClick}
          >
            Options
            <svg
              class="-mr-1 ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
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
    <div class="origin-top-right relative md:absolute right-0 mt-4 w-56 rounded-md shadow-lg">
      <div
        class="rounded-md bg-white shadow-xs"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div class="py-1">
          <NavLink
            to={ROUTES.ACCOUNT}
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            <button role="menuitem">Paramètres</button>
          </NavLink>
        </div>
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
          <button
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Partager
          </button>
          <button
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Ajouter aux favoris
          </button>
        </div>
        <div class="border-t border-gray-100"></div>
        <div class="py-1">
          <NavLink
            to={ROUTES.LANDING}
            class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          >
            <button onClick={authService.doSignOut} role="menuitem">
              Se déconnecter
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
