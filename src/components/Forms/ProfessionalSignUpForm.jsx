import React, { useState } from "react";
import FormInput from "../Input/FormInput";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import DateComponent from "../Date/DateComponent";

const ProfessionalSignUpForm = (props) => {

  const [professionalSignupInputValues, setProfessionalSignupInputValues] = useState({
    firstName: "",
    lastName: "",
    emailID: "",
    mobileNumber: "",
    dateOfBirth: "",
    country: "",
    city: "",
    password: "",
    confirmPassword: ""
  })

  const [showPassword, setShowPassword] = useState(false)

  const professionalSignupInputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "FirstName",
      label: "FirstName",
      errorMessage: "First Name should be 3-30 characters and it shouldn't include special characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      className: "form-control",
      dataTestid: "firstName",
      role: "firstName",
      alt: "firstName"
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Lastname",
      label: "Lastname",
      errorMessage: "Last Name should be 3-16 characters and it shouldn't include special characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
      className: "form-control",
      dataTestid: "lastName",
      alt: "lastName"

    },
    {
      id: 3,
      name: "emailID",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "Email should be in correct format",
      required: true,
      pattern: "^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$",
      className: "form-control",
      alt: "emailID",
      dataTestid: "emailID",

    },
    {
      id: 4,
      name: "mobileNumber",
      type: "number",
      placeholder: "Mobile Number",
      label: "Mobile Number",
      required: true,
      className: "form-control",
      errorMessage: "Mobile number should be entered",
      alt: "mobileNumber",
      pattern: "^([+]\d{2})?\d{10}$",
      dataTestid: "mobileNumber",
    },
    {
      id: 5,
      name: "dateOfBirth",
      type: "date",
      placeholder: "Date of Birth",
      label: "Date of Birth",
      required: true,
      className: "form-control",
      alt: "dateOfBirth",
      dataTestid: "dateOfBirth",
    },
    {
      id: 6,
      name: "country",
      type: "text",
      placeholder: "Country",
      label: "Country",
      required: true,
      className: "form-control",
      errorMessage: "Type atleast 4 characters",
      alt: "country",
      pattern: "^[A-Za-z0-9]{4,30}$",
      dataTestid: "country",


    },
    {
      id: 7,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      required: true,
      className: "form-control",
      errorMessage: "Type atleast 4 characters",
      pattern: "^[A-Za-z0-9]{4,30}$",
      alt: "city",
      dataTestid: "city",


    },
    {
      id: 8,
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "Password",
      label: "Password",
      required: true,
      className: "form-control",
      errorMessage: "Password should contain 8-20 characters and it should have 1 special character,1 number",
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      alt: "password",
      dataTestid: "password",



    },
    {
      id: 9,
      name: "confirmPassword",
      type: showPassword ? "text" : "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
      className: "form-control",
      errorMessage: "Confirm Password does not match",
      pattern: professionalSignupInputValues.password,
      alt: "confirmPassword"


    },
  ]

  const handleCreateAccount = (e) => {
    // e.preventDefault()
    // alert('hi')
    console.log(professionalSignupInputValues)
  }

  const onChange = (e) => {
    setProfessionalSignupInputValues({ ...professionalSignupInputValues, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const onClick = () => {
    setShowPassword(!showPassword)
  }




  return (
    <form className="row signup-forms" >



      {
        professionalSignupInputs.map((professionalSignupInput) => {
          return (
            <React.Fragment key={professionalSignupInput.id}>
              {professionalSignupInput.name === "mobileNumber" ?
                <div className="col-md-6 mt-2  ">
                  <label className="mb-2">Mobile Number</label>
                  <PhoneInput
                    className="mobileComp w-100"
                    country={'in'}
                    dataTestid="mobileNumber"
                    countryCodeEditable={false}
                    enableSearch
                    onChange={(e) => setProfessionalSignupInputValues({ ...professionalSignupInputValues, 'mobileNumber': e })}
                    inputProps={{
                      alt: 'mobileNumber',
                    }}
                  />
                </div>
                :
                professionalSignupInput.name === "dateOfBirth" ?
                  <div className="col-md-6 mt-2  ">
                    <label className="mb-2">Date of Birth</label>
                    <DateComponent id="date-pick"/>
                  </div>
                  :
                  <FormInput
                    formInputDivClassName={professionalSignupInput.name === "emailID" ? "col-md-12 mt-2" : "col-md-6 mt-2"}
                    formInputType={professionalSignupInput.type}
                    formInputId={professionalSignupInput.name}
                    formAriaLabel={professionalSignupInput.name}
                    formFieldName={professionalSignupInput.label}
                    formInputFieldError={professionalSignupInput.errorMessage}
                    formFieldRequired={true}
                    nameFromProfessionalSignup={professionalSignupInput.name}
                    valueFromProfessionalSignup={professionalSignupInputValues[professionalSignupInput.name]}
                    onChange={onChange}
                    errorMessage={professionalSignupInput.errorMessage}
                    pattern={professionalSignupInput.pattern}
                    dataTestid={professionalSignupInput.dataTestid}
                    role={professionalSignupInput.role}
                    alt={professionalSignupInput.alt}
                    handleEyeClick={onClick}
                    showPassword={showPassword}
                  />
              }
            </React.Fragment>
          )
        })
      }


      <div className="col-12 mt-2">
        <div className="form-check">
          <Input
            className="form-check-input"
            type="checkbox"
            id="termsAndCondition"
            required={true}
            alt="checkbox"
          />


          <label className="form-check-label" htmlFor="invalidCheck">
            I agree to all the <a href="#">Terms</a> and
            <a href="#">Privacy policy</a>
          </label>
          {/* <div className="text-danger signup-error-message">You must agree before submitting.</div> */}
        </div>
      </div>

      <div className="d-grid mt-2">
        <button type="submit" className="btn sign-up-buttons" onClick={handleCreateAccount}>Create Account</button>
      </div>
    </form>
  );
};

export default ProfessionalSignUpForm;
