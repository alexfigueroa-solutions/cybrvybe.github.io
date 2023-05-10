import { logos_dict, status_icons } from './icons/icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { TabItem } from '../components/ImgTabs';
config.autoAddCss = false;

export const imgTabProjects: TabItem[] = [
  {
    title: 'CYBRUI',
    content: 'Component Library for Data-Intensive Web Applications',
    link: '/projects/CYBRUI',
    id: '123',
  },
  {
    title: 'ALEXFIGUEROA.TECH',
    content: 'Software Development Portfolio',
    link: '/projects/ALEXFIGUEROA_TECH',
    id: '456',
  },
];
