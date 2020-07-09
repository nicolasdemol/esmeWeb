import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <section className="w-full">
                <div className="flex justify-center my-20">
                <div className=" container max-w-xs">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-bold mb-2">
                            Mot de passe
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Entrer votre mot de passe.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Connection
                        </button>
                        <a className="inline-block px-2 align-baseline font-thin text-sm text-indigo-400 hover:text-indigo-700" href="http://sudrihack.com">
                            Mot de passe oublié ?
                        </a>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Sudrihack Corp. Tous droits réservés.
                    </p>
                </div>
                </div>
            </section>
        );
    }
}

export default SignIn;
