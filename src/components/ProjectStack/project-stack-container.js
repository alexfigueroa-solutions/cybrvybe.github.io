import React from 'react';
import './project-stack-container.scss';

export default class ProjectStackContainer extends React.Component {
  render() {
    const { project_stack = [] } = this.props;

    return (
      <div className="projectStackDiv">
        {project_stack.map((entry) => (
          <div className="stackEntryDivWrapper">
            <div className="stackEntryDiv">
              <div className="iconDiv">
                <span
                  className="stackIcon"
                  class="iconify"
                  data-icon={entry.icon}
                ></span>
              </div>
              <div className="titleDiv">
                <h3>{entry.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
