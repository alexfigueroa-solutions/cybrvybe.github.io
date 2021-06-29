import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../navigation/sidebar.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "../Image";
import array from '../../data/nav_list';
import TextChanger from '../animated/text-changer';
import AnimatedTyper from '../animated/animated_typer'; 



export default class Sidebar extends React.Component{
    
    render(){
        const {
            nav_list = [],
            social_list = [],
            panel_list = []
        } = this.props;
        return(
            <div className = "mainNavContainer">
                
                <Tabs className = "tabsSection">
                    <div className = "sidebarWrapper">
                        <div className = "introWrapper">
                            <Image src = "profile_pic.jpg" alt = {""} className = "profilePic"></Image>
                            <AnimatedTyper prompt = {"Alejandro Figueroa"}></AnimatedTyper>
                            <TextChanger text_array = {array["interests_list"]}></TextChanger>
                        </div>
                        <div class = "socialWrapper">
                            {
                                social_list.map(
                                    social_link => (
                                        <FontAwesomeIcon 
                                        icon = {social_link.icon_class}
                                        className = "socialIcon">

                                        </FontAwesomeIcon>
                                    )
                                )
                            }
                        </div>
                        <TabList className = "navWrapper">
                            {
                                nav_list.map(
                                    nav_item => (
                                        <Tab 
                                        selectedClassName = "navItemWrapperSelected"
                                        className = "navItemWrapper">
                                            <FontAwesomeIcon icon = {nav_item.icon_class} className = "icon">
                                            </FontAwesomeIcon>

                            
                                            <h3 className = "navItemTitle">
                                                {nav_item.title}
                                            </h3>
                                        </Tab>
                                    )
                                )
                            }

                        </TabList>
                        
                        
                            
                        
                        
                    </div>
                    <div>
                    {
                        panel_list.map(
                            tab_panel => (
                                <TabPanel className = 'tabPanel'>
                                    {tab_panel}
                                </TabPanel>
                            )
                        )
                    }
                    </div>
                    
                </Tabs>
                
            </div>
        )
    }
}
