import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Dashboard/Home';

function Routes(){
    return (
        <Switch>
            <Route path="/dashboard" exact component={Home} />
        </Switch>
    );
}

export default Routes;