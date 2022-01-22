import React from "react";
import { Navigate } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <Navigate to="/all-banks" />
    </div>
  );
};

export default PageNotFound;
