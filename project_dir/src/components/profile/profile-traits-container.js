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
                            <div className = "traitContainer">
                                <FontAwesomeIcon icon = {trait.icon}></FontAwesomeIcon>
                                <h3>{trait.title}</h3>
                            </div>
                        )
                    )
                }
            </div>
        )
    }
}