import Sidebar from '../../components/SidebarNav/sidebar';
import ImgTabs from '../../components/ImgTabs';
import project_list from '../../data/project_data';
import array from '../../data/nav_list';
import ProjectTabPanelLayout from '../../components/ProjectTabPanelLayout/project-tab-panel-layout';
export default function NeoHackerVsCodeThemePage() {
  return (
    <div className="ImgTabMetaWrapper">
      <Sidebar
        nav_list={array['nav_list']}
        social_list={array['social_links']}
      ></Sidebar>
      <ImgTabs nav_array={project_list}>hello</ImgTabs>
      <ProjectTabPanelLayout
        project_dict={project_list[5]}
      ></ProjectTabPanelLayout>
    </div>
  );
}
