import React from 'react';

const buttonStyles = {
  border: '1px solid #000',
  borderRadius: 3,
  backgroundColor: '#fff',
  cursor: 'pointer',
  fontSize: 15,
  padding: '10px 20px',
  margin: 10,
  color: '#000',
};

const Button = ({ children, onClick }) => (
  <button
    style={buttonStyles}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
};

export default Button;
