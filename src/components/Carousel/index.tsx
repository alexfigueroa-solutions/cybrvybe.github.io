import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import './carousel.scss';

interface MediaCarouselProps {
  mediaFileList: string[];
}

export default function MediaCarousel(props: MediaCarouselProps): JSX.Element {
  const { mediaFileList } = props;

  return (
    <div>
      <Carousel>
        {mediaFileList.map((file: string, index: number) => (
          <div key={index}>
            <img src={file} alt="file" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
