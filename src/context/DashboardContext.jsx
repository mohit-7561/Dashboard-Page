import React, { createContext, useReducer } from "react";
import { initialData } from "../data"; // Assume you have this initial data

const DashboardContext = createContext();

// Reducer function to handle actions
const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [...category.widgets, action.payload.widget],
              }
            : category
        ),
      };
    case "REMOVE_WIDGET":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(
                  (widget) => widget.id !== action.payload.widgetId
                ),
              }
            : category
        ),
      };
    default:
      return state;
  }
};

// Provider component to wrap around the application
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dashboardReducer, initialData);

  const addWidget = (categoryId, widget) => {
    dispatch({ type: "ADD_WIDGET", payload: { categoryId, widget } });
  };

  const removeWidget = (categoryId, widgetId) => {
    dispatch({ type: "REMOVE_WIDGET", payload: { categoryId, widgetId } });
  };

  return (
    <DashboardContext.Provider value={{ state, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardContext;
