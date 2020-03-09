import React from 'react';
import { Form, Field } from 'react-final-form'
import styled from 'styled-components';

const InputStyled = styled.input`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const Input = (props) => (
  <InputStyled
    type="input"
    {...props}
    onChange={event => props.input.onChange(event)}
  />
);

export default Input;
