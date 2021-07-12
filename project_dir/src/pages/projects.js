import * as React from "react";
import ImgTabs from "../components/navigation/img-tabs";
import project_list from "../data/project_data";
import ProjectTabPanelLayout from "../components/projects/project-tab-panel-layout";
import array from "../data/nav_list";
import Sidebar from "../components/navigation/sidebar";
import "./projects.scss";
const project_tab_panels = [
    <ProjectTabPanelLayout project_dict = {project_list[0]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[1]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[2]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[3]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[4]}></ProjectTabPanelLayout>,
    <ProjectTabPanelLayout project_dict = {project_list[5]}></ProjectTabPanelLayout>
  ];

export default function ProjectsPage(){
    return <div className = "ImgTabMetaWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <ImgTabs nav_array = {project_list} tab_panels = {project_tab_panels}>hello</ImgTabs>

            </div>
    };