import React, { useState, useEffect } from 'react'
import { apiUrl } from '../env/config';
import { useParams } from "react-router-dom";


function EmployeeDetail() {

    const {id} = useParams();

    const [employeeDetail, setEmployee] = useState({});

    useEffect(() => {

        fetch(apiUrl + '/api/suppliers/' + id)
        .then((res) => res.json())
        .then((data) => {
            setEmployee(data);
        })

    }, [])

    return (
        <>
            <h1>Employee Detail Page - {id}</h1>
            <span>Company Name: {employeeDetail.companyName}</span>
            <hr></hr>
            <span>Contact Name: {employeeDetail.contactName}</span>
            <hr></hr>
            <span>Contact Title: {employeeDetail.contactTitle}</span>
        </>
    )
}

export default EmployeeDetail
