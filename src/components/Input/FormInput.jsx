import React, { useState } from "react";
import FormLabel from "../Label/FormLabel";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';


const FormInput = ({
  formInputDivClassName,
  formFieldName,
  formInputFieldError,
  formInputType,
  formInputId,
  formAriaLabel,
  valueFromProfessionalSignup,
  nameFromProfessionalSignup,
  onChange,
  errorMessage,
  pattern,
  dataTestid,
  role,
  alt,
  handleEyeClick,
  showPassword

}) => {



  
  

  return (
    <div className={`${formInputDivClassName} form-input-component`}>
      <FormLabel labelFieldName={formFieldName} lableClassName="form-label" />
      <div className="input-group">        
        <Input
          type={formInputType}
          className="form-control"
          nameFromProfessionalSignup={nameFromProfessionalSignup}
          id={formInputId}
          ariaLabel={formAriaLabel}
          required={true}
          valueFromProfessionalSignup={valueFromProfessionalSignup}
          onChange={onChange}
          pattern={pattern}
          dataTestid={dataTestid}
          role={role}span
          alt={alt}          
        />
        <span id="signup-error-message" className="text-danger mt-2 signup-error-message professional-signup-error-message">
        {errorMessage }
       </span>
      



        {(formFieldName === "Password" || formFieldName === "Confirm Password")   ? (
          <InputGroup
            className="input-group-text bg-white"
            id="visibile-icon"
            reIcons={showPassword ?  
                              <FaEye className="visible-eye" onClick={handleEyeClick} />: 
                              <FaEyeSlash className="visible-eye" onClick={handleEyeClick} />
                  }
          />
        ) : null}
      </div>
      {/* <div id="signup-error-message" className="text-danger mt-2 signup-error-message professional-signup-error-message">
        {errorMessage }
      </div> */}
    </div>
  );
};

export default FormInput;
