import * as React from 'react';
import dict from '../data/profile_data';
import ItemList from '../components/ItemList/item-list';
import Sidebar from '../components/SidebarNav/sidebar';
import array from '../data/nav_list';

import ProfileLayout from '../components/ProfileLayout/profile-layout';
import TechUsageChartSwitcher from '../components/TechUsageChartSwitcher';
import { techUsageData } from '../data/techUsageData';

export default function ProfilePage(): JSX.Element {
  return (
    <div className="metaWrapper">
      <Sidebar
        nav_list={array['nav_list']}
        social_list={array['social_links']}
      ></Sidebar>
      <TechUsageChartSwitcher categories={techUsageData} />
    </div>
  );
}
