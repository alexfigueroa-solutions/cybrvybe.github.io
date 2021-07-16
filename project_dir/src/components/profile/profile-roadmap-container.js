import React from "react";
import SectionDividingLabel from "../general/section-dividing-label";
import dict from "../../data/profile_data";
import ProjectRoadmap from "../projects/project-roadmap";

export default class ProfileRoadmapContainer extends React.Component{
    render(){
        return(
            <div className = "profileRoadmapContainerWrapper">
                <SectionDividingLabel label_name = "Technical/Business Development">

                </SectionDividingLabel>
                <div className = "profileRoadmapWrapper">
                    <div className = "profileRoadmapDiv">
                        <ProjectRoadmap roadmap = {dict["roadmap"]}></ProjectRoadmap>
                    </div>
                </div>
            </div>
        )
    }
}