import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../profile/profile-tech-container.scss";
export default class ProfileTechContainer extends React.Component{
    render(){
        const {
            tech_list = []
        } = this.props;

        return(
            <div className = "wrapper">
                <div className = "labelContainer">
                    <h3 className = "label">Technologies</h3>
                </div>
                <div className = "profileTechContainer">
                    {
                        tech_list.map(
                            tech_entry => (
                                <div className = "techEntryContainer">
                                    <FontAwesomeIcon className = "techIcon" icon = {tech_entry.icon}></FontAwesomeIcon>
                                    <h3>{tech_entry.title}</h3>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}