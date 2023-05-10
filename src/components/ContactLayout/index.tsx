// Imports
import React from 'react';
import styled from 'styled-components';
import ContactForm from '../ContactForm';

export default function ContactLayout(): JSX.Element {
  return (
    <ContactLayoutWrapper>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </ContactLayoutWrapper>
  );
}

// Styled Components
const ContactLayoutWrapper = styled.div`
  height: 45rem;
  width: 81.25rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  width: 100%;
`;
