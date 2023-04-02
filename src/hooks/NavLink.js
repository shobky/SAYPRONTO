import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useRef, useEffect } from 'react';

function NavLink(props) {
  const { to, ...rest } = props;
  const location = useLocation();
  const sectionRef = useRef(null);
  
  useEffect(() => {
    if (location.pathname === '/' && to.startsWith('#')) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.pathname, to]);

  if (to.startsWith('/#')) {
    return (
      <ScrollLink to={to.substring(2)} smooth duration={500} {...rest} />
    );
  } else {
    return (
      <ReactRouterLink to={to} {...rest} />
    );
  }
}

export default NavLink;
