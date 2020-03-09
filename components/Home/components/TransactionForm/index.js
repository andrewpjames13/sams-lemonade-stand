import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Input from '../../../../atoms/Input';
import Button from '../../../../atoms/Button';
import styled from 'styled-components';

const ButtonStyled = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  @media (min-width: 1225px) {
    width: auto;
  }
`;

const FieldStyled = styled(Field)`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 1rem;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const TransactionForm = ({ onSubmit }) => (
  <div className="row center-xs">
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, hasValidationErrors, submitting }) => (
        <form className="col-xs-12 col-md-6" onSubmit={handleSubmit}>
          <FieldStyled
            data-testid="transaction-form-input"
            name="address"
            component="input"
            placeholder="Enter BTC Address"
            validate={value => (value ? undefined : 'Required')}
          />
          <ButtonStyled
            data-testid="transaction-form-button"
            type="submit"
            disabled={hasValidationErrors || submitting}
          >
            Submit
          </ButtonStyled>
        </form>
      )}
    />
  </div>
);

export default TransactionForm;

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

TransactionForm.defaultProps = {
  onSubmit: () => {},
}
