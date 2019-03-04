import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import TodoList from "./TodoList";
import ArchiveList from "./ArchiveList";

const App = () => (
    <BrowserRouter>
        <div>
        <div className="NavContainer"> 
            <button className="NavButton">
                <NavLink to="/">Home</NavLink>
            </button>

            <button className="NavButton">
                <i className="fa fa-list " />
                <NavLink to={{ pathname: "/todos" }}>Todo list</NavLink>
            </button>

            <button className="NavButton">
                <i className="fa fa-archive " />
                <NavLink to={{ pathname: "/archive" }}>Archived</NavLink>
            </button>
        </div>
            <Switch>
                <Route exact path="/archive" component={ArchiveList} />
                <Route exact path="/todos" component={TodoList} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
