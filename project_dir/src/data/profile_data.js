import { faBrain, faBriefcase, faChartLine, faCode, faCog, faDatabase, faHandsHelping, faIcons, faLightbulb, faMale, faMarker, faMicrochip, faObjectGroup, faProjectDiagram, faPuzzlePiece, faQuestion, faQuestionCircle, faRandom, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGit, faGithub, faPython, faReact, faRProject, faSass} from "@fortawesome/free-brands-svg-icons";
import { action_icons, logos_dict } from "./icons/icons";
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
        title: "Entrepreneur",
        icon: "emojione-v1:light-bulb",
        description: "Always working out my idea muscle by constantly thinking of products and solutions to problems."
    },
    {
        title: "Developer/Engineer",
        icon: "emojione:laptop-computer",
        description: "I implement technical solutions to business problems. Specifically, web developement, automation, and data science."
    },
    {
        title: "Analyst",
        icon: "emojione:chart-increasing",
        description: "Always learning more and diving deep - and always have been."
    },
    {
        title: "Polymath",
        icon: "dashicons:randomize",
        description: "When I seek out to do something, I seek out to execute it with mastery and excellence."
    }
];
 const tech_list = [
    {
        title: "Python",
        icon: logos_dict["python"]
    },
    {
        title: "Django",
        icon: logos_dict["django"]
    },
    {
        title: "React",
        icon: logos_dict["react"]
    },
    {
        title: "Gatsby",
        icon: logos_dict["gatsby"]
    },
    {
        title: "SASS/SCSS",
        icon: logos_dict["sass"]
    },
    {
        title: "HTML",
        icon: logos_dict["html"]
    },
    {
        title: "CSS",
        icon: logos_dict["css"]
    },
    {
        title: "Selenium",
        icon: logos_dict["selenium"]
    },
    {
        title: "Javascript",
        icon: logos_dict["javascript"]
    },
    {
        title: "Neo4j",
        icon: logos_dict["neo4j"]
    },
    {
        title: "Postgres",
        icon: logos_dict["postgres"]
    },
    {
        title: "SQLite",
        icon: logos_dict["sqlite"]
    },
    {
        title: "R",
        icon: logos_dict["r"]
    },
    {
        title: "Pandas",
        icon: logos_dict["pandas"]
    },
    {
        title: "D3.js",
        icon: logos_dict["d3"]
    },
    {
        title: "Git",
        icon: logos_dict["git"]
    },
    {
        title: "Github",
        icon: logos_dict["github"]
    },
    {
        title: "BS4",
        icon: logos_dict["blank"]
    },
    {
        title: "Django REST Framework",
        icon: logos_dict["django"]
    },
    {
        title: "Matplotlib",
        icon: logos_dict["blank"]
    },
    {
        title: "Java",
        icon: logos_dict["java"]
    },
    {
        title: "Figma",
        icon: logos_dict["figma"]
    },
    {
        title: "Adobe XD",
        icon: logos_dict["adobe_xd"]
    },
    {
        title: "Excel",
        icon: logos_dict["excel"]
    },
    {
        title: "JSON",
        icon: logos_dict["json"]
    },
    {
        title: "Stripe",
        icon: logos_dict["stripe"]
    },
    {
        title: "VSCode",
        icon: logos_dict["vscode"]
    },
    {
        title: "PyCharm",
        icon: logos_dict["pycharm"]
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
        title: "Use a component-based front-end development workflow to improve efficiency and reusability.",
        icon: action_icons["puzzle_piece"]
    },
    {
        title: "Able to handle an entire software development lifecycle: from identifying requirements and tools, to live deployment.",
        icon: action_icons["rocket"]
    },
    {
        title: "Use of data modeling to create digital structures of objects and/or systems, to better understand them and/or apply algorithms/automation to.",
        icon: action_icons["data_class"]
    },
    {
        title: "Using Object Relational Mapping (ORM) to populate the database schema.",
        icon: action_icons["form"]
    },
    {
        title: "Use data cleaning/ETL techniques to prepare data in a consistent manner.",
        icon: action_icons["broom"]
    },
    {
        title: "Create REST APIs to enable communication between a decoupled front-end and back-end.",
        icon: action_icons["plug"]
    },
    {
        title: "Fetch data from REST APIs",
        icon: action_icons["pull_data"]
    }
];
const business_skills_list = [
    {
        title: "Create, extract, and manage project, product, business, and financial data.",
        icon: action_icons["pull_data"]
    },
    {
        title: "Familiar with processes of to-market lifecycles in business.",
        icon: action_icons["market"]
    },
    {
        title: "Able to gather client requirements and translate them into technical requirements.",
        icon: action_icons["conversation"]
    }, 
    {
        title: "Identify and master skills pertaining to a particular problem or interest, relatively quickly.",
        icon: action_icons["books"]
    },
    { 
        title: "SAAS Metrics Handling and Analysis",
        icon: action_icons["data_scientist"]
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