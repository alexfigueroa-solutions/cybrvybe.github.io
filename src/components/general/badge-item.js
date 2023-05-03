import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./badge-item.scss";
import "../abstract/_color.scss";
export default class BadgeItem extends React.Component{
    render(){
        const {
            status_dict
        } = this.props;
        return(
            <div className = "badgeItemWrapper">
                <div className = "statusDiv">
                {
                    status_dict["status"] === "done"?
                        <div className = "roadmapIconDiv" style = {{color: "$normalprimary"}}>
                            <span class="iconify" data-icon={status_dict["status_icon"]} data-inline="false"></span>
                            <h5 className = "roadmapIconLabel">{status_dict["status"]}</h5>
                            
                        </div>:
                        status_dict["status"] === "not done"?
                            <div className = "roadmapIconDiv" style = {{color: "red"}}>
                                <span class="iconify" data-icon={status_dict["status_icon"]} data-inline="false"></span>
                                <h5 className = "roadmapIconLabel">{status_dict["status"]}</h5>
                                
                            </div>:
                            status_dict["status"] === "in progress"?
                                <div className = "roadmapIconDiv" style = {{color: "yellow"}}>
                                    <span class="iconify" data-icon={status_dict["status_icon"]} data-inline="false"></span>
                                    <h5 className = "roadmapIconLabel">{status_dict["status"]}</h5>
                                    
                                </div>:
                                    null
                }   

                </div>
                
            </div>
        
        )

        
    }
}