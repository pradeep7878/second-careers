import React, { useState } from 'react'
import Input from '../components/Input/Input'
import FormInput from '../components/Input/FormInput'
import ProfessionalSignUpForm from '../../src/components/Forms/ProfessionalSignUpForm';

const ProfessionalSignupValidation = () => {

  const [inputValues, setInputValues] = useState({
      firstName       : "Pradeep",
      lastName        : "",
      emailID         : "",
      mobileNumber    : "",
      dateOfBirth     : "",
      country         : "",
      city            : "",
      password        : "",
      confirmPassword : ""
  })  

  const inputs = [
    {
      id : 1,
      name : "username",
      type : "text",
      placeholder : "Username",
      label  :"Username",
      errorMessage : "Username should be 3-16 characters and it shouldn't include special characters",
      required:true,
      pattern:"^[A-Za-z0-9]{3,16}$",
      className : "form-control"
    },
    {
      id : 2,
      name : "email",
      type : "email",
      placeholder : "Email",
      label  :"Email",
      errorMessage : "Email should be in correct format",
      required:true,
      pattern : "^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$",
      className : "form-control"


    },
    {
      id : 3,
      name : "birthday",
      type : "date",
      placeholder : "Birthday",
      label  :"Birthday",
      required:true,
      className : "form-control"


    },
    {
      id : 4,
      name : "password",
      type : "text",
      placeholder : "Password",
      label  :"Password",
      errorMessage : "Password sholud be 8-20 characters and include 1 character, 1 number, 1 special character",
      required:true,
      pattern:"^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      className : "form-control"



    },
    {
      id : 5,
      name : "confirmPassword",
      type : "text",
      placeholder : "ConfirmPassword",
      label  :"ConfirmPassword",
      errorMessage : "Password doesn't match",
      required:true,
      pattern : inputValues.password,
      className : "form-control"


    },
  ]

  return (
    <div>
       <h1>Professional Signup Validation </h1>
        {
            inputs.map((input) => {
                return(
                    // <ProfessionalSignUpForm 
                    //     key={input.id}
                    //     type={input.type}
                    //     id={input.id}
                    //     ariaLabel={input.name}
                    //     required={input.required}
                    //     className={input.className}
                    //     valueFromProfessionalSignup={input.label} 
                    //     randomText = "randomText" />
                    <ProfessionalSignUpForm randomText={input.name}/>
                )
            })
        }
    </div>
  )
}

export default ProfessionalSignupValidation
