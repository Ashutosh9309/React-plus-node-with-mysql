import React from 'react';
import EmployeeData from './EmployeeData';
import Sidebar from './Sidebar';
import './Section.css';


const Section = ()=>{
    return(
        <>
            <Sidebar/>
            <EmployeeData/>
        </>
    )
}

export default Section