import React from 'react';
import axios from 'axios'
import Task from './Task'
import { PROJECT_MANAGER_API } from '../Constant/Constant'
import { withRouter } from "react-router-dom";

class ViewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: '',
            projectDetails: [],
            filterKeyword: '',
            details: [],
            projectName: '',
            taskDetails: [],
            id: '',
            taskName: '',
            startDate: '',
            endDate: '',
            priority: 0,
            flag: false,
            goToUpdate: 0,
            userId: '',
            userName: '',
            parentId: '',
            parentName: '',
            projectId: '',
            sort: 0
        };
    }

    componentWillMount() {
        axios.get(PROJECT_MANAGER_API + "projects/getProjects").then(res => {
            this.setState({ projectDetails: res.data })
        });
    }

    changeFilterValue(e) {
        this.setState({ filterKeyword: e.target.value })
    }

    rowClicked(projectDetails) {
        this.setState({ details: projectDetails })
        this.setState({ projectName: projectDetails.projectName })
        this.setState({ projectId: projectDetails.projectId });
        axios.get(PROJECT_MANAGER_API + "tasks/SearchTask/" + projectDetails.projectId).then(res => {
            this.setState({ taskDetails: res.data })
        })
    }

    sortByStartDate(count) {
        if (count === 0) {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => {
                    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
                })
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => {
                    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
                })
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    sortByEndDate(count) {
        if (count === 0) {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => {
                    return new Date(a.endDate).getTime() - new Date(b.endDate).getTime()
                })
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => {
                    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
                })
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    sortByPriority(count) {
        if (count === 0) {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => (a.priority - b.priority))
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => (b.priority - a.priority))
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    sortByCompleted(count) {
        if (count === 0) {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => b.status.localeCompare(a.status))
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                taskDetails: Array.from(this.state.taskDetails).sort((a, b) => a.status.localeCompare(b.status))
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    updateTask(id, name, startDate, endDate, priority, projectId, projectName, parentId, parentName, userId, userName) {
        this.setState({ id: id });
        this.setState({ taskName: name });
        this.setState({ startDate: startDate });
        this.setState({ endDate: endDate });
        this.setState({ priority: priority });
        this.setState({ projectId: projectId });
        this.setState({ projectName: projectName });
        this.setState({ userName: userName });
        this.setState({ parentId: parentId });
        this.setState({ parentName: parentName });
        this.setState({ userId: userId });
        this.setState({ goToUpdate: 1 })
    }

    completeTask(id) {
        axios.put(PROJECT_MANAGER_API + "tasks/deleteTask/" + id).then(res => {
            axios.get(PROJECT_MANAGER_API + "tasks/SearchTask/" + this.state.projectId).then(res => {
                this.setState({ taskDetails: res.data })
            })
        })
    }

    renderTask() {
        return (
            this.state.taskDetails.map((data,i) =>
                <tr key={i}>
                    <td className='jumbotron'>{data.taskName}</td>
                    <td className='jumbotron'>{data.parentName}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    <td>{data.priority}</td>
                    <td>
                        {data.status !== 'complete' ?
                            <div className='row'>
                                <div className='col-12 col-md-5'>
                                    <button type="button" className="btn btn-primary" onClick={this.updateTask.bind(this, data.taskId,
                                        data.taskName, data.startDate, data.endDate, data.priority, data.projectId, data.projectName,
                                        data.parentTaskId, data.parentName, data.userId, data.userName)}>UPDATE</button>
                                </div>
                                <div className='col-12 col-md-7'>

                                    <button type="button" className="btn btn-danger" onClick={this.completeTask.bind(this, data.taskId)}>END TASK</button>
                                </div>
                            </div>
                            : <button type="button" className="btn btn-danger" disabled>COMPLETED TASK</button>}
                    </td>
                </tr>
            )
        )
    }

    setGoToUpdate = () => {
        this.setState({ goToUpdate: 0 })
    }

    reloadComponent = () => {
        this.setState({ goToUpdate: 0 })
        this.setState({ projectName: '' })
        this.setState({ taskDetails: [] })
    }

    render() {
        let filteredItems;
        if (this.state.projectDetails) {
            filteredItems = this.state.projectDetails.filter(projectDetails => projectDetails.projectName.toUpperCase().includes(this.state.filterKeyword.toUpperCase())).map((projectDetails, index) => {
                return (
                    <tr data-dismiss='modal' onClick={this.rowClicked.bind(this, projectDetails)}>
                        <td key={projectDetails.projectName}> {projectDetails.projectName}</td>
                    </tr>
                );
            });
        }

        return (
            <div>
                {this.state.goToUpdate ?
                    <div> <Task id={this.state.id} taskName={this.state.taskName} startDate={this.state.startDate} endDate={this.state.endDate}
                        priority={this.state.priority} update={true} parentTaskName={this.state.parentName} parentId={this.state.parentId}
                        projectId={this.state.projectId} projectName={this.state.projectName} userId={this.state.userId} userName={this.state.userName} callBk={this.reloadComponent.bind(this)} />
                        <button className="btn btn-success" onClick={this.setGoToUpdate.bind(this)}>Go Back</button>
                    </div> :
                    <div className='container-fluid'>
                        <br /><br />
                        <form className='form-group' classID='myForm' id="myNewForm">
                            <div className='row' id="selectProject">
                                <div className='col-sm-1'></div>
                                <div className='col-3 col-sm-1'>
                                    <label>Project </label>
                                </div>
                                <div className='col-5 col-sm-3'>
                                    <input type='text' className="form-control" name='manager' placeholder={this.state.projectName} disabled={true} />
                                </div>
                                <div className='col-2  col-sm-1'>
                                    <button type='button' className="btn btn-secondary searchBtn" data-toggle="modal" data-target="#myModal">Search</button>
                                </div>
                                <div className='col-12 col-sm-1'>
                                    <b>Sort Task By:</b>
                                </div>

                                <div className='col-6 col-sm-1'>
                                    <button type='button' className="btn btn-info btn-sm" onClick={this.sortByStartDate.bind(this, this.state.sort)}>StartDate</button>
                                </div>

                                <div className='col-6 col-sm-1'>
                                    <button type='button' className="btn btn-info btn-sm" onClick={this.sortByEndDate.bind(this, this.state.sort)}>End Date</button>
                                </div>

                                <div className='col-6 col-sm-1'>
                                    <button type='button' className="btn btn-info btn-sm" onClick={this.sortByPriority.bind(this, this.state.sort)}>Priority</button>
                                </div>

                                <div className='col-6 col-sm-1'>
                                    <button type='button' className="btn btn-info btn-sm" onClick={this.sortByCompleted.bind(this, this.state.sort)}>Completed</button>
                                </div>

                            </div>
                            <hr />

                            <div className="modal fade" id="myModal" role="dialog">
                                <div className="modal-dialog">
                                    <div className='modal-content'>
                                        <div className='modal-header'>
                                            <h5 className='modal-title'>Search Manager</h5>
                                            <button type='button' className='close' data-dismiss='modal'>&times;</button>
                                        </div>
                                        <div className='modal-body'>
                                            <input type='text' placeholder='search..' className='form-control' onChange={this.changeFilterValue.bind(this)} />
                                            <table className="table table-borderless table-condensed table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">PROJECT NAME</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredItems}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='modal-footer'>
                                            <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col col-md-2'></div>
                                <div className='col col-md-9'>
                                    <table className="table table-responsive table-borderless">
                                        <thead>
                                            <tr>
                                                <th className="text-center">TASK NAME</th>
                                                <th className="text-center">PARENT TASK NAME</th>
                                                <th className="text-center">START DATE</th>
                                                <th className="text-center">END DATE</th>
                                                <th className="text-center">PRIORITY</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderTask()}
                                        </tbody>
                                    </table>
                                </div>
                                <div className='col col-md-1'></div>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(ViewTask);