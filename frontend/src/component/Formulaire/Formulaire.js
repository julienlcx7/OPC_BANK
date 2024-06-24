import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Formulaire.css';

const Formulaire = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.postReducer.error);
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
        </form>
    );
};

export default Formulaire;
