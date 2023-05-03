import React from "react";
import ProfileSkillsContainer from "./profile-skills-container";
import ProfileTechContainer from "./profile-tech-container";
import ProfileIntroContainer from "./profile-intro-container";
import dict from "../../data/profile_data";
import ProjectRoadmap from "../projects/project-roadmap";
import "./profile-layout.scss";
import ProfileRoadmapContainer from "./profile-roadmap-container";
export default class ProfileLayout extends React.Component{
    render(){
        
        return(
            <div className = "profileLayoutWrapperWrapper">
                <div className = "profileLayoutWrapper">
                    <ProfileIntroContainer></ProfileIntroContainer>
                    <ProfileTechContainer tech_list = {dict["tech_list"]}></ProfileTechContainer>
                    <ProfileSkillsContainer></ProfileSkillsContainer>
                    <ProfileRoadmapContainer></ProfileRoadmapContainer>
                    
                </div>
            </div>
        )
    }
}