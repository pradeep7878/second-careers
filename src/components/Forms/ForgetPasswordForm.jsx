import React from 'react'
import Button from '../Button/Button'
import Label from '../Label/Label'
import InputGroup from '../Input/InputGroup'
import Input from '../Input/Input'
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { BsFillEyeSlashFill } from "react-icons/bs";

const ForgetPasswordForm = () => {
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
      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type="password"
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
          placeHolder="New Password"
          ariaLabel="password"
        />

        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={<BsFillEyeSlashFill className="fs-3 visible-eye" />}
        />
      </div>
      <Label title="Please enter your new password." className="mb-3 text-danger" />
      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type="password"
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
          placeHolder="Confirm Password"
          ariaLabel="password"
        />

        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={<BsFillEyeSlashFill className="fs-3 visible-eye" />}
        />
      </div>
      <Label title="Please enter confirm password." className="mb-3 text-danger" />

      <div className="d-grid mt-3">
        <Button
          className="btn btn-lg btn-login fw-bold mb-2"
          title="Sign in"
        />
       
      </div>
    </form>
  )
}

export default ForgetPasswordForm