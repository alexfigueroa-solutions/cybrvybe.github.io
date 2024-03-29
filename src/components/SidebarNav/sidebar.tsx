import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../SidebarNav/sidebar.scss';
import 'react-tabs/style/react-tabs.css';
import Image from '../Image';
import array from '../../data/nav_list';
import TextChanger from '../TextChanger/text-changer';
import ResumeDownloadBtn from '../ResumeDownloadButton/resume-download-btn';

import { Link } from 'gatsby';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false,
    };
  }

  toggleNavbar(e) {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { nav_list = [], social_list = [] } = this.props;
    const classOpenSidebar =
      'sidebarWrapper' + (this.state.collapsed ? ' collapsed' : '');
    return (
      <div className="mainMainWrapper">
        <div className="sidebarOpenBtnDiv">
          <button className="sidebarOpenBtn" onClick={this.toggleNavbar}>
            &#9776;
          </button>
        </div>
        <div className="mainNavContainer">
          <div>
            <div
              className={classOpenSidebar}
              style={this.state.sidebarBackgroundColor}
              id="sidebarWrapper"
            >
              <div className="introWrapperWrapper">
                <div className="introWrapper">
                  <Image
                    src="profile_pic.jpg"
                    alt={''}
                    className="profilePic"
                  ></Image>
                  <h3 className="name">Alejandro Figueroa</h3>
                  <TextChanger
                    text_array={array['interests_list']}
                  ></TextChanger>
                  <ResumeDownloadBtn></ResumeDownloadBtn>
                </div>
              </div>

              <div className="socialWrapper">
                {social_list.map((social_link) => (
                  <a href={social_link.link} key={1}>
                    <FontAwesomeIcon
                      icon={social_link.icon_class}
                      className="socialIcon"
                    ></FontAwesomeIcon>
                  </a>
                ))}
              </div>
              <div className="navWrapper">
                {nav_list.map((nav_item) => (
                  <Link to={nav_item.link} className="navItemWrapper" key={2}>
                    <FontAwesomeIcon
                      icon={nav_item.icon_class}
                      className="icon"
                    ></FontAwesomeIcon>

                    <h3 className="navItemTitle">{nav_item.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
