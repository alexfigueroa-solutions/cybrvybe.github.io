import React from 'react';
import MediaCarousel from '../Carousel/index.tsx';
import ProjectDescriptionContainer from '../ProjectDescription/project-description-container';
import './project-details-container.scss';

export default class ProjectDetailsContainer extends React.Component {
  render() {
    const { project_dict = {} } = this.props;

    return (
      <div className="projectDetailsContainer">
        <div className="projectDetailsMediaCarouselWrapper">
          <MediaCarousel
            mediaFileList={project_dict['media_files']}
          ></MediaCarousel>
        </div>
        <div className="projectDetailsProjectDescriptionContainerWrapper">
          <ProjectDescriptionContainer
            className="projectDetailsDescription"
            project_description={project_dict['description']}
          ></ProjectDescriptionContainer>
        </div>
      </div>
    );
  }
}
