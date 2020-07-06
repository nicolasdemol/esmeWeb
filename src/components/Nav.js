import React, { Component } from 'react';
import '../assets/css/Nav.css'
import logo from '../assets/images/sudrihack.png';

class Nav extends Component {
    render() {
        return (
            <nav className="flex flex-wrap flex-col sm:flex-row px-2 sm:px-20 py-2 items-center justify-between bg-white border border-gray-200 ">
                <Logo />
                <Links />
            </nav>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <div className="flex px-10">
                <span className="logo-name font-semibold text-indigo-900 antialiased text-3xl">Sudrihack</span>
            </div>
        );
    }
}

class Links extends Component {
    render() {
        return(
            <div>
                <ul className="flex flex-wrap justify-between text-gray-600 nav-links text-xl space-x-2 sm:space-x-8 ">
                    <li className="hover:text-gray-800"><a href="http://sudrihack.com">Accueil</a></li>
                    <li className="hover:text-gray-800"><a href="http://sudrihack.com">Projets</a></li>
                    <li className="hover:text-gray-800"><a href="http://sudrihack.com">Partenaires</a></li>
                    <li className="hover:text-gray-800"><a href="http://sudrihack.com">Équipe</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;