import React, { Component } from 'react';
import logo from '../assets/images/sudrihack.png';
class Nav extends Component {
    render() {
        return (
            <nav className="flex items-center justify-around flex-wrap bg-white shadow-md">
                <Logo />
                <Links />
            </nav>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Sudrihack</span>
        );
    }
}

class Links extends Component {
    render() {
        return (
            <div className="static -mb-px flex">
                    <a className="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                        Accueil
                    </a>
                    <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                        Projets
                    </a>
                    <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8" href="#">
                        Partenaires
                    </a>
                    <a className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3" href="#">
                        Équipe
                    </a>
            </div>
        );
    }
}

class Searchbar extends Component {
    render() {
        return (
            <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
                <input type="search" name="serch" placeholder="Search" 
                    className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" />
                <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4">
                </i>
            </span>
        );
    }
}

export default Nav;