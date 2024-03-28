import React from "react";

const InputGroup = ({ className, id, reIcons }) => {  
  return (
    <span className={className} id={id}>
      {reIcons}
    </span>
     
  );
};

export default InputGroup;
