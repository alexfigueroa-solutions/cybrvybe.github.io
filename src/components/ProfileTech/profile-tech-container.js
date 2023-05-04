import React from 'react';
import SectionDividingLabel from '../SectionDividingLabel/section-dividing-label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../profile/profile-tech-container.scss';
export default class ProfileTechContainer extends React.Component {
  render() {
    const { tech_list = [] } = this.props;

    return (
      <div className="wrapper">
        <SectionDividingLabel label_name="Technologies"></SectionDividingLabel>
        <div className="profileTechContainerWrapper">
          <div className="profileTechContainer">
            {tech_list.map((tech_entry) => (
              <div
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="0"
                data-sal-easing="ease"
                className="techEntryContainer"
              >
                <span
                  className="techIcon"
                  class="iconify"
                  data-icon={tech_entry.icon}
                ></span>
                <h3 className="techEntryTitle">{tech_entry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
