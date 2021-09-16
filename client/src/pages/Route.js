import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home'
import EmployeeDetail from '../components/showEmployees/EmployeeData';


const Routes = ()=>{
    return(
        <Switch>
            <Route path='/getEmployess' exact component={EmployeeDetail}/>
            <Route path="/" exact component={Home}/>
        </Switch>
    )
}

export default Routes;