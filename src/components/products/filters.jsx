import React from "react";

const Filters = props => {
  return (
    <div>
      {/* filter header */}
      <h5>Filters</h5>
      {/* filter tags */}
      <div className="tags">
        {props.types.map(type => (
          <span
            style={{ cursor: "pointer" }}
            key={type.id}
            className="tag"
            onClick={() => props.onFilterChange(type)}
          >
            {type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Filters;
