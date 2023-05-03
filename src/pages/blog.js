import * as React from "react";
import ImgTabs from "../components/navigation/img-tabs";
import blog_list from "../data/blog_data";
import array from "../data/nav_list";
import Sidebar from "../components/navigation/sidebar";
import BlogTabPanelLayout from "../components/blogs/blog-tab-panel-layout";
const blog_tab_panels = [
    <BlogTabPanelLayout blog_post = {blog_list[0]}></BlogTabPanelLayout>,
    <BlogTabPanelLayout blog_post = {blog_list[1]}></BlogTabPanelLayout>
];

export default function ProjectsPage(){
    return <div className = "ImgTabMetaWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <ImgTabs nav_array = {blog_list} tab_panels = {blog_tab_panels}>hello</ImgTabs>

            </div>
    };