import React, { useContext } from "react";
import Category from "./Category";
import DashboardContext from "../context/DashboardContext";

const Dashboard = () => {
  const { state } = useContext(DashboardContext);

  return (
    <div className="dashboard">
      {state.categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          showRemoveButton={category.name !== "CSPM Executive Dashboard"}
        />
      ))}
    </div>
  );
};

export default Dashboard;
