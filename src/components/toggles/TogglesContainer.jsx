import React from 'react';
import Labels from './Labels';
import Languages from './Languages';

const TogglesContainer = ({ labels, languages, onToggleChange }) => (
  <div>
    <Labels labels={labels} onToggleChange={onToggleChange} />
    <Languages languages={languages} onToggleChange={onToggleChange} />
  </div>
);

export default TogglesContainer;
