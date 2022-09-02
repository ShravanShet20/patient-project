import React from 'react';
import { NavLink,Link } from 'react-router-dom'


const CompNavBar = () =>
{


    return(
        <div>

        <NavLink activeClassName="active" 
        to={"/Patient-Search"} 
        style={{margin:"10px"}}> PatientSearch </NavLink>
        
        </div>
    )
}

export default CompNavBar;