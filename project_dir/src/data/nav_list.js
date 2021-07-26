import {faBlog, faCode, faEnvelope, faHome, faPhone, faProjectDiagram, faRocket, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faMedium} from "@fortawesome/free-brands-svg-icons";

const nav_list = [
    {
        icon_class: faHome,
        title: "Home",
        link: "/"
    },
    {
        icon_class: faUser,
        title: "Profile",
        link: "/profile"
    },
    {
        icon_class: faProjectDiagram,
        title: "Projects",
        link: "/projects"
    }
  ];
  const social_links = [
    {
        icon_class: faGithub,
        medium: "Github",
        link: "https://github.com/cybrvybe"
    },
    {
        icon_class: faEnvelope,
        medium: "Email",
        link:"mailto:alexfigueroa.cybr@gmail.com"
    },
    {
        icon_class: faMedium,
        medium: "Medium",
        link: "https://cybrvybe.medium.com/"
    },
    {
        icon_class: faLinkedin,
        medium: "LinkedIn",
        link: "https://www.linkedin.com/in/alejandro-figueroa-206596198/"
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