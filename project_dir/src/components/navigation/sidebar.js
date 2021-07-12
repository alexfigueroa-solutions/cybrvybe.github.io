import React from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../navigation/sidebar.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "../Image";
import array from '../../data/nav_list';
import TextChanger from '../animated/text-changer';
import AnimatedTyper from '../animated/animated_typer'; 
import ResumeDownloadBtn from './resume-download-btn';
import { RGBADepthPacking } from 'three';


export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: false,
        };
    }
  
    toggleNavbar(e){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        
        const {
            nav_list = [],
            social_list = [],
            panel_list = []
        } = this.props;
        const classOpenSidebar = "sidebarWrapper" + (this.state.collapsed? ' collapsed' : '')
        return(
            <div className = "mainNavContainer">
                
                <Tabs className = "tabsSection">
                <div className = "sidebarOpenBtnDiv">
                    <button className = "sidebarOpenBtn" onClick={this.toggleNavbar}>&#9776;</button>

                </div>
                    <div className = {classOpenSidebar} style = {this.state.sidebarBackgroundColor} id = "sidebarWrapper">
                        
                        <div className = "introWrapperWrapper">
                            <div className = "introWrapper">
                                <Image src = "profile_pic.jpg" alt = {""} className = "profilePic"></Image>
                                <h3 className = "name">Alejandro Figueroa</h3>
                                <TextChanger text_array = {array["interests_list"]}></TextChanger>
                            </div>
                        </div>
                        <ResumeDownloadBtn></ResumeDownloadBtn>
                        <div className = "socialWrapper">
                            {
                                social_list.map(
                                    social_link => (
                                        <a href = {social_link.link}>
                                            <FontAwesomeIcon 
                                                icon = {social_link.icon_class}
                                                className = "socialIcon">

                                            </FontAwesomeIcon>
                                        </a>
                                        
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