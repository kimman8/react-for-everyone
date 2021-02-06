import React from "react";
import PropTypes from "prop-types";

export function Filter({ filter, setFilter }) {
  return (
    <label>
      Filter:
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
    </label>
  );
}

Filter.protoTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
