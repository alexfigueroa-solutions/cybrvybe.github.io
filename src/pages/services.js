import services_list from '../data/service_data';
import array from '../data/nav_list';
import ImgTabs from '../components/ImgTabs/img-tabs';
import Sidebar from '../components/SidebarNav/sidebar';
import ComingSoonLayout from '../components/ComingSoon/coming-soon-layout';

const service_tab_panels = [
  <ComingSoonLayout key={1}></ComingSoonLayout>,
  <ComingSoonLayout key={2}></ComingSoonLayout>,
  <ComingSoonLayout key={3}></ComingSoonLayout>,
  <ComingSoonLayout key={4}></ComingSoonLayout>,
  <ComingSoonLayout key={5}></ComingSoonLayout>,
  <ComingSoonLayout key={6}></ComingSoonLayout>,
];
export default function ServicesPage() {
  return (
    <div className="metaWrapper">
      <Sidebar
        nav_list={array['nav_list']}
        social_list={array['social_links']}
      ></Sidebar>
      <ImgTabs
        nav_array={services_list}
        tab_panels={service_tab_panels}
      ></ImgTabs>
      ,
    </div>
  );
}
