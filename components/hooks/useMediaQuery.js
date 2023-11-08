// useMediaQuery.js
import { useState, useEffect } from 'react';
const breakpoints_ = {
  xs: '(max-width: 599px)',
  sm: '(min-width: 600px) and (max-width: 899px)',
  md: '(min-width: 900px) and (max-width: 1199px)',
  lg: '(min-width: 1200px) and (max-width: 1535px)',
  xl: '(min-width: 1536px)',
};
const useMediaQuery = (breakpoints = breakpoints_) => {
  const [activeBreakpoints, setActiveBreakpoints] = useState({});

  useEffect(() => {
    const updateBreakpoints = () => {
      const updatedBreakpoints = {};
      for (const breakpoint in breakpoints) {
        updatedBreakpoints[breakpoint] = window.matchMedia(
          breakpoints[breakpoint]
        ).matches;
      }
      setActiveBreakpoints(updatedBreakpoints);
    };

    updateBreakpoints();

    window.addEventListener('resize', updateBreakpoints);

    return () => {
      window.removeEventListener('resize', updateBreakpoints);
    };
  }, []);

  return activeBreakpoints;
};

export default useMediaQuery;
