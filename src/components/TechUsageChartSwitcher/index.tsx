import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Button, ButtonGroup } from '@mui/material';
import theme from '../../theme';

type TechUsage = {
  year: number;
  usage: number;
};

type CategoryData = {
  title: string;
  subtitle: string;
  description: string;
  data: TechUsage[];
};

interface TechUsageChartSwitcherProps {
  categories: CategoryData[];
}

const StyledTooltip = styled(motion.div)`
  background-color: ${theme.lightGray};
  padding: 8px;
  border-radius: 4px;
`;

const TooltipTitle = styled.h4`
  margin: 0 0 8px 0;
  font-size: 16px;
`;

const TooltipDescription = styled.p`
  margin: 0 0 8px 0;
`;

const LearnMoreButton = styled.button`
  background-color: ${theme.primaryPurple};
  color: ${theme.white};
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.secondaryPurple};
  }
`;

const tooltipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export default function TechUsageChartSwitcher({
  categories,
}: TechUsageChartSwitcherProps): JSX.Element {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = categories[activeCategoryIndex];

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: boolean;
    payload: any;
  }) => {
    if (active && payload && payload.length) {
      return (
        <StyledTooltip
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tooltipVariants}
        >
          <TooltipTitle>{activeCategory.subtitle}</TooltipTitle>
          <TooltipDescription>{activeCategory.description}</TooltipDescription>
          <LearnMoreButton>Learn More</LearnMoreButton>
        </StyledTooltip>
      );
    }

    return null;
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategoryIndex(index);
  };

  return (
    <>
      <ButtonGroup variant="contained" orientation="vertical">
        {categories.map((category, index) => (
          <Button key={index} onClick={() => handleCategoryChange(index)}>
            {category.title}
          </Button>
        ))}
      </ButtonGroup>
      <ResponsiveContainer width={500} height={400}>
        <BarChart data={activeCategory.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip active={false} payload={undefined} />}
          />
          <Bar dataKey="usage" fill={theme.primaryPurple} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
