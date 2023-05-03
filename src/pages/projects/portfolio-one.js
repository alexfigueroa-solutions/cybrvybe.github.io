import Sidebar from "../../components/navigation/sidebar";
import ImgTabs from "../../components/navigation/img-tabs";
import project_list from "../../data/project_data";
import array from "../../data/nav_list";
import React from "react";
import ProjectTabPanelLayout from "../../components/projects/project-tab-panel-layout";
export default function PortfolioOnePage(){
    return <div className = "ImgTabMetaWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <ImgTabs nav_array = {project_list}>hello</ImgTabs>
                <ProjectTabPanelLayout project_dict = {project_list[4]}></ProjectTabPanelLayout>

            </div>
    };