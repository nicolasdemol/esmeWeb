import React, { Component } from 'react';
import '../assets/css/Nav.css'
import '../assets/css/Nav.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';



class Nav extends Component {
    render() {
        return (
            <div className="flex flex-wrap flex-col sm:flex-row px-2 sm:px-20 py-2 items-center justify-between bg-white border border-gray-200 shadow-md">
                <Logo />
                <Links />
            </div>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <div className="flex px-10">
                <Link to={ROUTES.LANDING}><span className="logo-name font-bold text-indigo-500 antialiased text-3xl">Sudrihack</span></Link>
            </div>
        );
    }
}

class Links extends Component {
    render() {
        return (
            <nav className="flex items-center space-x-10">
                <ul className="flex flex-wrap justify-between text-gray-400 nav-links font-bold text-xl space-x-2 sm:space-x-8 ">
                    <li className="hover:text-indigo-500"><Link to={ROUTES.LANDING} >Accueil</Link></li>
                    <li className="hover:text-indigo-500"><Link to={ROUTES.PROJECTS} >Projets</Link></li>
                    <li className="hover:text-indigo-500"><Link to={ROUTES.PARTNERS} >Partenaires</Link></li>
                </ul>
                <Signbutton />
            </nav>
        );
    }
}

class Signbutton extends Component {
    render() {
        return (
            <div className="flex inline-flex">
                <button className="bg-indigo-400 hover:bg-indigo-500 text-white p-2 rounded-l">
                    <Link to={ROUTES.SIGN_IN}>Se connecter</Link>
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 p-2 rounded-r">
                    <Link to={ROUTES.SIGN_UP}>S'inscrire</Link>
                </button>
            </div>
        );
    }
}

export default Nav;
