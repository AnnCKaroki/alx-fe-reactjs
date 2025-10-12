import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Form Handling with React</h1>
      <h2>Registration Form</h2>
      <RegistrationForm />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
};

export default App;
