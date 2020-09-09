import { Route, Switch, BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import Registration from '../LoginBar/Registration/Registration.js';
import Login from '../LoginBar/Login/Login.js';
import Dashboard from './../Dashboard';

class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route path='/register' component={Registration} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}
}
export default (Routers);
