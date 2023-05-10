// src/components/ContactForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import styled from 'styled-components';

// Types
type FormValues = {
  name: string;
  email: string;
  message: string;
};

// Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

// Component
export default function ContactForm(): JSX.Element {
  const initialValues: FormValues = { name: '', email: '', message: '' };

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Field
            as={StyledTextField}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            helperText={<ErrorMessage name="name" />}
            error={!!ErrorMessage.name}
          />
          <Field
            as={StyledTextField}
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            helperText={<ErrorMessage name="email" />}
            error={!!ErrorMessage.name}
          />
          <Field
            as={StyledTextField}
            name="message"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            helperText={<ErrorMessage name="message" />}
            error={!!ErrorMessage.name}
          />
          <ButtonWrapper>
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              sx={{
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              }}
            >
              Submit
            </Button>
          </ButtonWrapper>
        </StyledForm>
      )}
    </Formik>
  );
}

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    fieldset {
      border-color: rgba(94, 148, 255, 0.7);
    }
    &:hover fieldset {
      border-color: rgba(94, 148, 255, 1);
    }
    &.Mui-focused fieldset {
      border-color: rgba(94, 148, 255, 1);
    }
  }
  & .MuiFormLabel-root {
    color: rgba(94, 148, 255, 0.7);
  }
  & .MuiFormHelperText-root {
    color: rgba(255, 95, 95, 0.7);
  }
  & .Mui-error .MuiFormLabel-root {
    color: rgba(255, 95, 95, 1);
  }
  & .Mui-error .MuiOutlinedInput-root {
    fieldset {
      border-color: rgba(255, 95, 95, 1);
    }
  }
`;
