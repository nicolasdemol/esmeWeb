import React, { useEffect } from 'react';
import Table from './Table';
import { useState } from 'react';
import { rpgService } from '../services';

const Home = () => {
  return (
    <div className="h-screen pt-10 antialiased font-sans bg-gray-200 nav-links">
      <Form />
      <Table />
    </div>
  );
};

const Form = () => {
  const [action, setAction] = useState(Array);

  useEffect(() => {
    rpgService.getActions().then((response) => {
      setAction(response);
    });
    rpgService.getContributions()
    return ()=>{
      setAction(null)
    }
  }, []);

  return (
    <div className="container mx-auto mx-4 sm:px-8">
      <div className="pt-8 pb-2">
        <h2 className="text-2xl my-2 font-semibold text-blue-800 leading-tight">
          Classement RPG
        </h2>
        <div className="p-4 flex bg-gray-100 shadow rounded-lg">
          <div className="flex items-center w-full space-x-4">
            <div className="flex-1 relative">
              <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {action.map((value, index) => {
                  return <option key={index}>{value.nom}</option>;
                })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 relative">
              <input
                placeholder="Justification ..."
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex h-full">
              <button
                className="transition ease-in-out duration-300 bg-green-300 font-bold hover:bg-green-400 text-md text-green-900 px-4 rounded focus:outline-none"
                type="button"
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
