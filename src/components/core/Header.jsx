import React from 'react';
import './Header.scss';
import icon from '../../images/github-icon.png';

const Header = () => (
  <div className="page-header">
    <h2 className="page-header-title">
      <span style={{ color: '#3498db' }}>Issue</span>-<span style={{ color: 'black' }}>Collab</span>
    </h2>
    <img className="github-icon" src={icon} alt="github-logo" />
  </div>
);

export default Header;
