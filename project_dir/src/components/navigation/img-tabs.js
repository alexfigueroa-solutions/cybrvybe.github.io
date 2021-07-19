import React from "react";
import "./img-tabs.scss";
import { Tabs, TabPanel, TabList, Tab  } from "react-tabs"
import { Link } from "gatsby";
export default class ImgTabs extends React.Component{
    render(){
        const{
            nav_array = [],
            tab_panels = []
        } = this.props;

        return(
            
            <div 
                
             className = "tabSection">
                 <div className = "tabListWrapper">
                    <div className = "tabList">
                    
                        {
                            nav_array.map(
                                nav_dict => (
                                    
                                    <Link to = {nav_dict.path}
                                        
                                        activeClassName = "selectedTab"
                                        className = "tab"
                                        style = {
                                            {
                                                backgroundImage: "url(" + nav_dict['mockup'] + ")"
                                            }
                                        }
                                    >
                                        <div className = "projectTitleDiv">
                                            <h3 className = "projectTitle">
                                                {
                                                    nav_dict["title"]
                                                }
                                            </h3>
                                            
                                        </div>
                                        
                                    </Link>
                                    
                                    
                                )
                            )
                        }
                    </div>
                </div>
                <div className = "panelWrapper">
                    {
                        tab_panels.map(
                            tab_panel => (
                                <div className = "panelDiv">
                                    <TabPanel className = "tabPanel">
                                        
                                        {
                                            tab_panel
                                        }
                                    </TabPanel>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
          
        )
    }
}