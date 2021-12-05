import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Image from 'next/image';

const items = [
    {id:0, src:"/image1.jpg", height:300, width:900},
    {id:1, src:"/image2.jpg", height:300, width:900},
    {id:2, src:"/image3.jpg", height:300, width:900},
];

const Carousel = () => {
  return (
    <CarouselProvider
    naturalSlideWidth={190}
    naturalSlideHeight={30}
    totalSlides={3}
    isPlaying
    interval={5000}
    infinite
  >
    <Slider>
        {items.map((item, idx)=>
        <Slide key={item.id} index={idx}>
            <Image src={item.src} alt="no-image"
             height={item.height} width={item.width}/>
        </Slide>
        )}
    </Slider>
  </CarouselProvider>
  );
}

export default Carousel;