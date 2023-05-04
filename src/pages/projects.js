import ImgTabs from '../components/ImgTabs/img-tabs';
import project_list from '../data/project_data';
import ProjectTabPanelLayout from '../components/ProjectTabPanelLayout/project-tab-panel-layout';
import array from '../data/nav_list';
import Sidebar from '../components/SidebarNav/sidebar';
import './projects.scss';

const project_tab_panels = [];

project_list.forEach((project, index) => {
  project_tab_panels.push(
    <ProjectTabPanelLayout project_dict={project} key={index} />
  );
});

export default function ProjectsPage() {
  return (
    <div className="ImgTabMetaWrapper">
      <Sidebar
        nav_list={array['nav_list']}
        social_list={array['social_links']}
      ></Sidebar>
      <ImgTabs nav_array={project_list} tab_panels={project_tab_panels}>
        hello
      </ImgTabs>
      <ProjectTabPanelLayout
        project_dict={project_list[0]}
      ></ProjectTabPanelLayout>
    </div>
  );
}
