import React from 'react';
import Labels from './Labels';
import Languages from './Languages';

// @todo add emotion for styled components

const TogglesContainer = ({ labels, languages, onToggleChange }) => (
  <div>
    <Labels labels={labels} onToggleChange={onToggleChange} />
    <Languages languages={languages} onToggleChange={onToggleChange} />
  </div>
);

export default TogglesContainer;
