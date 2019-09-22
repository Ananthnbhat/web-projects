import React from "react";
import axios from "axios";
import './Task.css';
import swal from 'sweetalert';
import { PROJECT_MANAGER_API } from '../Constant/Constant'

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 1),
      priority: this.props.update ? this.props.priority : "0",
      taskName: this.props.taskName || '',
      value: true,
      filterKeyword: "",
      filterKeyword2: "",
      filterKeyword3: "",
      projectDetails: [],
      project: this.props.projectName || '',
      parentTaskDetails: [],
      parentTask: this.props.parentTaskName,
      user: this.props.userName || '',
      status: "",
      usersDetails: [],
      projectId: this.props.projectId,
      userId: this.props.userId,
      id: this.props.id,
      parentTaskId: this.props.parentId,
      errormsg: "Fill the mandatory fields properly!!"
    };
  }

  componentWillMount = () => {
    this.setStartEndDates();
    axios.get(PROJECT_MANAGER_API + "projects/getProjects")
      .then(res => {
        this.setState({ projectDetails: res.data });
      });

    axios.get(PROJECT_MANAGER_API + "parentTask/getParentTasks")
      .then(res => {
        this.setState({ parentTaskDetails: res.data });
      });

    axios.get(PROJECT_MANAGER_API + "user/getAllUsers")
      .then(res => {
        this.setState({ usersDetails: res.data });
      });
  };

  setStartEndDates() {
    var todaysDate = new Date();
    var date = todaysDate.toISOString().substr(0, 10);
    this.setState({ startDate: date });
    var nxtDate = new Date();
    nxtDate.setDate(nxtDate.getDate() + 1);
    this.setState({ endDate: nxtDate.toISOString().substr(0, 10) });
  };

  rowClicked(projectDetails) {
    this.setState({ projectId: projectDetails.projectId })
    this.setState({ project: projectDetails.projectName });
  };

  rowClicked2(parentTaskDetails) {
    this.setState({ parentTaskId: parentTaskDetails.parentId })
    this.setState({ parentTask: parentTaskDetails.parentTaskName });
  };

  rowClicked3(userDetails) {
    this.setState({ userId: userDetails.userId })
    let fullName = userDetails.firstName + " " + userDetails.lastName;
    this.setState({ user: fullName });
  };

  changeFilterValue(e) {
    this.setState({ filterKeyword: e.target.value });
  };

  changeFilterValue2(e) {
    this.setState({ filterKeyword2: e.target.value });
  };

  changeFilterValue3(e) {
    this.setState({ filterKeyword3: e.target.value });
  };

  onTaskChange(e) {
    this.setState({ taskName: e.target.value });
  };

  handleChangeStartDate(e) {
    let newStartDate = e.target.value;
    this.setState({ startDate: newStartDate });
  }

  handleChangeEndDate(e) {
    let newEndDate = e.target.value;
    this.setState({ endDate: newEndDate });
  }

  onPriority(e) {
    this.setState({ priority: e.target.value });
  }

  onDisable() {
    if (this.state.value === true) {
      this.setState({ value: false });
    } else {
      this.setState({ value: true });
    }
  };

  onSubmit(e) {
    e.preventDefault();
    if ((this.state.project.length > 0 && this.state.taskName.length > 0 && this.state.value === false) || (this.state.project.length > 0 && this.state.taskName.length > 0 && this.state.value === true && this.state.user.length > 0)) {
      if (this.state.value === false) {
        const parentTask = {
          taskName: this.state.taskName
        }
        axios.post(PROJECT_MANAGER_API + "parentTask/save", parentTask)
        this.setState({
          project: '',
          taskName: ''
        })
      } else {
        const task = {
          userId: this.state.userId,
          taskName: this.state.taskName,
          startDate: this.state.startDate,
          endDate: this.state.endDate,
          priority: this.state.priority,
          status: this.state.status,
          projectId: this.state.projectId,
          parentTaskId: this.state.parentTaskId
        };
        axios.post(PROJECT_MANAGER_API + "tasks/saveTask", task)
        this.setState(prevState => ({
          priority: "0",
          taskName: '',
          project: '',
          parentTask: '',
          user: '',
          status: "",
          projectId: '',
          userId: '',
          parentTaskId: '',
          startDate: new Date(),
          endDate: new Date().setDate(new Date().getDate() + 1),
        })
        )
      }
    }
    else {
      swal(this.state.errormsg);
    }
  }

  onUpdate() {
    const task = {
      id: this.state.id,
      userId: this.state.userId,
      taskName: this.state.taskName,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      priority: this.state.priority,
      status: this.state.status,
      projectId: this.state.projectId,
      parentId: this.state.parentTaskId
    };
    axios.put(PROJECT_MANAGER_API + "tasks/updateTask/" + this.state.id, task)
    this.props.callBk();

  }

  cancelBtnClicked() {
    this.setState({
      priority: "0",
      taskName: '',
      project: '',
      parentTask: '',
      user: '',
      status: "",
      projectId: '',
      userId: '',
      parentTaskId: '',
      startDate: new Date(),
      endDate: new Date().setDate(new Date().getDate() + 1),
    })
  }

  resetParentTask = () => {
    this.setState({ parentTask: ' ' })
    this.setState({ parentTaskId: 0 })
  }

  render() {
    let filteredItems;
    if (this.state.projectDetails) {
      filteredItems = this.state.projectDetails.filter(projectDetails =>
        projectDetails.projectName.toUpperCase().includes(this.state.filterKeyword.toUpperCase()))
        .map((projectDetails, index) => {
          return (
            <tr data-dismiss="modal" onClick={this.rowClicked.bind(this, projectDetails)}>
              <td key={index + projectDetails.projectName}>{projectDetails.projectName}</td>
            </tr>
          );
        });
    }

    let filteredItems2;
    if (this.state.parentTaskDetails) {
      filteredItems2 = this.state.parentTaskDetails.filter(parentTaskDetails =>
        parentTaskDetails.parentTaskName.toUpperCase().includes(this.state.filterKeyword2.toUpperCase()))
        .map((parentTaskDetails, index) => {
          return (
            <tr data-dismiss="modal" onClick={this.rowClicked2.bind(this, parentTaskDetails)}>
              <td key={index + parentTaskDetails.parentTaskName}>{parentTaskDetails.parentTaskName}</td>
            </tr>
          );
        });
    }

    let filteredItems3;
    if (this.state.usersDetails) {
      filteredItems3 = this.state.usersDetails.filter(userDetails =>
        userDetails.firstName.toUpperCase().includes(this.state.filterKeyword3.toUpperCase()) ||
        userDetails.empId.toUpperCase().includes(this.state.filterKeyword3.toUpperCase()))
        .map((userDetails, index) => {
          return (
            <tr data-dismiss="modal" onClick={this.rowClicked3.bind(this, userDetails)}>
              <td key={index + userDetails.empId}>{userDetails.empId}</td>
              <td key={index + userDetails.firstName}>{userDetails.firstName} {userDetails.lastName}</td>
            </tr>
          );
        });
    }

    return (
      <div className="container-fluid">
        <br />
        <div className='row'>
          <div className='col-md-1'>
            <div className="vl"></div>
          </div>
          <div className='col-md-9'>
            <form className="form-group card" classID="myForm"><br />
              <div className="row">
                <div className="col-md-2">
                  <label>Project:</label>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control" value={this.state.project} disabled />
                </div>
                <div className="col-md-1">

                  <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#myModal" disabled={this.props.update}>Search</button>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Project Search</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                      </div>
                      <div className="modal-body">
                        <input type="text" placeholder="search.." className="form-control" onChange={this.changeFilterValue.bind(this)} />
                        <table className="table table-borderless table-condensed table-hover">
                          <thead>
                            <tr>
                              <th className="text-center">Project</th>
                            </tr>
                          </thead>
                          <tbody>{filteredItems}</tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-2">
                  <label>Task:</label>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" onChange={this.onTaskChange.bind(this)} value={this.state.taskName} />
                </div>
              </div><br />
              <div className="row">
                <div className="col-sm-1" />
                <div className="col-sm-4">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" onChange={this.onDisable.bind(this)} />
                      Parent Task
                </label>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-2">
                  <label>Priority :</label>
                </div>
                <div className="col-sm-8">
                  <form className="range-field my-4 w-100">
                    <input type="range" className="custom-range" id="tickmarks" onChange={this.onPriority.bind(this)}
                      value={this.state.priority} min="0" max="30" disabled={!this.state.value} />
                  </form>
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>Parent Task :</label>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" value={this.state.parentTask} disabled={!this.state.value}/>
                </div>
                <div className="col-sm-1">
                  <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#myModal2" onClick={this.componentWillMount} disabled={!this.state.value} >
                    Search
              </button>

                  <button type="button" className="btn btn-secondary" onClick={this.resetParentTask.bind(this)} disabled={!this.state.value} >
                    Reset
              </button>


                </div>
                <div className="modal fade" id="myModal2" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Parent Task Search</h4>
                        <button type="button" className="close" data-dismiss="modal"> &times;</button>
                      </div>
                      <div className="modal-body">
                        <input type="text" placeholder="search.." className="form-control" onChange={this.changeFilterValue2.bind(this)} />
                        <table className="table table-borderless table-condensed table-hover">
                          <thead>
                            <tr>
                              <th className="text-center">parentTask Name</th>
                            </tr>
                          </thead>
                          <tbody>{filteredItems2}</tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" > Close </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {this.props.update ?
                <div className="row">
                  <div className="col-sm-2">
                    <label>Start Date :</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="Date" className="form-control" defaultValue={this.props.startDate} onChange={this.handleChangeStartDate.bind(this)}
                      disabled={!this.state.value} />
                  </div>
                  <div className="col-sm-2">
                    <label>End Date:</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="Date" min={this.state.startDate} defaultValue={this.props.endDate} onChange={this.handleChangeEndDate.bind(this)}
                      className="form-control" disabled={!this.state.value} />
                  </div>
                </div>
                :
                <div className="row">
                  <div className="col-sm-2">
                    <label>Start Date :</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="Date" className="form-control" defaultValue={this.state.startDate} onChange={this.handleChangeStartDate.bind(this)}
                      disabled={!this.state.value} />
                  </div>
                  <div className="col-sm-2">
                    <label>End Date:</label>
                  </div>
                  <div className="col-sm-3">
                    <input type="Date" min={this.state.startDate} defaultValue={this.state.endDate} onChange={this.handleChangeEndDate.bind(this)}
                      className="form-control" disabled={!this.state.value} />
                  </div>
                </div>
              }

              <br />
              <div className="row">
                <div className="col-sm-2">
                  <label>User:</label>
                </div>
                <div className="col-sm-8">
                  <input type="text" className="form-control" value={this.state.user} disabled={!this.state.value} />
                </div>

                <div className="col-sm-1">
                  {this.props.update !== true ?
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#myModal3" disabled={!this.state.value}>Search </button> :
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#myModal3" disabled={!this.state.value}>Search </button>
                  }
                </div>
                <div className="modal fade" id="myModal3" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Search User</h5>
                        <button type="button" className="close" data-dismiss="modal">  &times; </button>
                      </div>
                      <div className="modal-body">
                        <input type="text" placeholder="search.." className="form-control" onChange={this.changeFilterValue3.bind(this)} />
                        <table className="table table-borderless table-condensed table-hover">
                          <thead>
                            <tr>
                              <th className="text-center">EMPLOYEE ID</th>
                              <th className="text-center">NAME</th>
                            </tr>
                          </thead>
                          <tbody>{filteredItems3}</tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div>
                <div className="buttonAlignment">
                  {this.props.update ?
                    <button type="submit" className="btn btn-secondary" onClick={this.onUpdate.bind(this)}>Update Task</button> :
                    <button type="submit" className="btn btn-secondary" onClick={this.onSubmit.bind(this)}>Add Task</button>
                  }
                  <button type="button" className="btn btn-secondary" onClick={this.cancelBtnClicked.bind(this)} >Cancel</button>
                </div>
              </div><br />
            </form>
          </div>
          <div className='col-md-2'></div>
        </div>
      </div>
    );
  }
}

export default Task;
