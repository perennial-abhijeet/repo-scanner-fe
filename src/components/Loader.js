import React from "react";

function Loader({ text }) {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <p className="text-center">{text}</p>
    </div>
  );
}

export default Loader;
