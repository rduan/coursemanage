import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import loadingDots from './loadingDots'

const Header = ()=> {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      <loadingDots interval={100} dots={20}/>
    </nav>
  );
};

export default Header;