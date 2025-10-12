import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Handling in React</h1>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Controlled Components Form</h2>
        <RegistrationForm />
      </div>

      <div>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;
