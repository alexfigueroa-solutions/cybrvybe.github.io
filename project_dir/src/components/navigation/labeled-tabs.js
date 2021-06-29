import React from "react";
import { Tabs, TabPanel, TabList, Tab  } from "react-tabs";

export default class LabeledTabs extends React.Component{
    render(){
        const {
            tab_labels = [],
            panel_list = []
        } = this.props;
        return(
            <div>
                <Tabs>
                    <TabList>
                        {
                            tab_labels.map(
                                tab_label => (
                                    <div>
                                        <Tab>
                                            <h3>{tab_label.label}</h3>
                                        </Tab>
                                    </div>
                                )
                            )
                        }
                    </TabList>
                    {
                        panel_list.map(
                            panel => (
                                
                                <TabPanel>
                                    {panel}
                                </TabPanel>
                            
                            )
                        )
                    }
                </Tabs>
            </div>
        )
    }
}