import React from "react";
import "../profile/profile-traits-container.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class ProfileTraitsContainer extends React.Component{
    render(){
        const {
            traits_list = []
        } = this.props;
        return(
            <div className = "profileTraitsContainer">
                {
                    traits_list.map(
                        trait => (
                            <div className = "traitContainerWrapper">
                                <div className = "traitContainer">
                                    <div className = "traitIconDiv">
                                        <FontAwesomeIcon className = "traitIcon" icon = {trait.icon}></FontAwesomeIcon>   
                                    </div>
                                    <h3 className = "traitTitle">{trait.title}</h3>
                                    <p className = "traitDescription">{trait.description}</p>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}