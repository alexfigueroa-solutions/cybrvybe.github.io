import au7oma7a_bi_pic from "../images/projects/income-expense-affordability.png";
import portfolio_one_pic from "../images/projects/portfolio-one.png"
import beat_commerce_pic from "../images/projects/beat-commerce.png";
import netwyrk_pic from "../images/projects/netwyrk.png";
import neohacker_pic from "../images/projects/neo-hacker.png";
import { faCheck, faCog, faDatabase, faMinus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faPython, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import { logos_dict, status_icons } from "./icons/icons";





const status_choices = {
    inactive: {
        icon: faMinus
    },
    in_progress:{
        icon: faSpinner

    },
    done:{
        icon: faCheck
    }
};
const project_list = [
    {
        title: "AU70MA7A-BI",
        subtitle: "Business Intelligence Platform",
        features: [
            {
                title: "Business Data Modeling",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Career/Professional Data Modeling",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Modeling of Automated Analytics Pipelines",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            
            {
                title: "Directory File Tree Navigation",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "User-Facing Automation Modules System",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Automated Budget Management",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Content Management",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "CRM Tools",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Automated Data Reporting",
                status_icon: status_choices["inactive"].icon,
                status: "inactive"
            },
            {
                title: "Custom Analytics Dashboards",
                status_icon: status_choices["inactive"].icon,
                status: "inactive"
            },
            
            
            
        ],
        demonstrated_capabilities: [
            {
                title: "Ability to create a REST API and fetch data on client's request.",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Ability to create a full-stack web application, with a decoupled front-end/back-end.",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Ability to identify and model core business data.",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Ability to plan, engineer, and develop an MVP.",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Ability to manage and sell SAAS product.",
                status_icon: status_choices["inactive"].icon,
                status: "inactive"
            }
            
                  ],
        repo_link: "https://github.com/cybrvybe/AU7OMA7A-BI",
        description: "AU7OMA7A-BI enables business owners and conscientious professionals to collect, manage, and analyze data pertaining to individuals', or organizations' successes in their career or business ventures.",
        stack: [
            {
                title: "Django",
                icon: logos_dict["django"],
                description: "Backend/ORM"
            },
            {
                title: "Django REST Framework",
                icon: logos_dict["django"],
                description: "REST API"
            },
            {
                title: "React",
                icon: logos_dict["react"],
                description: "Component-based UI"
            },
            {
                title: "Postgres",
                icon: logos_dict["postgres"],
                description: "Database"
            },
            {
                title: "SCSS/SASS",
                icon: logos_dict["sass"],
                description: "Styling"
            },
            {
                title: "Python",
                icon: logos_dict["python"],
                description: "Backend"
            },
            {
                title: "AWS Lambda",
                icon: logos_dict["aws_lambda"]
            },
            {
                title: "Chart.js",
                icon: logos_dict["chart_js"]
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
                title: "Figma",
                icon: logos_dict["figma"]
            }

        ],
        img_file: au7oma7a_bi_pic,
        roadmap: [
            {
                title: "CRUD and MVP Functionality",
                status_icon: status_icons.done.icon
            },
            {
                title: "Deploy Live Version"
            },
            {
                title: "Add Financial Automaton"
            },
            {
                title: "Add Integrations"
            }
        ],
        media_files: [
            au7oma7a_bi_pic
        ]
    },
    {
        title: "BeatCommerce",
        subtitle: "Digital Audio Asset E-Commerce Site",
        features: [
            {
                title: "User Authentication/Authorization",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Product Checkout System",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Audio Playback",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Admin Analytics Dashboard",
                status_icon: status_choices["inactive"].icon,
                status: "inactive"
            },
            {
                title: "Favorites List",
                status_icon: status_choices["inactive"].icon,
                status: "inactive"
            },
            {
                title: "Social Sharing",
                status_icon: status_choices["inactive"].icon,
                status: "inactive"
            }
          
            
            


        ],
        demonstrated_capabilities: [
            {
                title: "Translated client requirements into executable, technical requirements.",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Implemented technical solution to e-commerce/business problem.",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Create Django REST API to connect to React in a loosely coupled fashion.",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            }
        ],
        repo_link: "",
        description: "The BeatCommerce platform is an e-commerce store for music producers.",
        stack: [
            {
                title: "Python",
                icon: logos_dict["python"],
                description: "Backend"
            },
            {
                title: "Django REST",
                icon: logos_dict["django"],
                description: "REST API"
            },
            {
                title: "Stripe",
                icon: logos_dict["stripe"],
                description: "Payment Processing"
            }
         


        ],
        img_file: beat_commerce_pic,
        media_files: [
            beat_commerce_pic
        ],
        roadmap: [
            {
                title: "Get Client Requirements",
                status_icon: status_icons["done"].icon
            },
            {
                title: "Translate into technical requirements",
                status_icon: status_icons["done"].icon
            },
            {
                title: "UI Mockups"
            },
            {
                title: "Set up database."
            },
            {
                title: "Finish web application."
            },
            {
                title: "Deploy web application."
            }
            
        ]
    },
    {
        title: "Netwyrk",
        subtitle: "",
        features: [
            {
                title: "Profile Feed",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "User Authentication/Authorization",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Professional/Personal Profile Toggle",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Photo/Video Feed",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Stories Feed",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Projects Feed",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Products Feed",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Services Feed",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
            },
            {
                title: "Work Feed",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"

            }
            
        ],
        demonstrated_capabilities: [

        ],
        repo_link: "",
        description: "Netwyrk is a social media/marketplace platform for entrepreneurs and freelancers.",
        stack: [
            {
                title: "Django",
                icon: logos_dict["django"],
                description: "Server-side logic"
            },
            {
                title: "HTML",
                icon: logos_dict["html"]
            },
            {
                title: "CSS",
                icon: logos_dict["css"]
            }
        ],
        img_file: netwyrk_pic,
        media_files: [
            netwyrk_pic
        ]
    },
    {
        title: "Portfolio One",
        stack: [
            {
                title: "Gatsby",
                icon: logos_dict["gatsby"],
                description: "Static Sites"
            },
            {
                title: "React",
                icon: logos_dict["react"]
            },
            {
                title: "JSON",
                icon: logos_dict["json"]
            }
        ],
        features: [
            {
                title: "Auto-Scroll Navigation",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Tabbed Navigation",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Responsive Design",
                status_icon: status_choices["done"].icon,
                status: "done"
            },
            {
                title: "Animated Text Changer",
                status_icon: status_choices["done"].icon,
                status: "done"
            }
        ],
        img_file: portfolio_one_pic,
        media_files: [
            portfolio_one_pic
        ]
    },
    {
        title: "NeoHacker VsCode Theme",
        img_file: neohacker_pic,
        media_files: [
            neohacker_pic
        ]
    },
];
export default project_list;