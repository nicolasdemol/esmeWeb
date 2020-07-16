import React, { Component } from 'react';
import '../assets/css/Nav.css'
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import logo from "../assets/images/favicon.png";
import SignOutButton from './SignOut';

class NavAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isTop: false
        }
    }
    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY > 5;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        })
    }

    handlerClick() {
        this.setState({isActive: !this.state.isActive})
    }

    render() {
        console.log(this.state.isTop)
        return (
            <div className={`${this.state.isTop ? 'shadow-xl' : ''} ${"transform fixed w-full z-30 top-0 flex flex-wrap items-center justify-between p-2 sm:px-20 bg-blue-900 border border-blue-900"}`}>
                <div className="flex flex-grow justify-around lg:justify-between items-center">
                    <Logo /> 
                    <button type="button" onClick={this.handlerClick.bind(this)} className="md:hidden focus:outline-none">
                        <Navbutton />
                    </button>
                </div>
                <div className={`${this.state.isActive ? "h-20 md:h-auto" : "h-0 md:h-auto"} ${"flex transition-all overflow-hidden lg:overflow-visible duration-150 linear flex-wrap lg:flex-grow-0 flex-grow justify-center space-x-4 lg:space-x-10"}`}>
                    <Links authUser={this.props.authUser} />
                    {!this.props.authUser
                    ?
                            <Signbutton />
                    :
                            <Link to={ROUTES.LANDING} className="flex justify-center items-center nav-links">
                                <SignOutButton />
                            </Link>
                    }
                    
                </div>
            </div>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <Link to={ROUTES.LANDING}>
                <div className="flex -mb-1 justify-between space-x-4">
                        <img className="h-10 w-8" src={logo} alt="logo" />
                        <span className="logo-name  font-bold text-white antialiased text-3xl">Sudrihack</span>
                </div>
            </Link>
        );
    }
}

class Navbutton extends Component {
    render() {
        return (
            <div className="block text-gray-500 hover:text-white">
                    <svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z">
                            </path>
					</svg>
            </div>
        );
    }
}

class Links extends Component {
    render() {
        return (
            <div id="nav-toggle" className="flex items-center">
                <ul className="flex flex-wrap justify-between my-1 text-white nav-links text-md space-x-4 sm:space-x-10">
                    {this.props.authUser
                        ? <li className="block transition ease-in-out duration-300 hover:text-teal-400"><Link to={ROUTES.HOME} >Utilisateur</Link></li>
                        :
                        <li className="block transition ease-in-out duration-300 hover:text-teal-400"><Link to={ROUTES.LANDING} >Accueil</Link></li>
                    }
                    <li className="block transition ease-in-out duration-300 hover:text-teal-400"><Link to={ROUTES.PROJECTS} >Projets</Link></li>
                    <li className="block transition ease-in-out duration-300 hover:text-teal-400"><Link to={ROUTES.PARTNERS} >Partenaires</Link></li>
                </ul>
            </div>
        );
    }
}

class Signbutton extends Component {
    render() {
        return (
            <div className="block inline-flex justify-center nav-links">
                <Link to={ROUTES.SIGN_IN}>
                    <button className="transition ease-in-out duration-300 bg-teal-400 font-bold hover:bg-gray-400 text-md text-blue-900 p-2 rounded-l focus:outline-none">
                        Se connecter
                    </button>
                </Link>
                <Link to={ROUTES.SIGN_UP}>
                    <button className="transition ease-in-out duration-300 bg-white font-bold hover:bg-gray-400 text-md text-blue-900 p-2 rounded-r focus:outline-none">
                        S'inscrire
                    </button>
                </Link>
            </div>
        );
    }
}

export default NavAuth