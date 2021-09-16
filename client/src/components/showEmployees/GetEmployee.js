import React from 'react';
import './GetEmployee.css';
import axios from 'axios';

class ShowEmployees extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            employeeList:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:9700/getEmployees')
        .then((response)=>{
            this.setState({employeeList:response.data});
    
        }).catch((err)=>{
            console.log(err)
        })
    }
    render(){
        
        return(
            <>
                <table className="center">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Organization Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employeeList.map((employee, idx)=>{
                                console.log(employee)
                                return(
                                    <tr key={idx}>
                                        <th>{employee.employeesId}</th>
                                        <th>{employee.firstName}</th>
                                        <th>{employee.lastName}</th>
                                        <th>{employee.email}</th>
                                        <th>{employee.organization}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default ShowEmployees;