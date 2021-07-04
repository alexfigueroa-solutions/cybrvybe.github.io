import React from "react";
import "./project-stack-container.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default class ProjectStackContainer extends React.Component{
    render(){
        const{ project_stack = []} = this.props;

        return(
            <div className = "projectStackDiv">
                
                {
                    project_stack.map(
                        entry => (
                            <div className = "stackEntryDivWrapper">
                                <div className = "stackEntryDiv">
                                
                                    <div className = "iconDiv">
                                        <FontAwesomeIcon icon = {entry.icon}></FontAwesomeIcon>
                                    </div>
                                    <div className ="titleDiv">
                                        <h3>
                                            {entry.title}
                                        </h3>
                                    </div>
                                    <div className = "descriptionDiv">
                                        <h3>
                                            {entry.description}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}