import React from 'react';
import ProjectStackContainer from '../ProjectStack/project-stack-container';
import ProjectDetailsContainer from '../ProjectDetails/project-details-container';
import ProjectBreakdownTabs from '../ProjectBreakdownTabs/project-breakdown-tabs';
import ProjectRoadmap from '../ProjectRoadmap/project-roadmap';
import '../ProjectLayout/project-layout.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SectionDividingLabel from '../SectionDividingLabel/section-dividing-label';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default class ProjectLayout extends React.Component {
  render() {
    const { project_dict = {} } = this.props;
    return (
      <div className="projectLayoutWrapperWrapper">
        <div className="projectLayoutWrapper">
          <div className="projectPageHeader">
            <h1 className="projectTitle">{project_dict['title']}</h1>
            <div className="projectPageHeaderButtonContainer">
              <a className="iconLink" href={project_dict['repo_link']}>
                <FontAwesomeIcon
                  icon={faGithub}
                  className="githubButton"
                ></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <div className="secondSectionProjectLayout">
            <ProjectDetailsContainer
              project_dict={project_dict}
            ></ProjectDetailsContainer>
            <ProjectBreakdownTabs
              project_features={project_dict['features']}
              project_demonstrated_capabilities={
                project_dict['demonstrated_capabilities']
              }
            ></ProjectBreakdownTabs>
          </div>
          <SectionDividingLabel label_name="Stack"></SectionDividingLabel>
          <div className="firstSectionProjectLayout">
            <ProjectStackContainer
              project_stack={project_dict['stack']}
            ></ProjectStackContainer>
          </div>
          <SectionDividingLabel label_name="Roadmap"></SectionDividingLabel>
          <div className="thirdSectionProjectLayout">
            <ProjectRoadmap roadmap={project_dict['roadmap']}></ProjectRoadmap>
          </div>
        </div>
      </div>
    );
  }
}
