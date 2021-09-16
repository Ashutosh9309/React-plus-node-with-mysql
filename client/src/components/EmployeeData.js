import React from 'react';
import './EmployeeData.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
class EmployeeData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            organization:"",
        }
    }
    myChangeHandler = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    };

    addEmployee = (e)=>{
        e.preventDefault();
        alert('Employee Added Successfully!');
        axios.post('http://localhost:9700/addEmployee',{
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            password:this.state.password,
            organization:this.state.organization

        }).then((response)=>{
            this.setState({
                firstName:"",
                lastName:"",
                email:"",
                password:"",
                organization:"",
            })
            this.props.history.push('/getEmployess')
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <>
                <form onSubmit={this.addEmployee}>
                    <h1>Add Employee</h1>
                    <div className="App">
                        <div className="information">
                        <label>First Name:</label>
                        <input
                        type="text"
                        name='firstName'
                        value = {this.state.firstName}
                        onChange={this.myChangeHandler}
                        required
                        />
                        <label>Last Name:</label>
                        <input
                        type="text"
                        name="lastName"
                        value = {this.state.lastName}
                        onChange={this.myChangeHandler}
                        required
                        />
                        <label>Email Id:</label>
                        <input
                        type="email"
                        name="email"
                        value = {this.state.email}
                        onChange={this.myChangeHandler}
                        required
                        />
                        <label>Password:</label>
                        <input
                        type="password"
                        name="password"
                        value = {this.state.password}
                        onChange={this.myChangeHandler}
                        required
                        />
                        <label>Organization Name:</label>
                        <input
                        type="text"
                        name="organization"
                        value = {this.state.organization}
                        onChange={this.myChangeHandler}
                        required
                        />
                        <button type="submit" >Add Employee</button>
                    </div>
                    </div>
                    <p/>
                </form>
            </>         
        )
    }
    
}

export default withRouter(EmployeeData);