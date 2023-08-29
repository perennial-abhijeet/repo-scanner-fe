import React from "react";

function ErrorComponent({ message }) {
  return <h3 className="text-danger text-center m-5">{message}</h3>;
}

export default ErrorComponent;
