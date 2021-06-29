import React from "react";
import "./img-tabs.scss";
import { Tabs, TabPanel, TabList, Tab  } from "react-tabs";
export default class ImgTabs extends React.Component{
    render(){
        const{
            nav_array = [],
            tab_panels = []
        } = this.props;

        return(
            
            <Tabs 
                
             className = "tabSection">
                <TabList className = "tabList">
                
                    {
                        nav_array.map(
                            nav_dict => (
                                
                                <Tab className = "tab"
                                    selectedClassName = "selectedTab"
                                    style = {
                                        {
                                            backgroundImage: "url(" + nav_dict['img_file'] + ")"
                                        }
                                    }>
                                    <div className = "projectTitleDiv">
                                        <h3 className = "projectTitle">
                                            {
                                                nav_dict["title"]
                                            }
                                        </h3>
                                        
                                    </div>
                                    
                                </Tab>
                                
                                
                            )
                        )
                    }
                </TabList>
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
            </Tabs>
          
        )
    }
}