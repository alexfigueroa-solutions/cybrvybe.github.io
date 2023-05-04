import { faBriefcase, faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { action_icons, logos_dict, status_icons } from './icons/icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
const diagnostics = [
  {
    prompt: 'First Name',
    answer: 'Alejandro (Alex)',
  },
  {
    prompt: 'Last Name',
    answer: 'Figueroa',
  },
  {
    prompt: 'Years of programming experience',
    answer: '3+ years',
  },
  {
    prompt: 'Favorite programming language',
    answer: 'Python',
  },
  {
    prompt: 'Interests',
    answer: 'Complexity, Graph Theory, AGI',
  },
];
const traits_list = [
  {
    title: 'Entrepreneur',
    icon: 'emojione-v1:light-bulb',
    description:
      'Always working out my idea muscle by constantly thinking of products and solutions to problems.',
  },
  {
    title: 'Developer/Engineer',
    icon: 'emojione:laptop-computer',
    description:
      'I implement technical solutions to business problems, and have a passion for simplifying complexity.',
  },
  {
    title: 'Analyst',
    icon: 'emojione:chart-increasing',
    description:
      "I work to optimize and automate the extraction of value from the world's most valuable asset - data.",
  },
  {
    title: 'Polymath',
    icon: 'dashicons:randomize',
    description: 'I love to master and understand various skills and topics.',
  },
];
const tech_list = [
  {
    title: 'Python',
    icon: logos_dict['python'],
  },
  {
    title: 'Django',
    icon: logos_dict['django'],
  },
  {
    title: 'React',
    icon: logos_dict['react'],
  },
  {
    title: 'Gatsby',
    icon: logos_dict['gatsby'],
  },
  {
    title: 'SASS/SCSS',
    icon: logos_dict['sass'],
  },
  {
    title: 'HTML',
    icon: logos_dict['html'],
  },
  {
    title: 'CSS',
    icon: logos_dict['css'],
  },
  {
    title: 'Selenium',
    icon: logos_dict['selenium'],
  },
  {
    title: 'Javascript',
    icon: logos_dict['javascript'],
  },
  {
    title: 'Neo4j',
    icon: logos_dict['neo4j'],
  },
  {
    title: 'Postgres',
    icon: logos_dict['postgres'],
  },
  {
    title: 'SQLite',
    icon: logos_dict['sqlite'],
  },
  {
    title: 'R',
    icon: logos_dict['r'],
  },
  {
    title: 'Pandas',
    icon: logos_dict['pandas'],
  },
  {
    title: 'D3.js',
    icon: logos_dict['d3'],
  },
  {
    title: 'Git',
    icon: logos_dict['git'],
  },
  {
    title: 'Github',
    icon: logos_dict['github'],
  },
  {
    title: 'BS4',
    icon: logos_dict['blank'],
  },
  {
    title: 'Django REST Framework',
    icon: logos_dict['django'],
  },
  {
    title: 'Matplotlib',
    icon: logos_dict['blank'],
  },
  {
    title: 'Java',
    icon: logos_dict['java'],
  },
  {
    title: 'Figma',
    icon: logos_dict['figma'],
  },
  {
    title: 'Adobe XD',
    icon: logos_dict['adobe_xd'],
  },
  {
    title: 'Excel',
    icon: logos_dict['excel'],
  },
  {
    title: 'JSON',
    icon: logos_dict['json'],
  },
  {
    title: 'Stripe',
    icon: logos_dict['stripe'],
  },
  {
    title: 'VSCode',
    icon: logos_dict['vscode'],
  },
  {
    title: 'PyCharm',
    icon: logos_dict['pycharm'],
  },
];
const skills_nav_tab_labels = [
  {
    label: 'Technical',
    icon: faMicrochip,
  },
  {
    label: 'Business',
    icon: faBriefcase,
  },
];
const technical_skills_list = [
  {
    title:
      'Use a component-based front-end development workflow to improve efficiency and reusability.',
    icon: action_icons['puzzle_piece'],
  },
  {
    title:
      'Able to handle an entire software development lifecycle: from identifying requirements and tools, to live deployment.',
    icon: action_icons['rocket'],
  },
  {
    title:
      'Use of data modeling to create digital structures of objects and/or systems, to better understand them and/or apply algorithms/automation to.',
    icon: action_icons['data_class'],
  },
  {
    title:
      'Using Object Relational Mapping (ORM) to populate the database schema.',
    icon: action_icons['form'],
  },
  {
    title:
      'Use data cleaning/ETL techniques to prepare data in a consistent manner.',
    icon: action_icons['broom'],
  },
  {
    title:
      'Create REST APIs to enable communication between a decoupled front-end and back-end.',
    icon: action_icons['plug'],
  },
  {
    title: 'Fetch data from REST APIs',
    icon: action_icons['pull_data'],
  },
];
const business_skills_list = [
  {
    title:
      'Create, extract, and manage project, product, business, and financial data.',
    icon: action_icons['pull_data'],
  },
  {
    title: 'Familiar with processes of to-market lifecycles in business.',
    icon: action_icons['market'],
  },
  {
    title:
      'Able to gather client requirements and translate them into technical requirements.',
    icon: action_icons['conversation'],
  },
  {
    title:
      'Identify and master skills pertaining to a particular problem or interest, relatively quickly.',
    icon: action_icons['books'],
  },
  {
    title: 'SAAS Metrics Handling and Analysis',
    icon: action_icons['data_scientist'],
  },
];
const technical_development_roadmap = [
  {
    title:
      'Self-taught mathematics and sciences since kindergarten, to satisfy my curiosity.',
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title:
      'Developed a strong interest for predictive dynamical systems, while self-teaching vector calculus and calc-based physics and statistics in high school.',
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title:
      "Began asking the question 'Can complex systems be predicted? How?', while exploring concepts in graph theory, networks, and complexity, in high school.",
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title:
      'Self-taught data science, in R and Python, at UCSB with the intention of using it to develop a programmable method to predict complex systems.',
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title:
      'Dropped out to pursue the development of this method, as well as a surrounding business and line of technology products.',
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title:
      "Expanded on idea to predict complex systems. I'd realized that an ancillary benefit of predicting complex systems using this method, is that it lays the foundation and wiring for an AGI to emerge from use over time. Developed a comprehensive roadmap to get there.",
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title: 'Self-taught full-stack web development.',
    status_icon: status_icons.done.icon,
    status: 'done',
  },
  {
    title: 'Doing work as a freelancer, for a music production client.',
    status_icon: status_icons.in_progress.icon,
    status: 'in progress',
  },
  {
    title: 'Developing MVP for business intelligence platform.',
    status_icon: status_icons.in_progress.icon,
    status: 'in progress',
  },
  {
    title:
      'Developing various web applications, to monetize non-exclusively as productized services to businesses in music, real estate, photography/videography, animal breeding, SAAS, and architecture.',
    status_icon: status_icons.in_progress.icon,
    status: 'in progress',
  },
  {
    title: 'More is planned...TBA',
    status_icon: status_icons.in_progress.icon,
    status: 'in progress',
  },
];

const dict = {
  diagnostics: diagnostics,
  traits_list: traits_list,
  tech_list: tech_list,
  skills_nav_tab_labels: skills_nav_tab_labels,
  technical_skills_list: technical_skills_list,
  business_skills_list: business_skills_list,
  roadmap: technical_development_roadmap,
};
export default dict;
