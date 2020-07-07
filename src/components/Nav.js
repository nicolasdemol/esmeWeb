import React, { Component } from 'react';
import '../assets/css/Nav.css';
import { Link } from 'react-router-dom';

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
                <Link to={"/"}><span className="logo-name font-bold text-indigo-500 antialiased text-3xl">Sudrihack</span></Link>
            </div>
        );
    }
}

class Links extends Component {
    render() {
        return(
            <nav className="flex items-center space-x-10">
                <ul className="flex flex-wrap justify-between text-gray-400 nav-links font-bold text-xl space-x-2 sm:space-x-8 ">
                    <li className="hover:text-indigo-500"><Link to={"/"} >Accueil</Link></li>
                    <li className="hover:text-indigo-500"><Link to={"/projects"} >Projets</Link></li>
                    <li className="hover:text-indigo-500"><Link to={"/partners"} >Partenaires</Link></li>
                </ul>
                <Signbutton />
            </nav>
        );
    }
}

class Signbutton extends Component {
    render() {
        return (
            <div class="inline-flex">
                <button class="bg-indigo-400 hover:bg-indigo-500 text-white py-2 px-2 rounded-l">
                    <Link to={"/login"}>Se connecter</Link>
                </button>
                <button class="bg-gray-300 hover:bg-gray-400 text-gray-600 py-2 px-2 rounded-r">
                    <Link to={"/login"}>S'inscrire</Link>
                </button>
            </div>
        );
    }
}

export default Nav;