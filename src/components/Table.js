import React, { useState } from 'react';
import avatar from '../assets/images/avatar.png';
import ContentLoader from 'react-content-loader';

const Table = () => {
  const [select, setSelect] = useState('classement');
  return (
    <div>
      <Filter setSelect={setSelect} />
      {select === 'classement' ? <LeaderBoard /> : <MyLoader />}
    </div>
  );
};

const Filter = (props) => {
  const handleChange = (event) => {
    props.setSelect(event.target.value);
  };
  return (
    <div className="container sm:mx-auto mx-0">
      <div className="my-0 sm:my-2 flex mx-0 sm:mx-8">
        <div className="flex mb-1 sm:mb-0 rounded shadow">
          <div className="relative">
            <select
              onChange={handleChange}
              className="rounded-l appearance-none h-full block appearance-none w-full bg-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white"
            >
              <option value="classement">Classement</option>
              <option value="historique">Historique</option>
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
          <div className="relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-500"
              >
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input
              placeholder="Rechercher"
              className="rounded-r block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const LeaderBoard = () => {
  return (
    <section className="container mx-auto px-0 sm:px-8">
      <div className="mx-0 sm:-mx-8 px-0 sm:px-8 py-2 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Dernière Action
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars2.githubusercontent.com/u/34476900?s=460&u=e5fb58f1de0c83c3863362cd67f36a9e2eeece50&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Nicolas Demol
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">66</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Commit dépôt
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 21, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Actif</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars3.githubusercontent.com/u/17236303?s=460&u=8c814331f7a0ea0c86eb5e57def6056b71c7b42e&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Léo Borniche
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">42</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Commit dépôt
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 21, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Actif</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars1.githubusercontent.com/u/8136763?s=460&u=58b328dfea7a6654132cfe48f8c3998f5cea8fd5&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Guillaume Roux
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">18</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Commit dépôt
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 19, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Actif</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars1.githubusercontent.com/u/44473020?s=460&u=2956781aaf8eebe45acfa8d180b95e5f01e6e637&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Clément Reiffers
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">7</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Participation Réunion
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 17, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Actif</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Nicolas Groult
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">3</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Participation Teams
                  </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 15, 2020
                  </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">Actif</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Tabs = () => {
  return (
    <section className="container mx-auto px-0 sm:px-8">
      <div className="mx-0 sm:-mx-8 px-0 sm:px-8 py-2 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Utilisateur
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Points
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Catégorie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars3.githubusercontent.com/u/17236303?s=460&u=8c814331f7a0ea0c86eb5e57def6056b71c7b42e&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Léo Borniche
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">10</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Commit dépôt
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 21, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Programmation
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars2.githubusercontent.com/u/34476900?s=460&u=e5fb58f1de0c83c3863362cd67f36a9e2eeece50&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Nicolas Demol
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">10</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Commit dépôt
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 21, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Programmation
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars1.githubusercontent.com/u/8136763?s=460&u=58b328dfea7a6654132cfe48f8c3998f5cea8fd5&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Guillaume Roux
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">10</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Commit dépôt
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 19, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Programmation
                  </p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars1.githubusercontent.com/u/44473020?s=460&u=2956781aaf8eebe45acfa8d180b95e5f01e6e637&v=4"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Clément Reiffers
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">5</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Participation Réunion
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 17, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Social</p>
                </td>
              </tr>
              <tr>
                <td className="px-5 py-5 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={avatar}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Nicolas Groult
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">1</p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Participation Teams
                  </p>
                </td>
                <td className="px-5 py-5 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    Juil 15, 2020
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Social</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const MyLoader = (props) => (
  <section className="container mx-auto px-0 sm:px-8">
    <ContentLoader
      className="w-full"
      speed={2}
      backgroundColor="#eee"
      foregroundColor="#ccc"
      {...props}
    >
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="350" height="10" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="350" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="350" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="350" height="10" />
    </ContentLoader>
  </section>
);

export default Table;
