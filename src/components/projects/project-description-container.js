import React from "react";
import "./project-description-container.scss";
export default class ProjectDescriptionContainer extends React.Component{
    render(){
        const {
            project_description
        } = this.props;

        return(
            <div className = "projectDescriptionContainer">
                <h3 className = "projectDescription">{project_description}</h3>
            </div>
        )
    }
}