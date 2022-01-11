const User = (props) => {
    const {id, name, username, email, street} = props;

    return (
        <div>

            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>street: {street}</div>
        </div>
    );
};

export default User;