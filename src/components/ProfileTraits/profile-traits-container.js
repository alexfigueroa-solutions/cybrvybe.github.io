import React from 'react';
import '../ProfileTraits/profile-traits-container.scss';
export default class ProfileTraitsContainer extends React.Component {
  render() {
    const { traits_list = [] } = this.props;
    return (
      <div className="profileTraitsContainer">
        {traits_list.map((trait) => (
          <div
            data-sal="slide-down"
            data-sal-duration="500"
            data-sal-delay="50"
            data-sal-easing="ease"
            className="traitContainerWrapper"
            key={1}
          >
            <div className="traitContainer">
              <div className="traitIconDiv">
                <span
                  className="traitIcon"
                  data-icon={trait.icon}
                  data-inline="false"
                ></span>
              </div>
              <h3 className="traitTitle">{trait.title}</h3>
              <p className="traitDescription">{trait.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
