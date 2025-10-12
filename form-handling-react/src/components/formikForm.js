import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Username must be at least 4 characters')
    .required('Username is required'),
  email: Yup.string()
    .email('Must be a valid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    // Log the form values
    console.log('Form submitted with values:', values);
    setSubmitting(false);
  };

  return (
    <div>
      <h2>User Registration Form (Formik)</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: 'red', fontSize: '0.8rem' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: 'red', fontSize: '0.8rem' }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: 'red', fontSize: '0.8rem' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
