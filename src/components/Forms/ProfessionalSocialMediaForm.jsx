import React, { useState } from "react";
import FormInput from "../Input/FormInput";
import Input from "../Input/Input";
import PhoneInput from "react-phone-input-2";
import DateComponent from "../Date/DateComponent";
const ProfessionalSocialMediaForm = () => {

    const [professionalSocialMediaInputValues, setProfessionalSocialMediaInputValues] = useState({
        firstName       : "",
        lastName        : "",
        emailID         : "",
        mobileNumber    : "",
        dateOfBirth     : "",
        country         : "",
        city            : "",
        password        : "",
        confirmPassword : ""
    }) 




    const professionalSocialMediaInputs = [
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
      }
      ];


      const handleCreateAccount = (e) => {
        // e.preventDefault()
        // alert('hi')
      }
    
      const onChange = (e) => {
        setProfessionalSocialMediaInputValues({ ...professionalSocialMediaInputValues, [e.target.name]: e.target.value })
      }
    


  return (
    <form className="row signup-forms">

    {
        professionalSocialMediaInputs.map((professionalSocialMediaInput) => {
            return(
                <React.Fragment key={professionalSocialMediaInput.id}>
                  {professionalSocialMediaInput.name === "mobileNumber" ? <div className="col-md-6 mt-2 ">
                    <label className="mb-2">Mobile Number</label>
                    <PhoneInput
                      country={'in'}
                      countryCodeEditable={false}
                      enableSearch
                      onChange={(e) => setProfessionalSocialMediaInputValues({ ...professionalSocialMediaInputValues, 'mobileNumber': e })}
                      inputProps={{
                        alt: 'mobileNumber',
                      }}
                    />
                  </div> 

                :
                  professionalSocialMediaInput.name === "dateOfBirth" ? 
                    <div className="col-md-6 mt-2  ">
                      <label className="mb-2">Date of Birth</label>
                      <DateComponent 
                         inputProps={{
                          alt: 'dateOfBirth',
                        }}
                        />
                    </div>
                  :
                  <FormInput 
                  formInputDivClassName={professionalSocialMediaInput.name ==="emailID" ? "col-md-12 mt-2" : "col-md-6 mt-2"}
                  formInputType={professionalSocialMediaInput.type}
                  formInputId={professionalSocialMediaInput.name}
                  formAriaLabel={professionalSocialMediaInput.name}
                  formFieldName={professionalSocialMediaInput.label}
                  formInputFieldError={professionalSocialMediaInput.errorMessage}
                  formFieldRequired={true}
                  nameFromProfessionalSignup={professionalSocialMediaInput.name}
                  valueFromProfessionalSignup={professionalSocialMediaInputValues[professionalSocialMediaInput.name]}
                  onChange={onChange}
                  errorMessage={professionalSocialMediaInput.errorMessage}
                  pattern={professionalSocialMediaInput.pattern}
                  dataTestid={professionalSocialMediaInput.dataTestid}
                  role={professionalSocialMediaInput.role}
                  alt={professionalSocialMediaInput.alt}
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
            required
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
        <button className="btn sign-up-buttons ">Create Account</button>
      </div>
    </form>
  );
};

export default ProfessionalSocialMediaForm;
