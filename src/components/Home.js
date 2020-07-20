import React, { Component } from 'react';
import { rpgService } from '../services';

class Home extends Component {

    componentDidMount(){
        rpgService.getActions().then(r => console.log(r))
        rpgService.getCategories().then(r => console.log(r))
        rpgService.getPointsRegistries().then(r => console.log(r))
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
