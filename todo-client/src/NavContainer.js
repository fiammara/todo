import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from './TodoList';
import ArchiveList from './ArchiveList';

const NavContainer = () => (
    <Router>
        <div className="NavContainer">

            <ul>
                <li>
                    <button className="Navbutton">
                        <Link to="/todos" className="link">Todos</Link>
                    </button>
                </li>
                <li>
                    <button className="Navbutton">
                        <Link to="/archive" className="link">Archive</Link>
                    </button>
                </li>
            </ul>
            <hr />

            <Route exact path="/archive" component={ArchiveList} />
            <Route exact path="/todos" component={TodoList} />
        </div>
    </Router>

);






export default NavContainer;