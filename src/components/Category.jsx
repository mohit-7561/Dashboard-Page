import React, { useContext, useState } from "react";
import Widget from "./Widget";
import DashboardContext from "../context/DashboardContext";

const Category = ({ category, showRemoveButton }) => {
  const { addWidget } = useContext(DashboardContext); // Access addWidget from context
  const [widgetName, setWidgetName] = useState(""); // State for widget name
  const [widgetText, setWidgetText] = useState(""); // State for widget text

  const handleAddWidget = () => {
    if (!widgetName || !widgetText) return; // Ensure both fields are filled

    const newWidget = {
      id: Date.now(),
      name: widgetName,
      text: widgetText,
    };
    addWidget(category.id, newWidget);
    setWidgetName("");
    setWidgetText("");
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="widget-list">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
            showRemoveButton={category.name !== "CSPM Executive Dashboard"}
          />
        ))}
      </div>
      <div className="add-widget-form">
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default Category;
