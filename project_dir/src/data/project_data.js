import au7oma7a_bi_pic from "../images/projects/income-expense-affordability.png";
import portfolio_one_pic from "../images/projects/portfolio-one.png"
import beat_commerce_pic from "../images/projects/beat-commerce.png";
import netwyrk_pic from "../images/projects/netwyrk.png";
import neohacker_pic from "../images/projects/neo-hacker.png";
import { faCheck, faCog, faDatabase, faMinus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faPython, faReact, faSass, faStripe } from "@fortawesome/free-brands-svg-icons";
import { logos_dict } from "./icons/icons";





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
                title: "Ability to plan, engineer, and develop an MVP.",
                status_icon: status_choices["in_progress"].icon,
                status: "in progress"
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
                icon: faCog,
                description: "REST API"
            },
            {
                title: "React",
                icon: faReact,
                description: "Component-based UI"
            },
            {
                title: "Postgres",
                icon: faDatabase,
                description: "Database"
            },
            {
                title: "SCSS",
                icon: faSass,
                description: "Styling"
            },
            {
                title: "Python",
                icon: faPython,
                description: "Backend"
            }

        ],
        img_file: au7oma7a_bi_pic,
        roadmap: [
            {
                title: "CRUD and MVP Functionality"
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
                icon: faPython,
                description: "Backend"
            },
            {
                title: "Django REST",
                icon: faCog,
                description: "REST API"
            },
            {
                title: "Stripe",
                icon: faStripe,
                description: "Payment Processing"
            }
         


        ],
        img_file: beat_commerce_pic,
        media_files: [
            beat_commerce_pic
        ],
        roadmap: [
            {
                title: "Get Client Requirements"
            },
            {
                title: "Design Architecture/Environment"
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
                icon: faCog,
                description: "Server-side logic"
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
                icon: faCog,
                description: "Static Sites"
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