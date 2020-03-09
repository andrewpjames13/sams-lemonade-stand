import React from 'react';
import { Form, Field } from 'react-final-form'
import styled from 'styled-components';

const ButtonStyled = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  &:disabled { opacity: .5 };
`;

const Button = (props) => (
  <ButtonStyled
    {...props}
  />
);

export default Button;
