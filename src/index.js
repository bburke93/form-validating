import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Form from 'react-formal';
import yup from 'yup';

var defaultStr = yup.string().default('')

var modelSchema = yup.object({
    name: yup.object({
      first: defaultStr.required('please enter a first name'),
      last:  defaultStr.required('please enter a last name'),
    }),
    email: yup.string().email().required('please enter an email address'),
    phone: yup.number().required('please enter a phone number')     
  });

var form = (
  <Form
    schema={modelSchema}
    defaultValue={modelSchema.default()}
  >
    <div>
      <label>Name</label><p/>
      <Form.Field name='name.first' placeholder='First name'/>
      <Form.Field name='name.last' placeholder='Last name'/>
      <Form.Message for={['name.first', 'name.last']}/>
    </div>
    <p/>
    <div>
      <label>Email</label><p/>
      <Form.Field name='email' placeholder='Email address'/>
      <Form.Message for={'email'}/>
    </div>
    <p/>
    <div>
      <label>Phone</label><p/>
      <Form.Field name='phone' placeholder='Phone number'/>
      <Form.Message for={'phone'}/>
    </div>
  <p/>
  <Form.Button type='submit'>Submit</Form.Button>
</Form>)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
ReactDOM.render(form, document.getElementById('form'));
