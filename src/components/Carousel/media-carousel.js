import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import './carousel.scss';

export default class MediaCarousel extends React.Component {
  render() {
    const { media_file_list = [] } = this.props;
    return (
      <div>
        <Carousel>
          {media_file_list.map((file) => (
            <div>
              <img src={file} alt="file"></img>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
