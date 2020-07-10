import React, { Component } from 'react';
import SignOutButton from './SignOut';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <SignOutButton />
            </div>
        );
    }
}

export default Home;
