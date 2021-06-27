import React from 'react';
import {faBlog, faCode, faEnvelope, faPhone, faProjectDiagram, faRocket, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../navigation/sidebar.scss";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Image from "../Image";
import array from '../../data/nav_list';
import TextChanger from '../animated/text-changer';
import AnimatedTyper from '../animated/animated_typer'; 
import ImgTabs from './img-tabs';
import project_list from '../../data/project_data';
export default class Sidebar extends React.Component{
    
    render(){
        const {
            nav_list = [],
            social_list = []
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
                    </div>
                    <div>
                    {
                        nav_list.map(
                            nav_item => (
                                <TabPanel>
                                    <ImgTabs nav_array = {project_list}></ImgTabs>
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
