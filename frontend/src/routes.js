import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import New from './pages/New';
import Profile from './pages/Profile';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/profile" component={Profile} />
                <Route path="/new" component={New} />
            </Switch>
        </BrowserRouter>
    )
}