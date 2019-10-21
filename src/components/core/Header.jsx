import React from 'react';
import { GithubCorner } from './GithubCorner';

// @todo replace inline color style with classes

const Header = () => (
  <div className="page-header">
    <h2 className="page-title">
      <span style={{ color: '#3498db' }}>Issue</span>-<span style={{ color: 'black' }}>Collab</span>
    </h2>
    {GithubCorner}
  </div>
);

export default Header;
