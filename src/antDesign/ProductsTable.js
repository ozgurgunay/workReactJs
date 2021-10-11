import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { apiUrl } from '../env/config'


function ProductsTable() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();

    }, []);

    const getProducts = () => {

        fetch(apiUrl + '/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }

    const deleteProducts = (id) => {
        let requestOptions = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        };

        fetch(apiUrl + '/api/products/' + id, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                getProducts();
            })
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
            key: 'unitPrice',
            sorter: (a, b) => a.unitPrice - b.unitPrice
            // sorter listelemeyi değistirmemizi saglıyor
        },
        {
            title: 'Quantity Per Unit',
            dataIndex: 'quantityPerUnit',
            key: 'quantityPerUnit'
        },
        {
            title: 'Delete',
            dataIndex: 'id',
            key: 'id',
            render: (id) => <Button danger onClick={() => deleteProducts(id)}>Delete</Button>
        }
    ];

    return (
        <>
            <Table dataSource={products} columns={columns} pagination={{ defaultPageSize: 15 }}></Table>
        </>
    )
}

export default ProductsTable
