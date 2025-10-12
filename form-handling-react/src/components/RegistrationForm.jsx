import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            console.error('All fields are required');
            return;
        }
        console.log('Form submitted:', { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={handleChange} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={handleChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;