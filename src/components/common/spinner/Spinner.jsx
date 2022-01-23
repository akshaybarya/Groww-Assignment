import React from "react";
import spinner from "./Spinner.gif";

const Spinner = () => (
  <div className="Spinner">
    <img
      src={spinner}
      style={{ width: "100px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </div>
);

export default Spinner;
