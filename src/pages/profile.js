import * as React from "react";
import dict from "../data/profile_data";
import ItemList from "../components/navigation/item-list";
import Sidebar from "../components/navigation/sidebar";
import array from "../data/nav_list";

import ProfileLayout from "../components/profile/profile-layout";
const profile_skills_tab_panel_list = [
    <ItemList items_list = {dict["technical_skills_list"]}></ItemList>,
    <ItemList items_list = {dict["business_skills_list"]}></ItemList>
  ];
export default function ProfilePage(){
    return <div className = "metaWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <ProfileLayout profile_skills_tab_panel_list = {profile_skills_tab_panel_list}></ProfileLayout>
    
            </div>
};