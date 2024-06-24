import React from 'react';
import './Feature_popup.css';  // Ensure you have corresponding CSS for styling

const Feature_popup =({img,title,subtitle}) => {
  return (
    <div className="feature-item">
    <img src={img} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>
      {subtitle}
    </p>
  </div>
  );
}

export default Feature_popup;
