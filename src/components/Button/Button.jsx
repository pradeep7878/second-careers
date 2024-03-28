import React from "react";

const Button = ({ className, title, buttonType }) => {
  return (
    <button className={className} type={buttonType}>
      {title}
    </button>
  );
};

export default Button;
