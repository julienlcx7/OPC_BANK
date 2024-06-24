import React, { useState } from 'react';
import './Account_name.css';  // Ensure your CSS file has appropriate styles
import { useDispatch, useSelector } from 'react-redux';
import { getPseudo } from '../../actions/pseudo.action';  // Ensure correct action name and path

const AccountName = ({ prenom, nom, pseudo }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const [newPseudo, setNewPseudo] = useState(pseudo || "");

  // Handler for form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
    dispatch(getPseudo({ newPseudo, token }));  // Dispatch the action to update the pseudo
    setNewPseudo('');  // Clear the input field after submitting
  };

  return (
    <div className="header">
      <h1>Edit user info</h1>
      <form id="monFormulaire" onSubmit={handleFormSubmit}>
        <label htmlFor="newPseudo">User name:</label>
        <input
          id="newPseudo"
          type="text"
          value={newPseudo}
          onChange={(e) => setNewPseudo(e.target.value)}  // Updates state on each key press
        />
        
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={prenom}
          disabled
        />

        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={nom}
          disabled
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AccountName;  // Updated component name to follow CamelCase convention
