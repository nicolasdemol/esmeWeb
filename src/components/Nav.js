import React, { Component } from 'react';
import '../assets/css/Nav.css'
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';



class Nav extends Component {
    render() {
        return (
            <div id="header" className="fixed w-full z-30 top-0 flex flex-col flex-wrap items-center justify-between lg:flex-row p-2 sm:px-20 bg-white border border-gray-200 shadow-md">
                <Logo />
                <div className="flex flex-col-reverse justify-center space-x-0 md:space-x-4 lg:space-x-10 md:flex-row">
                    <Links />
                    <Signbutton />
                </div>
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
            <div id="nav-toggle" className="flex items-center">
                <button type="button" className="hidden block text-gray-500 hover:text-white">
                    <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z">
                            </path>
					</svg>
                </button>
                <ul className="flex flex-wrap justify-between my-1 text-gray-400 nav-links font-bold text-xl space-x-4 sm:space-x-8 ">
                    <li className="block hover:text-indigo-500"><Link to={ROUTES.LANDING} >Accueil</Link></li>
                    <li className="block hover:text-indigo-500"><Link to={ROUTES.PROJECTS} >Projets</Link></li>
                    <li className="block hover:text-indigo-500"><Link to={ROUTES.PARTNERS} >Partenaires</Link></li>
                </ul>
            </div>
        );
    }
}

class Signbutton extends Component {
    render() {
        return (
            <div className="flex inline-flex justify-center my-2">
                <button id="navAction" className="bg-indigo-400 hover:bg-indigo-500 text-white p-2 rounded-l">
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
