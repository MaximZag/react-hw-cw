import './App.css';
import {useEffect, useState} from "react";

import Users from "./components/Users/Users";
import Form from "./components/Form/Form";

function App() {

    const [users, setUsers] = useState([])
    const [filusers, setFilUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value])
                setFilUsers([...value])
            })
    }, [])

    const filterUsers = (form) => {

        let filterForm = [...users]

        if (form.name) {
            filterForm = filterForm.filter(user => user.name.toLowerCase().includes(form.name.toLowerCase()))
        }
        if (form.username) {
            filterForm = filterForm.filter(user => user.username.toLowerCase().includes(form.username.toLowerCase()))
        }
        if (form.email) {
            filterForm = filterForm.filter(user => user.email.toLowerCase().includes(form.email.toLowerCase()))
        }
        setFilUsers(filterForm)
    }


    return (
        <div>
            <Form filterUsers={filterUsers}/>
            <Users users={filusers}/>
        </div>
    );
}

export default App;
