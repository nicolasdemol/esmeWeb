import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { SignUpLink } from './SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';
 
const SignIn = () => (
    <div>
    <SignInForm />
    <SignUpLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        
        this.state = { ...INITIAL_STATE };
    }
    
    onSubmit = event => {
        event.preventDefault();
        
        const { email, password } = this.state;
    
        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
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
        const { email, password, error } = this.state;

        let isInvalid = password === '' || email === '';        
        return (
            <section className="w-full">
                <div className="flex justify-center my-10 sm:my-20">
                <div className=" container max-w-xs">
                    <form onSubmit={this.onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input name="email" value={email} onChange={this.onChange} className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                        </div>
                        <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-bold mb-2">
                            Mot de passe
                        </label>
                        <input name="password" value={password} onChange={this.onChange} className="shadow appearance-none border border-red-500 rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Entrer votre mot de passe.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button disabled={isInvalid} className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Connection
                        </button>
                        <a className="inline-block px-2 align-baseline font-thin text-sm text-indigo-400 hover:text-indigo-700" href="http://sudrihack.com">
                            Mot de passe oublié ?
                        </a>
                        </div>
                        {error && <p>{error.message}</p>}
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Sudrihack Corp. Tous droits réservés.
                    </p>
                </div>
                </div>
            </section>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
  )(SignInFormBase);

export default SignIn;

export { SignInForm };
