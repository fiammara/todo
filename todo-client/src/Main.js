
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';
import ArchiveList from './ArchiveList';

const Main = () => (
    <div clasName="SwitchDiv">
    <Switch>
        <Route exact path="/archive" component={ArchiveList} />
        <Route exact path="/todos" component={TodoList} />
    </Switch>
    </div>
);

export default Main;