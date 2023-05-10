// imports
import React from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

// types
type EmailFormProps = {
  onSubmit?: (email: string) => void;
};

// interfaces (none in this case)

// component
export default function EmailForm(props: EmailFormProps): JSX.Element {
  const { onSubmit } = props;
  const [email, setEmail] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await addToMailchimp(email);

    // Handle result (e.g., show a success or error message)
    console.log(result);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <StyledButton type="submit">Notify me</StyledButton>
    </StyledForm>
  );
}

// styled-components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
`;

const StyledInput = styled.input`
  padding: 0.75rem;
  border: 2px solid #aaf0d1;
  background-color: transparent;
  color: #aaf0d1;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #aaf0d1;
  }

  ::placeholder {
    color: #aaf0d1;
  }
`;

const StyledButton = styled.button`
  padding: 0.75rem;
  background-color: #aaf0d1;
  color: #1f1f1f;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8de2c3;
  }
`;
