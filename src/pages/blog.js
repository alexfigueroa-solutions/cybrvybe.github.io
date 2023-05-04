import * as React from 'react';
import ImgTabs from '../components/ImgTabs/img-tabs';
import blog_list from '../data/blog_data';
import array from '../data/nav_list';
import Sidebar from '../components/SidebarNav/sidebar';
import BlogTabPanelLayout from '../components/BlogFeed/blog-tab-panel-layout';
const blog_tab_panels = [
  <BlogTabPanelLayout blog_post={blog_list[0]} key={1}></BlogTabPanelLayout>,
  <BlogTabPanelLayout blog_post={blog_list[1]} key={2}></BlogTabPanelLayout>,
];

export default function ProjectsPage() {
  return (
    <div className="ImgTabMetaWrapper">
      <Sidebar
        nav_list={array['nav_list']}
        social_list={array['social_links']}
      ></Sidebar>
      <ImgTabs nav_array={blog_list} tab_panels={blog_tab_panels}>
        hello
      </ImgTabs>
    </div>
  );
}
