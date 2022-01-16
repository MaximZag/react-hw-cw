import React from 'react';
import {useState} from "react";

const Form = ({filterUsers}) => {

    const [form, setForm] = useState({name: '', username: '', email: ''});

    const formFunction = (e) => {
        const data = {...form, [e.target.name]: e.target.value}
        setForm({...data})
    }

    const getForm = (e) => {
        e.preventDefault()
        filterUsers(form)
    }
    return (
        <div>
            <form>
                <label>Name<input type="text" name={'name'} value={form.name} onChange={formFunction}/></label>
                <label>Username<input type="text" name={'username'} value={form.username}
                                      onChange={formFunction}/></label>
                <label>Email<input type="text" name={'email'} value={form.email} onChange={formFunction}/></label>
                <button onClick={getForm}>Filter</button>
            </form>

        </div>
    );

};

export default Form;

