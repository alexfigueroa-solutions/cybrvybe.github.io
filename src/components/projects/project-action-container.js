import React from "react";

export default class ProjectActionContainer extends React.Component{
    render(){
        const{
            project_dict = {}
        } = this.props;
        return(
            <div className = "projectActionContainerWrapper">
                <h3>
                    project action container
                </h3>
            </div>
        )
    }
}