import React, { useState } from react;
import { Typeahead } from react-bootstrap-typeahead;
import "react-bootstrap-typeahead/css/Typeahead.css";

const SearchBar = ({ options, onSelect }) => {
  const [selected, setSelected] = useState([]);

  const handleSearch = (selected) => {
    onSelect(selected[0]);
  };

  return (
    <Typeahead
      id="search-bar"
      options={options}
      onChange={handleSearch}
      placeholder="Type to search..."
    />
  );
};

export default SearchBar;