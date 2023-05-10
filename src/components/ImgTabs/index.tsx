import React, { useState, useCallback, memo } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Tab, Tabs as MuiTabs, Typography } from '@mui/material';
import { darken, lighten } from 'polished';

export type TabItem = {
  id: string;
  imageSrc?: string;
  title: string;
  content: string;
  link: string;
};

interface ImgTabsProps {
  imageTabs: TabItem[];
}

const TabsWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background};
`;

const StyledTab = styled(Tab)`
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryText};
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => darken(0.1, theme.background)};
  }

  &.Mui-selected {
    opacity: 1;
    background-color: ${({ theme }) => darken(0.15, theme.background)};

    img {
      border: 2px solid ${({ theme }) => theme.accent};
    }
  }
`;

const StyledTabs = styled(MuiTabs)`
  & .MuiTabs-indicator {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => darken(0.1, theme.background)};
  flex-grow: 1;
`;

const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.primaryText};
  font-weight: lighter;
  font-size: 1.2em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.accent};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => lighten(0.1, theme.accent)};
  }
`;

const getStyledTabLabel = (tabItem: TabItem) => {
  if (tabItem.imageSrc) {
    return <img src={tabItem.imageSrc} alt={tabItem.title} />;
  } else {
    return <h1>{tabItem.title}</h1>;
  }
};

const ImgTabs: React.FC<ImgTabsProps> = memo(({ imageTabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
    },
    []
  );

  return (
    <TabsWrapper>
      <StyledTabs
        orientation="vertical"
        value={selectedTab}
        onChange={handleTabChange}
      >
        {imageTabs?.map((tabItem) => (
          <StyledTab key={tabItem.id} label={getStyledTabLabel(tabItem)} />
        ))}
      </StyledTabs>
      <ContentWrapper>
        {imageTabs && imageTabs[selectedTab] && (
          <>
            <StyledTypography variant="h5">
              {imageTabs[selectedTab].title}
            </StyledTypography>
            <StyledTypography>
              {imageTabs[selectedTab].content}
            </StyledTypography>
            <StyledLink to={imageTabs[selectedTab].link}>Learn more</StyledLink>
          </>
        )}
      </ContentWrapper>
    </TabsWrapper>
  );
});

ImgTabs.displayName = 'ImgTabs';

export default ImgTabs;
