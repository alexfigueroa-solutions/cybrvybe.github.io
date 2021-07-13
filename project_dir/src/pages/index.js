import * as React from "react";
import Sidebar from "../components/navigation/sidebar";
import "./index.scss";
import AnimatedTyper from "../components/animated/animated_typer";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const IndexPage = () => {
  const profile_skills_tab_panel_list = [
    <ItemList items_list = {dict["technical_skills_list"]}></ItemList>,
    <ItemList items_list = {dict["business_skills_list"]}></ItemList>
  ];
  return (
    
    <main>
      <div className = "metaWrapper">
        <Sidebar nav_list = {array["nav_list"]} social_list = {array["social_links"]}></Sidebar>
        <div className = "landingWrapper">
          <div className = "landingDiv">
            <AnimatedTyper prompt = "I Implement Technical Solutions to Business Problems" font = "CarbonBl" font-size = "7"></AnimatedTyper>
            <div className = "callToActionLandingWrapper">
              <a  className = "callToActionLandingDiv" href = "mailto:alexfigueroa.cybr@gmail.com">
                <div className = "callToActionLandingIconDiv">
                  <FontAwesomeIcon className = "callToActionLandingIcon" icon = {faEnvelope}></FontAwesomeIcon>
                </div>
                <h3 className = "callToActionLandingText">Hire Me</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
  
     </main>
  )
}

export default IndexPage
