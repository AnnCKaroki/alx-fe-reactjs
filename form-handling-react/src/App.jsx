import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Handling in React</h1>

      <div style={{
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={{
          flex: '1',
          minWidth: '300px',
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <h2>Controlled Components Form</h2>
          <RegistrationForm />
        </div>

        <div style={{
          flex: '1',
          minWidth: '300px',
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '8px'
        }}>
          <FormikForm />
        </div>
      </div>
    </div>
  );
}

export default App;
