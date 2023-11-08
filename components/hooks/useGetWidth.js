import { useEffect, useState, useRef } from 'react';

export function useGetWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const divWidth = ref.current.offsetWidth;
        setWidth(divWidth);
      }
    };

    // Call handleResize once to get the initial width
    handleResize();

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log("Width Effet")

  return [ref, width];
}

// const [ref, width] = useGetWidth();
