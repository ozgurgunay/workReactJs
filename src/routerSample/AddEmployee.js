import React, {useState} from 'react'

function AddEmployee(props) {

    const [companyName, setName] = useState('');
    const [contact, setContact] = useState('');
    const [title, setTitle] = useState('');

    const add = () => {
        let newEmployee = {
            companyName:companyName,
            contactName:contact,
            contactTitle:title
        };
        props.addEmployee(newEmployee)
    }

    return (
        <>
            <div>
                <label>Company Name:</label>
                <input type='text' value={companyName} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
                <label>Contact Name:</label>
                <input type='text' value={contact} onChange={(e) => setContact(e.target.value)}></input>
            </div>
            <div>
                <label>Contact Title:</label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => add()}>Add</button>
            </div>
        </>
    )
}

export default AddEmployee
