import React from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Project from '../Project/Project'
import Task from '../Task/Task'
import User from '../User/User'
import ViewTask from '../Task/ViewTask'
import './HeaderContent.css';
class HeaderContent extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    {/* <div className="container-fluid">
                        <div className="nav-style">
                            <ul className="nav nav-tabs header ">
                                <div className="row">
                                    <div className=" col-md-12">
                                        <li className="nav-name"><NavLink exact to="/"><div className="text">Add User</div></NavLink></li>
                                        <li className="nav-name"><NavLink to="/Project">Add Project</NavLink></li>
                                        <li className="nav-name"><NavLink to="/AddTask">Add Task</NavLink></li>
                                        <li className="nav-name"><NavLink exact to="/ViewTask">View Task</NavLink></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div> */}

                    <div className="container-fluid">
                        <div className="nav-style">
                            <ul className="nav nav-tabs header">
                                <div className="row">
                                    <div className=" col-md-12">
                                        <li className="nav-name"><NavLink exact to="/"><div className="text">Add User</div></NavLink></li>
                                        <li className="nav-name"><NavLink to="/Project">Add Project</NavLink></li>
                                        <li className="nav-name"><NavLink to="/AddTask">Add Task</NavLink></li>
                                        <li className="nav-name"><NavLink exact to="/ViewTask">View Task</NavLink></li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="content">
                        <Route exact path="/" component={User} />
                        <Route path="/Project" component={Project} />
                        <Route path="/AddTask" component={Task} />
                        <Route path="/ViewTask" component={ViewTask} />
                    </div>
                </BrowserRouter>
            </div>


        )
    }
}

export default HeaderContent;