import React from 'react';

const buttonStyles = {
  border: '1px solid #000',
  borderRadius: 3,
  backgroundColor: 'skyblue',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
  color: '#fff',
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
