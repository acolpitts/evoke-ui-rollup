import React from 'react';
import ButtonBase from './Button.styles';

const Button = ({ text, onClick }) => {
  return <ButtonBase onClick={onClick}>{text}</ButtonBase>;
};

export default Button;
