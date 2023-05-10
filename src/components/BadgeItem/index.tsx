import React from 'react';
import styled, { keyframes } from 'styled-components';

interface StatusDict {
  status: 'done' | 'not done' | 'in progress' | string;
  status_icon: string;
}

interface BadgeItemProps {
  status_dict: StatusDict;
}

export default function BadgeItem(props: BadgeItemProps): JSX.Element {
  const { status_dict } = props;

  const getColor = (status: string): string => {
    switch (status) {
      case 'done':
        return '$normalprimary';
      case 'not done':
        return 'red';
      case 'in progress':
        return 'yellow';
      default:
        return '';
    }
  };

  return (
    <BadgeItemWrapper>
      <StatusDiv>
        {status_dict.status !== '' && (
          <RoadmapIconDiv color={getColor(status_dict.status)}>
            <span
              className="iconify"
              data-icon={status_dict.status_icon}
              data-inline="false"
            ></span>
            <RoadmapIconLabel>{status_dict.status}</RoadmapIconLabel>
          </RoadmapIconDiv>
        )}
      </StatusDiv>
    </BadgeItemWrapper>
  );
}

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const BadgeItemWrapper = styled.div`
  display: inline-flex;
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const StatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RoadmapIconDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${pulse} 2s infinite;
`;

export const RoadmapIconLabel = styled.h5`
  font-size: 1rem;
  margin-top: 4px;
  text-transform: uppercase;
`;
