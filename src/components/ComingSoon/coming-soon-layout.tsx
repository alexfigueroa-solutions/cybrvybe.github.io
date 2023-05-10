// ComingSoon.tsx
import React from 'react';
import EmailForm from '../EmailForm/index';
import styled, { keyframes } from 'styled-components';

type ComingSoonProps = {
  message: string;
};

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ComingSoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Message = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  animation: ${fadeAnimation} 3s infinite;
`;

export default function ComingSoon(props: ComingSoonProps): JSX.Element {
  const { message } = props;

  return (
    <ComingSoonWrapper>
      <Message>{message}</Message>
      <EmailForm />
    </ComingSoonWrapper>
  );
}
