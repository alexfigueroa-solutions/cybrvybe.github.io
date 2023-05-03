import * as React from "react";
import Sidebar from "../components/navigation/sidebar";
import "./index.scss";
import AnimatedTyper from "../components/animated/animated_typer";
import array from "../data/nav_list";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
const IndexPage = () => {
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
