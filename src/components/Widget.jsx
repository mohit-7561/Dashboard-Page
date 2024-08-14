import React, { useContext } from "react";
import DashboardContext from "../context/DashboardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Widget = ({ widget, categoryId }) => {
  const { removeWidget } = useContext(DashboardContext);

  // Function to handle removing the widget
  const handleRemove = () => {
    removeWidget(categoryId, widget.id);
  };

  return (
    <div className="widget">
      <div className="widget-remove">
        <button onClick={handleRemove} className="remove-button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="widget-info">
        <h4>{widget.name}</h4>
        <p>{widget.text}</p>
      </div>
    </div>
  );
};

export default Widget;
