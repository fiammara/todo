import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from './TodoList';
import ArchiveList from './ArchiveList';

const NavContainer = () => (
    <Router>
        <div className="NavContainer">
           
                <ul>
                    <li>
                        <button className="NavButton">
                            <i className="fa fa-list ">
                            </i> <Link to="/todos" className="link">Todo List</Link>
                        </button>
                    </li>
                    <li>
                        <button className="NavButton">
                            <i className="fa fa-archive ">
                            </i> <Link to="/archive" className="link">Archived</Link>
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