import React from "react";
import ProjectLayout from "./project-layout";
export default class ProjectTabPanelLayout extends React.Component{
    render(){
        const {
            project_dict = {}
        } = this.props;
        return(
            <div>
                <ProjectLayout project_dict = {project_dict}></ProjectLayout>
            </div>
        )
    }
}