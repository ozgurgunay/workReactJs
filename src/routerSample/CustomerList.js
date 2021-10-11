import React, { useState, useEffect } from 'react'
import { apiUrl } from '../env/config';

function CustomerList() {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getCustomers();

    }, []);

    const getCustomers = () => {
        fetch(apiUrl + '/api/customers')
            .then((res) => res.json())
            .then((data) => {
                setCustomers(data);
                setLoading(false);
            }, 1500);
    }

    const deleteCustomer = (id) => {
        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        };

        let result = window.confirm('Silmek istediğinizden emin misiniz?');

        if (result) {
            // silme işlemi yap
            console.log('Silme işlemi yap!');
            fetch(apiUrl + '/api/customers/' + id, requestOptions)
                .then((res) => res.json())
                .then((data) => {
                    console.log('DELETED!!');
                    getCustomers();
                })
        }
        
       
    }

    return (
        <>
            {
                // loading == true ? (<span>loading....</span>) : <></>
                loading === <span>loading....</span>
            }
            <ul>
                {
                    customers.map((item, key) => (
                        <>
                            <li>{item.companyName}</li>

                            <button onClick={() => deleteCustomer(item.id)}>Delete</button>
                        </>
                    ))
                }
            </ul>
        </>
    )
}

export default CustomerList
