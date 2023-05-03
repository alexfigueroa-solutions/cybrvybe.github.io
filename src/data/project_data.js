import au7oma7a_bi_pic from "../images/projects/income-expense-affordability.png";
import portfolio_one_pic from "../images/projects/portfolio-one.png"
import portfolio_two_mockup from "../images/projects/portfolio-two/desktop-mockup.png";
import au7oma7a_bi_mockup from "../images/projects/au7oma7a/dark-studio-desktop-mockup.png";
import beatcommerce_mockup from "../images/projects/beatcommerce/homepage-desktop-mockup.png";
import beat_commerce_pic from "../images/projects/beat-commerce.png";
import portfolio_one_mockup from "../images/projects/portfolio-one/desktop-mockup.png";
import netwyrk_pic from "../images/projects/netwyrk.png";
import neohacker_pic from "../images/projects/neo-hacker.png";
import { logos_dict, status_icons } from "./icons/icons";
import portfolio_two_pic_1 from "../images/projects/projects_page.png";
import portfolio_two_pic_2 from "../images/projects/portfolio_two_coming_soon_page.png";
import portfolio_two_pic_3 from "../images/projects/portfolio_two_profile_page_1.png";
import portfolio_two_pic_4 from "../images/projects/portfolio_two_profile_page_2.png";
import portfolio_two_pic_5 from "../images/projects/portfolio_two_project_page.png";
import au7oma7a_bi_pic_2 from "../images/projects/income-expense-allocation.png";
import portfolio_one_pic_1 from "../images/projects/portfolio_one_projects_page.png";
import portfolio_one_pic_2 from "../images/projects/portfolio_one_capabilities_page.png";
import neohacker_pic_1 from "../images/projects/preview_2.png";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import netwyrk_mockup from "../images/projects/netwyrk/desktop-mockup.png";
import neohacker_mockup from "../images/projects/neohacker/desktop-mockup.png";
config.autoAddCss = false;

const project_list = [
    {
        title: "AU70MA7A-BI",
        mockup: au7oma7a_bi_mockup,
        subtitle: "Business Intelligence Platform",
        features: [
            {
                title: "Business Data Modeling",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Career/Professional Data Modeling",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Project Modeling",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Product Modeling",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Modeling of Automated Analytics Pipelines",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            
            {
                title: "Directory File Tree Navigation",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "User-Facing Automation Modules System",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Automated Budget Management",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Time/Task Management Module",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Content Management Module",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "CRM Tools",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Automated Data Reporting",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Custom Analytics Dashboards",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            
            
            
        ],
        path: "/projects/AU7OMA7A-BI",
        demonstrated_capabilities: [
            {
                title: "Ability to create a REST API and fetch data on client's request.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Ability to create a full-stack web application, with a decoupled front-end/back-end.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Ability to identify and model core business data.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Ability to plan, engineer, and develop an MVP.",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Ability to manage and sell SAAS product.",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            }
            
                  ],
        repo_link: "https://github.com/cybrvybe/AU7OMA7A-BI",
        live_link: null,
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
                title: "Database development",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Add MVP functionality",
                status_icon: status_icons.done.icon,
                status: "in progress"
            },
            {
                title: "Deploy live version",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Add Default Business Automation Systems",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Add Integrations",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Monetize as a SAAS product.",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            }
        ],
        media_files: [
            au7oma7a_bi_pic,
            au7oma7a_bi_pic_2
        ]
    },
    {
        title: "BeatCommerce",
        mockup: beatcommerce_mockup,
        subtitle: "Digital Audio Asset E-Commerce Site",
        features: [
            {
                title: "User Authentication/Authorization",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Instrumental Modeling",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Album Modeling",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Product Checkout System",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Audio Playback",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Admin Analytics Dashboard",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Favorites List",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Social Sharing",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            }
          
            
            


        ],
        path: "/projects/beat-commerce",
        demonstrated_capabilities: [
            {
                title: "Translated client requirements into executable, technical requirements.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Implemented Django ORM to create models.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Implemented technical solution to e-commerce/business problem.",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Create Django REST API to connect to React in a loosely coupled fashion.",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            }
        ],
        repo_link: "https://github.com/cybrvybe/BeatCommerce-Advanced",
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
            },
            {
                title: "React",
                icon: logos_dict["react"],
                description: "UI Development"
            },
            {
                title: "SASS",
                icon: logos_dict["sass"],
                description: "Styling"
            },
            {
                title: "Heroku",
                icon: logos_dict["heroku"],
                description: "Hosting"
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
        img_file: beat_commerce_pic,
        media_files: [
            beat_commerce_pic
        ],
        roadmap: [
            {
                title: "Get Client Requirements",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Translate into technical requirements",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Set up database",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Design UI",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Add functionality",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Finish web application",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Deploy web application",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Monetize as productized service",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            }
            
        ]
    },
    {
        title: "Netwyrk",
        subtitle: "",
        mockup: netwyrk_mockup,
        path: "/projects/netwyrk/",
        features: [
            {
                title: "Profile Feed",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "User Authentication/Authorization",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Professional/Personal Profile Toggle",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Photo/Video Feed",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Stories Feed",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Projects Feed",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Products Feed",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Services Feed",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Work Feed",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"

            }
            
        ],
        demonstrated_capabilities: [
            {
                title: "Implement social user functionality in a social platform.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Implement user authentication/authorization system.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Implement social feeds.",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            }
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
            },
            {
                title: "React",
                icon: logos_dict["react"]
            },
            {
                title: "SCSS/SASS",
                icon: logos_dict["sass"]
            },
            {
                title: "Git",
                icon: logos_dict["git"]
            },
            {
                title: "Github",
                icon: logos_dict["github"]
            }
        ],
        roadmap: [
            {
                title: "Develop database",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Set up prototype UI",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            
            {
                title: "Rebuild UI with React",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            },
            {
                title: "Add MVP functionality",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Deploy to AWS Lambda",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            },
            {
                title: "Monetize via transactions on the platform.",
                status_icon: status_icons.not_done.icon,
                status: "not done"
            }
        ],
        img_file: netwyrk_pic,
        media_files: [
            netwyrk_pic
        ],
        repo_link: "https://github.com/cybrvybe/NetWyrk"
    },
    {
        title: "Portfolio Two",
        mockup: portfolio_two_mockup,
        path: "/projects/portfolio-two",
        repo_link: "https://github.com/cybrvybe/cybrvybe.github.io",
        description: "Portfolio Two is a software engineering/web development portfolio.",
        features: [
            {
                title: "Responsive Design",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Double sidebar navigation",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Projects page",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Profile page",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Animated typing React component",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Data importing from AU7OMA7A-BI",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            }
        ],
        stack: [
            {
                title: "Gatsby",
                icon: logos_dict["gatsby"]
            },
            {
                title: "React",
                icon: logos_dict["react"]
            },
            {
                title: "SASS/SCSS",
                icon: logos_dict["sass"]
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
                title: "JSON",
                icon: logos_dict["json"]
            },
            {
                title: "Figma",
                icon: logos_dict["figma"]
            }
        ],
        media_files: [
            portfolio_two_pic_1,
            portfolio_two_pic_2,
            portfolio_two_pic_3,
            portfolio_two_pic_4,
            portfolio_two_pic_5

        ],
        img_file: portfolio_two_pic_1,
        roadmap: [
            {
                title: "Design UI",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Build portfolio using React and SCSS",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Deploy to Github Pages",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Pull data from AU7OMA7A-BI's API, into portfolio during build",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            }
        ]
    },
    {
        title: "Portfolio One",
        mockup: portfolio_one_mockup,
        path: "/projects/portfolio-one",
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
                title: "SCSS/SASS",
                icon: logos_dict["sass"]
            },
            {
                title: "NPM",
                icon: logos_dict["npm"]
            }
        ],
        features: [
            {
                title: "Auto-Scroll Navigation",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Tabbed Navigation",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Responsive Design",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Animated Text Changer",
                status_icon: status_icons.done.icon,
                status: "done"
            }
        ],
        img_file: portfolio_one_pic,
        media_files: [
            portfolio_one_pic,
            portfolio_one_pic_1,
            portfolio_one_pic_2
        ],
        roadmap: [
            {
                title: "Set up Gatsby environment",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Create UI with React and SCSS",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Add content",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Deploy to Github Pages",
                status_icon: status_icons.done.icon,
                status: "done"
            }
        ],
        demonstrated_capabilities: [
            {
                title: "Implement a static web application using Gatsby.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Create a component-based UI using React.",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Handle deployment of site using Github Pages.",
                status_icon: status_icons.done.icon,
                status: "done"
            }
        ],
        description: "Web development portfolio",
        repo_link: "https://github.com/cybrvybe/portfolio-one"
    },
    {
        title: "NeoHacker VsCode Theme",
        img_file: neohacker_pic,
        mockup: neohacker_mockup,
        path: "/projects/neohacker-vscode-theme",
        media_files: [
            neohacker_pic,
            neohacker_pic_1
        ],
        features: [
            {
                title: "Matrix-inspired vscode theme",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Dark Theme",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "High Contrast",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Downloadable from VSCode Marketplace",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            }
        ],
        stack: [
            {
                title: "JSON",
                icon: logos_dict["json"]
            },
            {
                title: "NPM",
                icon: logos_dict["npm"]
            },
            {
                title: "Git",
                icon: logos_dict["git"]
            },
            {
                title: "Github",
                icon: logos_dict["github"]
            }
        ],
        roadmap: [
            {
                title: "Edit style in settings.json",
                status_icon: status_icons.done.icon,
                status: "done"
            },
            {
                title: "Package and 'deploy' theme to VsCode Marketplace",
                status_icon: status_icons.in_progress.icon,
                status: "in progress"
            }
        ],
        description: "Hacker/Matrix-Inspired VSCode Theme"
    },
];
export default project_list;