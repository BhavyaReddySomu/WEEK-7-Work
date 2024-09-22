import React from 'react';

const UserInfo = ({ name, age, email }) => {
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserInfo;
