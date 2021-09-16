import React from 'react';
import './Sidebar.css';
import {Link} from 'react-router-dom'
const Sidebar = ()=>{
    return(
        <>
            <nav>
                <ul>
                <li><Link to='/'>Add Employess</Link></li>
                <li><Link to='/getEmployess'>All Employees</Link></li>
                
                </ul>
            </nav>
      </>
    )
}

export default Sidebar;