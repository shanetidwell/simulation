import React from 'react';

import{Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import Shelf from './components/Shelf';
import Item from './components/Item';
import AddInventory from './components/AddInventory'

export default (
    <Switch>
        <Route exact path = '/' component={Home}/>
        <Route path = '/shelf/:id' component={Shelf}/>
        <Route path = '/bin/:id' component={Item}/>
        <Route path = '/create/:id' component={AddInventory}/>
    </Switch>
)