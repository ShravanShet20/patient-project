//Our Patient Presentation Component

import {useRef, useState} from 'react';

const PatientSearch = (props) => {

    let textRef = useRef();

    let [state, setState] = useState({search:" "});

    
  


    const listofPatients = () =>
    {
        console.log("1. Inside Patient List Presentation Components");
        props.listPatients();
    }

    const handleChange = (event) =>
    {

        setState
        (
            {
                ...state,
                [event.target.name]: event.target.value 



            }
        );

        props.searchPatient(event.target.value);
    
    }

    

    return (
        <div style={{ border: '5px solid purple' }}>
        <br />

        <table border="0">
        Patient List:

        {props.patients && props.patients.map( (item,key) => 
        <tr>
            <td> {key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr> )}
        
        </table>

        <table border="7">
        
        {props.searchedPatients && props.searchedPatients.map( (item,key) => 
        <tr>
            <td>{key} </td> 
            <td> {item.name} </td> 
            <td> {item.email} </td>
        </tr>)}
        
        </table>


        <br/><br/>
        <input type="text" ref={textRef} name="search" value={state.search}
        onChange = {event => handleChange(event)} /> 
        {/* &nbsp; */}
        {/* <button onClick={addNewPatient} > Add Patient </button> */}

        {/* <br/><br/>
        <button onClick={listofPatients} > List Patients (External)  </button> */}
        
        <br/><br/>
        Current value of search:{state.search}

        </div>
    )
}

export default PatientSearch;