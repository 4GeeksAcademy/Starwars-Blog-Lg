import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const SearchBar = ({ options, onSelect }) => {
  const [selected, setSelected] = useState([]);

  const handleSearch = (selected) => {
    onSelect(selected[0]);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "15px" }}>
      <label style={{ color: "yellow", fontWeight: "bold", marginRight: "15px" }}>
        Search a Character, Vehicle or Planet:
      </label>
      <Typeahead
        id="search-bar"
        options={options}
        onChange={handleSearch}
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;