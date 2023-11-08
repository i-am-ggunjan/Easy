import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function ResponsiveCarousel({ contentList }) {
    return <Carousel
        showThumbs={false}
        infiniteLoop
        emulateTouch={true}
    >
        {contentList.map((content, index) => <div key={index}>{content}</div>)}
    </Carousel>
}
