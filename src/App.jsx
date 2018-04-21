import React, {Component} from 'react';
import {createBrowserHistory} from 'history';
import Home from './components/Home';


export default class App extends Component {
    constructor() {
        super();
        this.history = createBrowserHistory();
    }

    render() {
        return(
            <Home/>
        )
    }
}