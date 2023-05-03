import * as React from "react";
import ImgTabs from "../components/navigation/img-tabs";
import startup_list from "../data/startup_data";
import array from "../data/nav_list";
import Sidebar from "../components/navigation/sidebar";
import ComingSoonLayout from "../components/navigation/coming-soon-layout";
const startup_tab_panels = [
    <ComingSoonLayout></ComingSoonLayout>
];

export default function ProjectsPage(){
    return <div className = "ImgTabMetaWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <ImgTabs nav_array = {startup_list} tab_panels = {startup_tab_panels}>hello</ImgTabs>

            </div>
    };