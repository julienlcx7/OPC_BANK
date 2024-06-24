import React from 'react';
import './Bank.css';  // Ensure you have corresponding CSS for styling

const Bank =({title,amount,description,btn}) => {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{title}</h3>
        <p class="account-amount">{amount}</p>
        <p class="account-amount-description">{description}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">{btn}</button>
      </div>
    </section>
  );
}

export default Bank;