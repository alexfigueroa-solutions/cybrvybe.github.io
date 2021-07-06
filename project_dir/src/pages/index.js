import * as React from "react";
import Sidebar from "../components/navigation/sidebar";
import "./index.scss";
import ContactLayout from "../components/contact/contact-layout";
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
import ComingSoonLayout from "../components/navigation/coming-soon-layout";

const IndexPage = () => {
  const project_tab_panels = [
    <ProjectTabPanelLayout project_dict = {project_list[0]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[1]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[2]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[3]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[4]}></ProjectTabPanelLayout>
  ];
  const blog_tab_panels = [
    <BlogTabPanelLayout blog_post = {blog_list[0]}></BlogTabPanelLayout>,
    <BlogTabPanelLayout blog_post = {blog_list[1]}></BlogTabPanelLayout>
  ];
  const service_tab_panels = [
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>

  ];
  const startup_tab_panels = [
    <ComingSoonLayout></ComingSoonLayout>
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
    <ContactLayout></ContactLayout>
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
