import * as React from "react";
import Sidebar from "../components/navigation/sidebar";
import "./index.scss";
import dict from "../data/profile_data";
import array from "../data/nav_list";
import ItemList from "../components/navigation/item-list";
import project_list from "../data/project_data";
import ImgTabs from "../components/navigation/img-tabs";
import ProjectTabPanelLayout from "../components/projects/project-tab-panel-layout";
import BlogTabPanelLayout from "../components/blogs/blog-tab-panel-layout";
import blog_list from "../data/blog_data";
import services_list from "../data/service_data";
import ProfileLayout from "../components/profile/profile-layout";
import startup_list from "../data/startup_data";
import StartupTabPanelLayout from "../components/startups/startup-tab-panel-layout";
// markup

const IndexPage = () => {
  const project_tab_panels = [
    <h1>profile</h1>,
    <ProjectTabPanelLayout></ProjectTabPanelLayout>,
    <h1>services</h1>,
    <h1>blog</h1>,
    <h1>startup</h1>,
    <h1>contact</h1>
  ];
  const blog_tab_panels = [
    <BlogTabPanelLayout></BlogTabPanelLayout>,
    <BlogTabPanelLayout></BlogTabPanelLayout>
  ];
  const service_tab_panels = [

  ];
  const startup_tab_panels = [
    <StartupTabPanelLayout></StartupTabPanelLayout>
  ];
  const profile_skills_tab_panel_list = [
    <ItemList items_list = {dict["technical_skills_list"]}></ItemList>,
    <ItemList items_list = {dict["business_skills_list"]}></ItemList>
  ];
  const tab_panels =[
    <ProfileLayout profile_skills_tab_panel_list = {profile_skills_tab_panel_list}></ProfileLayout>,
    <ImgTabs nav_array = {project_list} tab_panels = {project_tab_panels}>hello</ImgTabs>,
    <ImgTabs nav_array = {services_list} tab_panels = {service_tab_panels}></ImgTabs>,
    <ImgTabs nav_array = {blog_list} tab_panels = {blog_tab_panels}>helloooo</ImgTabs>,
    <ImgTabs nav_array = {startup_list} tab_panels = {startup_tab_panels}></ImgTabs>,
    <h1>Contact</h1>
  ];
  return (
        
    <main>
      <div className = "metaWrapper">
        <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]} panel_list = {tab_panels}></Sidebar>
        
      </div>
    
     </main>
  )
}

export default IndexPage
