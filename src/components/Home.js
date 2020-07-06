import React, { Component } from 'react';
import Nav from './Nav';
import Background from '../assets/images/bg1.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Login />
            </div>
        );
    }
}

let sectionStyle = {
};

class Login extends Component {
    render() {
        return (
            <section className="w-full" style={ sectionStyle }>
                <div className="flex justify-center py-20">
                <div class=" container max-w-xs">
                    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Nom d'utilisateur
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nom d'utilisateur" />
                        </div>
                        <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                            Mot de passe
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p class="text-red-500 text-xs italic">Entrer votre mot de passe.</p>
                        </div>
                        <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Connection
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
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

export default Home