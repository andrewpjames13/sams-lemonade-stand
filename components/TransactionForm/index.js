import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import Input from 'atoms/Input';
import Button from 'atoms/Button';
import styled from 'styled-components';

const ButtonStyled = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  @media (min-width: 1225px) {
    width: auto;
  }
`;

const TransactionForm = ({ onSubmit }) => (
  <div className="row center-xs">
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, valid, submitting }) => (
        <form className="col-xs-12 col-md-6" onSubmit={handleSubmit}>
          <Field
            name="address"
            component={Input}
            placeholder="BTC Address"
            validate={value => (value ? undefined : 'Required')}
          />
          <ButtonStyled
            type="submit"
            disabled={!valid || submitting}
          >
            Submit
          </ButtonStyled>
        </form>
      )}
    />
  </div>
);

export default TransactionForm;

TransactionForm.propTyopes = {
  onSubmit: PropTypes.func.isRequired,
}

TransactionForm.defaultProps = {
  onSubmit: () => {},
}
