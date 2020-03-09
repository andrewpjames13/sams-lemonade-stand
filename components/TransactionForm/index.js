import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';

const TransactionForm = ({ onSubmit }) => (
  <div className="row center-xs">
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form className="col-xs-12 col-md-6" onSubmit={handleSubmit}>
          <Field
            name="address"
            component="input"
            placeholder="BTC Address"
          />
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
