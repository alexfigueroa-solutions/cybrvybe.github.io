import * as React from "react";
import services_list from "../data/service_data";
import array from "../data/nav_list";
import ImgTabs from "../components/navigation/img-tabs";
import Sidebar from "../components/navigation/sidebar";
import ComingSoonLayout from "../components/navigation/coming-soon-layout";

const service_tab_panels = [
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>,
    <ComingSoonLayout></ComingSoonLayout>
];
export default function ServicesPage(){
    return <div className = "metaWrapper">
                <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
                <ImgTabs nav_array = {services_list} tab_panels = {service_tab_panels}></ImgTabs>,
    
            </div>
}