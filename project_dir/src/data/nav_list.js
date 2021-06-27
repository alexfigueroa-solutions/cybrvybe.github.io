import {faBlog, faCode, faEnvelope, faPhone, faProjectDiagram, faRocket, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
const interests_list = [
    "Full-Stack Web Development",
    "Intelligent Automation",
    "Software Engineering",
    "Data Science"
];
const array = {
    "nav_list": nav_list, 
    "social_links": social_links,
    "interests_list": interests_list
    
};
export default array