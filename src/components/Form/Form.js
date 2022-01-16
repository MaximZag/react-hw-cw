import React, {createRef} from 'react';

const Form = ({filterUsers}) => {

    const name = createRef()
    const username = createRef()
    const email = createRef()

    const getForm = (e) => {
        e.preventDefault()
        const data = {name: name.current.value, username: username.current.value, email: email.current.value}
        filterUsers(data)
    }

    return (
        <div>
            <form>
                <label>Name<input type="text" name={'name'} ref={name}/></label>
                <label>Username<input type="text" name={'username'} ref={username}/></label>
                <label>Email<input type="text" name={'email'} ref={email}/></label>
                <button onClick={getForm}>Filter</button>
            </form>

        </div>
    );

};

export default Form;

