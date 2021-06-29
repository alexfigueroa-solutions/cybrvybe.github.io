import { faBrain, faBriefcase, faChartLine, faCog, faDatabase, faHandsHelping, faIcons, faMale, faMarker, faMicrochip, faObjectGroup, faProjectDiagram, faPuzzlePiece, faQuestion, faQuestionCircle, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGit, faGithub, faPython, faReact, faRProject, faSass} from "@fortawesome/free-brands-svg-icons";
const diagnostics = [
    {
        prompt: "First Name",
        answer: "Alejandro (Alex)"
    },
    {
        prompt: "Last Name",
        answer: "Figueroa"
    },
    {
        prompt: "Years of programming experience",
        answer: "3+ years"
    },
    {
        prompt: "Favorite programming language",
        answer: "Python"
    }
];
const traits_list = [
    {
        title: "Growth Mindset",
        icon: faBrain,
        description: "Always learning more and diving deep. Anything is achievable as long as you take initiative and follow-through on mastering the prerequisite skills."
    },
    {
        title: "Curious",
        icon: faQuestion
    },
    {
        title: "Driven",
        icon: faStreetView
    }
];
 const tech_list = [
    {
        title: "Python",
        icon: faPython
    },
    {
        title: "Django",
        icon: faCog
    },
    {
        title: "React",
        icon: faReact
    },
    {
        title: "Gatsby",
        icon: faCog
    },
    {
        title: "SASS/SCSS",
        icon: faSass
    },
    {
        title: "Selenium",
        icon: faCog
    },
    {
        title: "Javascript",
        icon: faCog
    },
    {
        title: "Neo4j",
        icon: faCog
    },
    {
        title: "Postgres",
        icon: faDatabase
    },
    {
        title: "SQL",
        icon: faCog
    },
    {
        title: "R",
        icon: faRProject
    },
    {
        title: "Pandas",
        icon: faCog
    },
    {
        title: "Git",
        icon: faGit
    },
    {
        title: "Github",
        icon: faGithub
    },
    {
        title: "BS4",
        icon: faCog
    },
    {
        title: "Django REST Framework",
        icon: faCog
    },
    {
        title: "Matplotlib",
        icon: faCog
    },
    {
        title: "Figma",
        icon: faFigma
    }
    
];
const skills_nav_tab_labels = [
    {
        label: "Technical",
        icon: faMicrochip
    },
    {
        label: "Business",
        icon: faBriefcase
    }
];
const technical_skills_list = [
    {
        title: "Component-based front-end development.",
        icon: faPuzzlePiece
    },
    {
        title: "Handling of entire software development lifecycle.",
        icon: faHandsHelping
    },
    {
        title: "Data Modeling",
        icon: faObjectGroup
    }
];
const business_skills_list = [
    {
        title: "Project Data Management",
        icon: faProjectDiagram
    },
    {
        title: "Handle To-Market Lifecycle",
        icon: faMarker
    },
    {
        title: "Gathering Client Requirements",
        icon: faMale
    }, 
    { 
        title: "SAAS Metrics Handling and Analysis",
        icon: faChartLine
    }
];



const dict = {
    "diagnostics": diagnostics,
    "traits_list": traits_list,
    "tech_list": tech_list,
    "skills_nav_tab_labels": skills_nav_tab_labels,
    "technical_skills_list": technical_skills_list,
    "business_skills_list": business_skills_list
}
export default dict;