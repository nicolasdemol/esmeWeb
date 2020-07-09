import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../constants/routes';

const SignUp = () => (
    
    <div className="flex justify-center">
        <FirebaseContext.Consumer>
            {firebase => <SignUpForm firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: null,
};

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { INITIAL_STATE };
    }
    
    onSubmit = event => {
        const { firstname, lastname, email, password } = this.state;
     
        this.props.firebase
          .doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            this.setState({ INITIAL_STATE });
          })
          .catch(error => {
            this.setState({ error });
          });
     
        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            firstname,
            lastname,
            email,
            password,
            error,
          } = this.state;

        const isInvalid = firstname === '' || lastname === '' || email === '' || password === '';

        return (
            <form onSubmit={this.onSubmit} className="w-full max-w-lg my-20 p-10 shadow-md">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" >
                        Prénom
                    </label>
                    <input name="firstname" value={firstname} onChange={this.onChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jean" />
                    <p className="text-red-500 text-xs italic">Remplissez cette case.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" >
                        Nom
                    </label>
                    <input name="lastname" value={lastname} onChange={this.onChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Dupont" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                        Email
                    </label>
                    <input name="email" value={email} onChange={this.onChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="jean.dupont@gmail.com" />
                    <p className="text-gray-600 text-xs italic">Votre adresse doit être valide.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label name="password" value={password} onChange={this.onChange} className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                        Mot de passe
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p className="text-gray-600 text-xs italic">Faîtes au plus long que vous pouvez.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                        <button disabled={isInvalid} type="submit" className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Crée mon compte
                        </button>
                        {error && <p>{error.message}</p>}
                </div>
            </form>
        );
    }
}

const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
);
 

export default SignUp;
export { SignUpForm , SignUpLink };