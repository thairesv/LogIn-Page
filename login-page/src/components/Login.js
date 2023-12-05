import React, { useState } from 'react';
import './login.css';

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName === 'admin' && password === 'password') {
            setLoggedIn(true);
            setError('');
        } else if (userName === '' || password === '') {
            setError('Please enter a username and password');
        } else {
            setError('Invalid username or password');
            setPassword('');
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserName('');
        setPassword('');
        setError('');
    };

    const handleUserChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    if (loggedIn) {
        return (
            <div className="login-form">
                <h1>Welcome, {userName}!</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else if (error) {
        return (
            <div className="login-form">
                <h1>Error</h1>
                <p>{error}</p>
                <button onClick={() => setError('')}>Back</button>
            </div>
        );
    }

    return (
        <div className="login-form">
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input type="text" value={userName} onChange={handleUserChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                {error && <div>{error}</div>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;