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
import { Link } from "gatsby";
import ProfileLayout from "../components/profile/profile-layout";
import startup_list from "../data/startup_data";
import StartupTabPanelLayout from "../components/startups/startup-tab-panel-layout";
// markup
import SubscribeForm from "../components/general/subscribe-form";
import ComingSoonLayout from "../components/navigation/coming-soon-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPlusCircle, faSubscript } from "@fortawesome/free-solid-svg-icons";
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
            <div
              data-sal = "slide-up"
              data-sal-duration = "500"
              data-sal-delay = "50"
              data-sal-easing = "ease"
              >
              <AnimatedTyper 
                
                prompt = "I Implement Technical Solutions to Business Problems" font = "CarbonBl" font-size = "7"></AnimatedTyper>
              
            </div>
            <div className = "callToActionLandingWrapper">
              <a  
                data-sal = "slide-right"
                data-sal-duration = "500"
                data-sal-delay = "50"
                data-sal-easing = "ease"
                className = "callToActionLandingDiv" href = "mailto:alexfigueroa.cybr@gmail.com">
                <div className = "callToActionLandingIconDiv">
                  <FontAwesomeIcon className = "callToActionLandingIcon" icon = {faEnvelope}></FontAwesomeIcon>
                </div>
                <h3 className = "callToActionLandingText">Hire Me</h3>
              </a>
              <Link to = "/subscribe"
                data-sal = "slide-left"
                data-sal-duration = "500"
                data-sal-delay = "50"
                data-sal-easing = "ease"
                className = "callToActionLandingDivTwo">
                <div className = "callToActionLandingIconDiv">
                  <FontAwesomeIcon className = "callToActionLandingIcon" icon = {faPlusCircle}></FontAwesomeIcon>
                </div>
                <h3 className = "callToActionLandingText">Subscribe</h3>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
  
     </main>
  )
}

export default IndexPage
