import React, { Component } from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withFirebase } from '../Firebase';

import Nav from './Nav';
import Landing from './Landing';
import Projects from './Projects';
import Partners from './Partners';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordForget from './PasswordForget';
import Home from './Home';
import Account from './Account';
import Admin from './Admin';

import * as ROUTES from '../constants/routes';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav authUser={this.state.authUser} />
          
          <Switch>
            <Route exact={true} path={ROUTES.LANDING} component={ Landing }/>
            <Route path={ROUTES.PROJECTS} component={ Projects }/>
            <Route path={ROUTES.PARTNERS} component={ Partners }/>
            <Route path={ROUTES.SIGN_IN} component={ SignIn }/>
            <Route path={ROUTES.SIGN_UP} component={ SignUp }/>
            <Route path={ROUTES.PASSWORD_FORGET} component={ PasswordForget }/>
            <Route path={ROUTES.HOME} component={ Home }/>
            <Route path={ROUTES.ACCOUNT} component={ Account }/>
            <Route path={ROUTES.ADMIN} component={ Admin }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
