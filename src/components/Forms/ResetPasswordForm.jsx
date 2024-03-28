import React from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import InputGroup from "../Input/InputGroup";
import Input from "../Input/Input";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";

const ResetPasswordForm = () => {
  return (
    <form>
      <div className="input-group mb-3 login-form">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon1"
          reIcons={<PiEnvelopeSimpleOpenThin className="fs-3" />}
        />
        <Input
          type="email"
          className="form-control login-input border border-0 rounded-3"
          placeHolder="Email ID"
          ariaLabel="email"
        />
      </div>
      <Label
        className="mb-3 text-danger"
        title="Please enter an email address."
      />

      <div className="d-grid mt-3">
        <Button
          className="btn btn-lg  btn-login  fw-bold mb-2"
          title="Sign in"
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
