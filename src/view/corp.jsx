import React from 'react';
import {  Route, Switch } from 'react-router';
import Apropos from './apropos';
import Courspatiserie from './coursPatiserie';
import Listepatiserie from './listePatiserie';

const Corp = () => {
    return (
        <div>
            <Switch>
                <Route path="/Liste_Patiserie" component={Listepatiserie} />
                <Route path="/Cours_Patiserie" component={Courspatiserie} />
                <Route path="/A_Propos" component={Apropos} />
            </Switch>
        </div>
    );
}

export default Corp;

