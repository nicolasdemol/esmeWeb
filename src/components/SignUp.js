import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';

const SignUp = () => (
    <div className="flex justify-center">
        <SignUpForm />
    </div>
);

const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: null,
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }
    
    onSubmit = event => {
        event.preventDefault()
        
        const { email, password } = this.state;
        
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error => {
            this.setState({ error });
        });
        
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

        let isInvalid = firstname === '' || lastname === '' || email === '' || password === '';

        return (
            <div className="h-screen flex justify-center items-center my-40 sm:my-0">
            <form onSubmit={this.onSubmit} className="w-full max-w-lg p-10 shadow-md">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" >
                        Prénom
                    </label>
                    <input name="firstname" value={firstname} onChange={this.onChange} className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jean" />
                    <p className="text-red-500 text-xs italic">Remplissez cette case.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2" >
                        Nom
                    </label>
                    <input name="lastname" value={lastname} onChange={this.onChange} className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Dupont" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                        Email
                    </label>
                    <input name="email" value={email} onChange={this.onChange} className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="text" placeholder="jean.dupont@gmail.com" />
                    <p className="text-gray-600 text-xs italic">Votre adresse doit être valide.</p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                        Mot de passe
                    </label>
                    <input name="password" value={password} onChange={this.onChange} className="shadow appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                    <p className="text-gray-600 text-xs italic">Faîtes au plus long que vous pouvez.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                        <button disabled={isInvalid} type="submit" className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Créer mon compte
                        </button>
                        {error && <p>{error.message}</p>}
                </div>
            </form>
            </div>
        );
    }
}

const SignUpLink = () => (
    <p className="text-center text-gray-500 text-xs">
        Vous n'avez pas encore de compte ? <Link className="underline" to={ROUTES.SIGN_UP}>S'inscrire</Link>
    </p>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
    )(SignUpFormBase); 

export default SignUp;
export { SignUpForm , SignUpLink };