import React from "react";
import "./project-roadmap.scss";
import SectionDividingLabel from "../general/section-dividing-label";
export default class ProjectRoadmap extends React.Component{

    render(){
        const {
            roadmap = []
        } = this.props;

        return(
            <div className = "timelineContainer">
                {
                   roadmap.map(
                       roadmap_item => (
                           <div className = "timelineItem">
                               <div className = "timelineItemContent">
                                   <div className = "roadmapItemIconDiv">
                                        <span class="iconify" icon={roadmap_item["status_icon"]} data-inline="false"></span>
                                    </div>
                                    <h3 className = "timelineItemTitle">
                                        {roadmap_item["title"]}
                                    </h3>
                                    <span className="circle" />
                               </div>
                            </div>
                       )
                   )
               }
            </div>
        )
    }
}