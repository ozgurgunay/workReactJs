import React, { useEffect, useState } from 'react'
import { apiUrl } from '../env/config';

import {
    Link
} from "react-router-dom";
import AddEmployee from './AddEmployee';



function Employees() {

    const [employees, setEmployees] = useState([]);


    useEffect(() => {

        getEmployees();

    }, [])

    const getEmployees = () => {
        fetch(apiUrl + '/api/suppliers')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);   //burasını acarsan console da her employees sayfasını yenilediğinde tekrar basıldıgını görüceksin
                setEmployees(data);
            })
    }

    //dısarıdan aldıgım datayı servise bırakan function:
    const add = (data) => {
        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        };
        fetch(apiUrl + '/api/suppliers', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log('employee eklendi', data);
                getEmployees();
            })
    }

    const deleteEmployee = (id) => {
        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        };
        fetch(apiUrl + '/api/suppliers/' + id, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log('DELETED!!');
                getEmployees();
            })
    }



    return (
        <>
            <AddEmployee addEmployee={add}></AddEmployee>

            <h1>Employees</h1>

            <ul>
                {
                    employees && employees.map((item, key) => (
                        <>
                            <li key={key}><Link to={'/employees/' + item.id}>{item.companyName}</Link></li>
                            {<button onClick={() => deleteEmployee(item.id)}>Delete</button>}
                        </>
                    ))
                }
            </ul>


        </>
    )
}

export default Employees
