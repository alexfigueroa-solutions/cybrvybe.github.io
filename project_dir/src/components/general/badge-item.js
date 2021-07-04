import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./badge-item.scss";

export default class BadgeItem extends React.Component{
    render(){
        const {
            status_dict
        } = this.props;
        return(
            <div className = "badgeItemWrapper">
                <div className = "statusDiv">
                    <FontAwesomeIcon className = "statusIcon" icon = {status_dict["status_icon"]}></FontAwesomeIcon>
                    {
                        status_dict["status"] == "inactive"?
                            
                            <h3 className = "statusLabel">not done</h3>:
                            status_dict["status"] == "in progress"?
                                    <h3 className = "statusLabel">in progress</h3>:
                                    status_dict["status"] == "done"?
                                            <h3 className = "statusLabel">done</h3>:
                                                null  
                            }

                </div>
                
            </div>
        
        )

        
    }
}