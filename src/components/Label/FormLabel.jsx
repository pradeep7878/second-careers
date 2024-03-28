import React from "react";

const FormLabel = ({labelFieldName, lableClassName}) => {
  return (
    <label className={lableClassName}>
      {labelFieldName} <span className="text-danger">*</span>
    </label>
  );
};

export default FormLabel;
