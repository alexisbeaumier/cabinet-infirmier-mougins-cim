import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    setTransitionStage('fadeOut');
    const timer = setTimeout(() => {
      setDisplayChildren(children);
      setTransitionStage('fadeIn');
    }, 200);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      style={{
        transition: 'opacity 0.2s ease',
        opacity: transitionStage === 'fadeIn' ? 1 : 0,
      }}
    >
      {displayChildren}
    </div>
  );
}