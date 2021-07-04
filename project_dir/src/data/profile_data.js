import { faBrain, faBriefcase, faChartLine, faCog, faDatabase, faHandsHelping, faIcons, faLightbulb, faMale, faMarker, faMicrochip, faObjectGroup, faProjectDiagram, faPuzzlePiece, faQuestion, faQuestionCircle, faStreetView } from "@fortawesome/free-solid-svg-icons";
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
    },
    {
        prompt: "Interests",
        answer: "Complexity, Graph Theory, AGI"
    }
];
const traits_list = [
    {
        title: "Growth Mindset",
        icon: faBrain,
        description: "Anything is achievable as long as you take initiative and follow-through on mastering the prerequisite skills."
    },
    {
        title: "Entrepreneurial",
        icon: faLightbulb,
        description: "Always working out my idea muscle by constantly thinking of products and solutions to problems."
    },
    {
        title: "Lifelong Learner",
        icon: faStreetView,
        description: "Always learning more and diving deep - and always have been."
    },
    {
        title: "Excellence-Oriented",
        icon: faBriefcase,
        description: "When I seek out to do something, I seek out to execute it with mastery and excellence."
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
    },
    {
        title: "Using Object Relational Mapping (ORM) to populate the database schema.",
        icon: faDatabase
    },
    {
        title: "Creating REST APIs",
        icon: faDatabase
    },
    {
        title: "Fetch data from REST API",
        icon: faDatabase
    }
];
const business_skills_list = [
    {
        title: "Creation/Extraction and management of project, product, business, and financial data.",
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