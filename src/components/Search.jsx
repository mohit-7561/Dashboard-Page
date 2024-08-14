import React, { useState, useContext } from "react";
import DashboardContext from "../context/DashboardContext";
import Widget from "./Widget";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { state } = useContext(DashboardContext);

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter widgets based on the search term
  const filteredWidgets = state.categories.flatMap((category) =>
    category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Widgets..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {filteredWidgets.length > 0 ? (
          filteredWidgets.map((widget) => (
            <Widget
              key={widget.id}
              widget={widget}
              categoryId={widget.categoryId}
            />
          ))
        ) : (
          <p>No widgets found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
