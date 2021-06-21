import React from 'react';
import {faBlog, faCode, faEnvelope, faPhone, faProjectDiagram, faRocket, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../navigation/sidebar.scss";
const nav_list = [
    {
        icon_class: faUser,
        title: "Profile"
    },
    {
        icon_class: faProjectDiagram,
        title: "Projects"
    },
    {
        icon_class: faCode,
        title: "Services"
    },
    {
        icon_class: faBlog,
        title: "Blog"
    },
    {
        icon_class: faRocket,
        title: "Startups"
    },
    {
        icon_class: faPhone,
        title: "Contact"
    }
];
const social_links = [
    {
        icon_class: faGithub,
        medium: "Github",
        link: ""
    },
    {
        icon_class: faEnvelope,
        medium: "Email",
        link:""
    },
    {
        icon_class: faMedium,
        medium: "Medium",
        link: ""
    },
    {
        icon_class: faLinkedin,
        medium: "LinkedIn",
        link: ""
    }

];

export default class Sidebar extends React.Component{
    render(){
        return(
            <div className = "sidebarWrapper">
                <div className = "intro-wrapper">

                </div>
                <div className = "nav-wrapper">
                    {
                        nav_list.map(
                            nav_item => (
                                <div className = "navItemWrapper">
                                    <FontAwesomeIcon icon = {nav_item.icon_class} className = "icon">
                                    </FontAwesomeIcon>

                    
                                    <h3 className = "navItemTitle">
                                        {nav_item.title}
                                    </h3>
                                </div>
                            )
                        )
                    }

                </div>
                <div class = "social-wrapper">
                    {
                        social_links.map(
                            social_link => (
                                <FontAwesomeIcon 
                                icon = {social_link.icon_class}>

                                </FontAwesomeIcon>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}
