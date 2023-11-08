import React, { useRef, useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { LeftArrow, RightArrow } from '@/utils/icons/icons';

const SwiperSlider = ({ swiperWidth, ...props }) => {
  const {
    slideContent,
    swiperProps: { slidesPerView, isPagination },
    customProps: { marginOneSide },
  } = props;

  const sliderRef = useRef(null);
  useEffect(() => {
    const initializeSwiper = () => {
      // Define your Swiper settings
      new Swiper(sliderRef.current, {
        slidesPerView: slidesPerView,
        spaceBetween: 30,
        // Add more Swiper settings as needed
        loop: true, // Enable infinite loop
        navigation: {
          nextEl: '.swiper-button-next', // CSS selector for the next button
          prevEl: '.swiper-button-prev', // CSS selector for the previous button
        },
        pagination: {
          el: '.swiper-pagination', // CSS selector for pagination container
          clickable: true, // Allow clicking on pagination bullets to navigate
          enabled: isPagination || false,
        },
        autoplay: {
          delay: 3000, // Delay between automatic slides (in milliseconds)
          disableOnInteraction: false, // Do not pause autoplay on user interaction
        },
      });
    };

    // Check if the Swiper script has already loaded
    if (typeof Swiper === 'function') {
      initializeSwiper();
    } else {
      // If the script hasn't loaded yet, listen for the script to load
      window.addEventListener('swiper-script-loaded', initializeSwiper);
    }

    // Cleanup: Remove the event listener
    return () => {
      window.removeEventListener('swiper-script-loaded', initializeSwiper);
    };
  }, [slideContent, slidesPerView, swiperWidth]);

  return (
    <>
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
          />
        </Head>
        <div
          className={`swiper-container overflow-hidden relative`}
          style={{
            marginRight: marginOneSide,
            marginLeft: marginOneSide,
            width: swiperWidth,
          }}
          ref={sliderRef}
        >
          <div className="swiper-wrapper">
            {slideContent.map((value, index) => <div className='swiper-slide' key={index}>{value}</div>)}
          </div>

          <div className="swiper-pagination" style={{ fontSize: '40px' }}></div>
          <div className="swiper-button-prev bg-[#0A405C] text-white h-4 w-4 md:h-8 md:w-8 rounded-full left-5 after:hidden">
            <LeftArrow />
          </div>
          <div className="swiper-button-next bg-[#0A405C] text-white h-4 w-4 md:h-8 md:w-8 rounded-full right-5 after:hidden">
            <RightArrow />
          </div>
        </div>
        {/* Use the Next.js Script tag to load the Swiper script */}
        <Script
          src="https://unpkg.com/swiper/swiper-bundle.min.js"
          onLoad={() => {
            // Trigger a custom event when the script is loaded
            const event = new Event('swiper-script-loaded');
            window.dispatchEvent(event);
          }}
        />
      </div>
    </>
  );
};

export default SwiperSlider;
