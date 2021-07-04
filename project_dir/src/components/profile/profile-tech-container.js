import React from "react";
import SectionDividingLabel from "../general/section-dividing-label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../profile/profile-tech-container.scss";
export default class ProfileTechContainer extends React.Component{
    render(){
        const {
            tech_list = []
        } = this.props;

        return(
            <div className = "wrapper">
                <SectionDividingLabel label_name = "Technologies"></SectionDividingLabel>
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