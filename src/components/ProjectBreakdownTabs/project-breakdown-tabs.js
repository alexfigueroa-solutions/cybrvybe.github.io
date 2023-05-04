import React from 'react';
import { Tabs, TabPanel, TabList, Tab } from 'react-tabs';
import './project-breakdown-tabs.scss';
import BadgeItem from '../BadgeItem/badge-item';

export default class ProjectBreakdownTabs extends React.Component {
  render() {
    const { project_features = [], project_demonstrated_capabilities = [] } =
      this.props;

    const breakdown_nav = [
      {
        title: 'Features',
        array: project_features,
      },
      {
        title: 'Demonstrated Capabilities',
        array: project_demonstrated_capabilities,
      },
    ];
    return (
      <div className="mainBreakdownWrapper">
        <Tabs className="breakdownTabsSectionWrapper">
          <TabList className="breakdownTabList">
            {breakdown_nav.map((nav_entry) => (
              <Tab
                selectedClassName="breakdownTabActive"
                className="breakdownTab"
              >
                {nav_entry['title']}
              </Tab>
            ))}
          </TabList>
          <div className="breakdownTabPanelWrapper">
            {breakdown_nav.map((entry) => (
              <div className="breakdownPanelDiv">
                <TabPanel className="breakdownTabPanel">
                  {entry['array'].map((item) => (
                    <div className="breakdownItemDiv">
                      <div className="breakdownItemBadgeContainer">
                        <BadgeItem status_dict={item}></BadgeItem>
                      </div>
                      <div className="breakdownItemTitleDiv">
                        <h3 className="breakdownItem">{item.title}</h3>
                      </div>
                    </div>
                  ))}
                </TabPanel>
              </div>
            ))}
          </div>
        </Tabs>
      </div>
    );
  }
}
