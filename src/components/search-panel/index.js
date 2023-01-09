import React from 'react';

import './search-panel.css';

function SearchPanel() {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '20px',
  };
  return (
    <div className="search-panel">
      <input placeholder={searchText} style={searchStyle} />
    </div>
  );
}

export default SearchPanel;
