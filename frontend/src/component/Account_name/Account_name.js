import React, { useState } from 'react';
import './Account_name.css';  // Assurez-vous que votre fichier CSS contient les styles appropriés
import { useDispatch, useSelector } from 'react-redux';
import { getPseudo } from '../../actions/pseudo.action';  // Assurez-vous que le nom de l'action et le chemin sont corrects

const AccountName = ({ prenom, nom, pseudo }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const [newPseudo, setNewPseudo] = useState(pseudo || "");
  const [isEditVisible, setIsEditVisible] = useState(false);

  // Handler pour la soumission du formulaire
  const handleFormSubmit = (event) => {
    event.preventDefault();  // Empêche le comportement par défaut de la soumission du formulaire
    dispatch(getPseudo({ newPseudo, token }));  // Dispatch l'action pour mettre à jour le pseudo
    setNewPseudo('');  // Efface le champ de saisie après la soumission
    setIsEditVisible(!isEditVisible);
  };

  // Handler pour le clic du bouton
  const handleButtonClick = () => {
    setIsEditVisible(!isEditVisible);
  };

  return (
    <div className="header">
      {!isEditVisible && (
        <div className='start'>
          <h1>Welcome back</h1>
          <h1>{prenom} {nom}!</h1>
          <button className="edit_btn" type="button" onClick={handleButtonClick}>Edit name</button>
        </div>
      )}
      {isEditVisible && (
        <div className={`edit ${isEditVisible ? 'visible' : 'hidden'}`}>
          <h1>Edit user info</h1>
          <form id="monFormulaire" onSubmit={handleFormSubmit}>
            <label htmlFor="newPseudo">User name:</label>
            <input
              id="newPseudo"
              type="text"
              value={newPseudo}
              onChange={(e) => setNewPseudo(e.target.value)}  // Met à jour l'état à chaque frappe
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
            <div className='btn'>
              <button className="cancel" onClick={handleButtonClick}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AccountName;
