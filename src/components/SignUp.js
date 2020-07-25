import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { authService } from '../services';

const SignUp = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  let isInvalid =
    firstname === '' || lastname === '' || email === '' || password === '';

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    authService
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');
        setError(null);
        history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const onChange = (handler, event) => {
    handler(event.target.value);
  };

  return (
    <section className="h-screen flex justify-center bg-gray-200">
      <div className="flex justify-center items-center my-20 sm:my-0">
        <div className="container max-w-md">
          <form
            onSubmit={onSubmit}
            className="w-full p-10 shadow-md bg-white px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                  Prénom
                </label>
                <input
                  name="firstname"
                  value={firstname}
                  onChange={(event) => onChange(setFirstname, event)}
                  className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jean"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                  Nom
                </label>
                <input
                  name="lastname"
                  value={lastname}
                  onChange={(event) => onChange(setLastname, event)}
                  className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Dupont"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={(event) => onChange(setEmail, event)}
                  className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="text"
                  placeholder="jean.dupont@gmail.com"
                />
                <p className="text-gray-600 text-xs italic">
                  Votre adresse doit être valide.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                  Mot de passe
                </label>
                <input
                  name="password"
                  value={password}
                  onChange={(event) => onChange(setPassword, event)}
                  className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                />
                {error && (
                  <p className="text-red-500 text-xs italic">{error.message}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                disabled={isInvalid}
                type="submit"
                className="transition ease-in-out duration-300 nav-links bg-teal-400 hover:bg-gray-300 text-blue-800 font-bold py-2 px-4 rounded focus:outline-none"
              >
                Créer mon compte
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Sudrihack Corp. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
