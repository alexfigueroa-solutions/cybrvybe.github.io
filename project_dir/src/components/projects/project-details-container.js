import React from "react";
import MediaCarousel from "../navigation/media-carousel";
import ProjectDescriptionContainer from "./project-description-container";
import "./project-details-container.scss";

export default class ProjectDetailsContainer extends React.Component{
    render(){
        const{
            project_dict = {}
        } = this.props;
        
        return(
            <div className = "projectDetailsContainer">
                <div className = "projectDetailsMediaCarouselWrapper">
                    <MediaCarousel className = "projectDetailsMediaCarousel" media_file_list = {project_dict["media_files"]}></MediaCarousel>
                </div>
                <div className = "projectDetailsProjectDescriptionContainerWrapper">
                    <ProjectDescriptionContainer  className = "projectDetailsDescription" project_description = {project_dict["description"]}></ProjectDescriptionContainer>
                    
                </div>
            </div>
        )
    }
}