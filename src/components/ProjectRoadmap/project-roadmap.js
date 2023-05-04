import React from 'react';
import './project-roadmap.scss';
export default class ProjectRoadmap extends React.Component {
  render() {
    const { roadmap = [] } = this.props;

    return (
      <div className="timelineContainer">
        {roadmap.map((roadmap_item) => (
          <div className="timelineItem">
            <div className="timelineItemContent">
              <h3 className="timelineItemTitle">{roadmap_item['title']}</h3>
              {roadmap_item['status'] === 'done' ? (
                <div
                  className="roadmapIconDiv"
                  style={{ color: '$normalprimary' }}
                >
                  <span
                    class="iconify"
                    data-icon={roadmap_item['status_icon']}
                    data-inline="false"
                  ></span>
                  <h5 className="roadmapIconLabel">{roadmap_item['status']}</h5>
                </div>
              ) : roadmap_item['status'] === 'not done' ? (
                <div className="roadmapIconDiv" style={{ color: 'red' }}>
                  <span
                    class="iconify"
                    data-icon={roadmap_item['status_icon']}
                    data-inline="false"
                  ></span>
                  <h5 className="roadmapIconLabel">{roadmap_item['status']}</h5>
                </div>
              ) : roadmap_item['status'] === 'in progress' ? (
                <div className="roadmapIconDiv" style={{ color: 'yellow' }}>
                  <span
                    class="iconify"
                    data-icon={roadmap_item['status_icon']}
                    data-inline="false"
                  ></span>
                  <h5 className="roadmapIconLabel">{roadmap_item['status']}</h5>
                </div>
              ) : null}

              <span className="circle" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
