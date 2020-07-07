import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <section className="w-full">
                <div className="flex justify-center py-20">
                <div class=" container max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="username">
                            Nom d'utilisateur
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom d'utilisateur" />
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-600 text-sm font-bold mb-2" for="password">
                            Mot de passe
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Entrer votre mot de passe.</p>
                        </div>
                        <div class="flex items-center justify-between">
                        <button className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Connection
                        </button>
                        <a class="inline-block px-2 align-baseline font-thin text-sm text-indigo-400 hover:text-indigo-700" href="http://sudrihack.com">
                            Mot de passe oublié ?
                        </a>
                        </div>
                    </form>
                    <p class="text-center text-gray-500 text-xs">
                        &copy;2020 Sudrihack Corp. Tous droits réservés.
                    </p>
                </div>
                </div>
            </section>
        );
    }
}

export default Login;