import React from "react";

const Button = () => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className="primeButton"
    >
      Submit
    </button>
  );
};

export default Button;
