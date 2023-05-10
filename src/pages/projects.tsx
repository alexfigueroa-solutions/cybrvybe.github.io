import ImgTabs from '../components/ImgTabs';
import { imgTabProjects } from '../data/project_data';
import array from '../data/nav_list';
import Sidebar from '../components/SidebarNav/sidebar';
import './projects.scss';
import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="ImgTabMetaWrapper">
      <Sidebar
        nav_list={array['nav_list']}
        social_list={array['social_links']}
      ></Sidebar>
      <ImgTabs tabItems={imgTabProjects} />
    </div>
  );
}
