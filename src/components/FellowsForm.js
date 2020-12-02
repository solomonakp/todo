import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from './Input';

import { Consumer } from './context';

export default class FellowsForm extends Component {
  render() {
    return (
      <Consumer>
        {(context) => {
          return (
            <Formik
              initialValues={{ name: '', password: '' }}
              handleSubmit={async (value) => {}}
            >
              {({ values, setValues, handleSubmit, ...formik }) => (
                <Form onSubmit={handleSubmit}>
                  <Input name='name' fullWidth={true} />
                  <Input name='password' />

                  <button type='submit'>Submit</button>
                  <div>{JSON.stringify(values, null, 7)}</div>
                </Form>
              )}
            </Formik>
          );
        }}
      </Consumer>
    );
  }
}
