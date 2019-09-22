import React from 'react';
import axios from "axios";
import './User.css';
import swal from 'sweetalert';
import { PROJECT_MANAGER_API } from '../Constant/Constant'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            empId: '',
            addData: [],
            getData: [],
            flag: false,
            updateId: 0,
            filteredValue: '',
            filteredItems: '',
            sort: 0,
            errormsg: "Fill the mandatory fields!",
            errorIDmsg: "Employee Id should be of 6 digits!"
        };
    }

    onFirstChange(e) {
        this.setState({ firstName: e.target.value })
    }

    onLastChange(e) {
        this.setState({ lastName: e.target.value })
    }

    onEmpId(e) {
        this.setState({ empId: e.target.value })
    }

    cancelCourse() {
        this.setState({
            firstName: '',
            lastName: '',
            empId: ''
        })
    }

    onAddUser(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            empId: this.state.empId
        }
        if (this.state.firstName.length > 0 && this.state.lastName.length > 0 && this.state.empId.length > 0) {
            if (this.state.empId.length === 6) {
                axios.post(PROJECT_MANAGER_API + "user/saveUser", user)
                    .then(res => {
                        this.setState({ addData: res.data });
                        this.getUserData();
                    });
                this.setState(prevState => ({
                    firstName: "",
                    lastName: "",
                    empId: ""
                }))
            }
            else {
                swal(this.state.errorIDmsg)
            }
        }
        else {
            swal(this.state.errormsg)
        }
    }

    componentDidMount() {
        axios.get(PROJECT_MANAGER_API + "user/getAllUsers")
            .then(res => {
                this.setState({ getData: res.data });
            });
    }

    getUserData() {
        axios.get(PROJECT_MANAGER_API + "user/getAllUsers")
            .then(res => {
                this.setState({ getData: res.data });
            });
    }

    updateUser(id, fname, lname, employeeId) {
        this.setState({ flag: true })
        this.setState({ updateId: id })
        this.setState({ firstName: fname })
        this.setState({ lastName: lname })
        this.setState({ empId: employeeId })
    }

    deleteUser(id) {
        axios.delete(PROJECT_MANAGER_API + "user/deleteUser/" + id).then(res => {
            this.getUserData();
        })
    }

    onUpdate(id, e) {
        e.preventDefault()
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            empId: this.state.empId
        }
        axios.put(PROJECT_MANAGER_API + "user/updateUser/" + id, user).then(res => {
            this.getUserData();
        })
        this.setState(prevState => ({
            firstName: "",
            lastName: "",
            empId: "",
            flag: false
        }))
    }

    sortByFname(count) {
        if (count === 0) {
            this.setState({
                getData: Array.from(this.state.getData).sort((a, b) => a.firstName.localeCompare(b.firstName))
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                getData: Array.from(this.state.getData).sort((a, b) => b.firstName.localeCompare(a.firstName))
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    sortByLname(count) {
        if (count === 0) {
            this.setState({
                getData: Array.from(this.state.getData).sort((a, b) => a.lastName.localeCompare(b.lastName))
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                getData: Array.from(this.state.getData).sort((a, b) => b.lastName.localeCompare(a.lastName))
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    sortByEmpId(count) {
        if (count === 0) {
            this.setState({
                getData: Array.from(this.state.getData).sort((a, b) => (a.empId - b.empId))
            })
            count++
            this.setState({ sort: count })
        } else {
            this.setState({
                getData: Array.from(this.state.getData).sort((a, b) => (b.empId - a.empId))
            })
            count = 0
            this.setState({ sort: count })
        }
    }

    changeFilterValue(e) {
        this.setState({ filteredValue: e.target.value })
    }

    renderUser() {
        return (
            this.state.filteredItems
        )
    }

    render() {
        if (this.state.getData) {
            this.state.filteredItems = this.state.getData.filter(getData => getData.firstName.toUpperCase().includes(this.state.filteredValue.toUpperCase())
                ||
                getData.lastName.toUpperCase().includes(this.state.filteredValue.toUpperCase())).map((getData, index) => {
                    return (
                        <div>
                            <div class='row'>
                                <div className='col-12 col-md-9'>
                                    <input type='text' key={getData.userId} className='form-control' value={getData.firstName} readOnly />
                                    <input type='text' key={getData.lastName} className='form-control' value={getData.lastName} readOnly />
                                    <input type='text' key={getData.empId} className='form-control' value={getData.empId} readOnly />
                                </div>
                                <div className='col-12 col-md-3'>
                                    <button type="button" className="btn btn-primary" onClick={this.updateUser.bind(this, getData.userId, getData.firstName, getData.lastName, getData.empId)}>UPDATE</button>
                                    <button type="button" className="btn btn-danger" onClick={this.deleteUser.bind(this, getData.userId)}>DELETE</button>
                                </div>
                            </div>

                            <hr className='table-line'></hr>
                        </div>
                    );
                });
        }

        return (
            <div className='container-fluid'><br />
                <div className='row'>
                    <div className='col-md-1'>
                        <div className="vl"></div>
                    </div>
                    <div className='col-md-9'>
                        <form className='form-group card' id="userForm"><br />
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label>First Name :</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text' className="form-control" id='firstName' value={this.state.firstName}
                                        onChange={this.onFirstChange.bind(this)} />
                                </div>
                                <div className='col-md-1'></div>
                            </div> <br />
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label>Last Name :</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text' className="form-control" id='lastName' value={this.state.lastName}
                                        onChange={this.onLastChange.bind(this)} />
                                </div>
                                <div className='col-md-1'></div>
                            </div> <br />
                            <div className='row'>
                                <div className='col-md-3'>
                                    <label>Employee ID :</label>
                                </div>
                                <div className='col-md-8'>
                                    <input type='text' minLength='6' maxLength='6' className="form-control" id='empId' value={this.state.empId}
                                        onChange={this.onEmpId.bind(this)} />
                                </div>
                                <div className='col-md-1'></div>
                            </div>
                            <div className='row'>
                                {/* <div className='col-md-8'></div> */}
                                <div className="buttonAlignment">
                                    <div className='row'>
                                        {this.state.flag === false ?
                                            <div >
                                                <button type='submit' className='btn btn-secondary' id='addBtn' onClick={this.onAddUser.bind(this)}>Add</button>
                                            </div> :
                                            <div>
                                                <button type='submit' className='btn btn-secondary' id='updateBtn' onClick={this.onUpdate.bind(this, this.state.updateId)}>Update</button>
                                            </div>
                                        }
                                        <div>
                                            <button type='button' className='btn btn-secondary' id='cancelBtn' onClick={this.cancelCourse.bind(this)} value="Reset">Reset</button>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            </div>
                        </form>
                        <hr className='hr-line' />
                        <div className="row">
                            <div className='col-sm-5'>
                                <input type='text' className='form-control' placeholder="Search..." onChange={this.changeFilterValue.bind(this)} />
                            </div>
                            <div className='col-sm-3'>
                                <b>Sort Users By:</b>
                            </div>

                            <div className='col-md-1'>
                                <button type='button' className="btn btn-info btn-sm" onClick={this.sortByFname.bind(this, this.state.sort)}>First Name</button>
                            </div>

                            <div className='col-md-1'>
                                <button type='button' className="btn btn-info btn-sm" onClick={this.sortByLname.bind(this, this.state.sort)}>Last Name</button>
                            </div>

                            <div className='col-md-1'>
                                <button type='button' className="btn btn-info btn-sm" onClick={this.sortByEmpId.bind(this, this.state.sort)}>Employee Id</button>
                            </div>

                        </div>
                        <br />
                        <div className="row">
                            <div className='col-md-12'>
                                {this.renderUser()}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
            </div>
        )
    }
}

export default User;