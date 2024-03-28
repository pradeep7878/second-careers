import React from "react";
import EntryLevelLeftSideContainer from "../../components/Container/EntryLevelLeftSideContainer";
import EntryLevelRightSideContainer from "../../components/Container/EntryLevelRightSideContainer";
import LoginForm from "../../components/Forms/LoginForm";

const Login = () => {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <EntryLevelLeftSideContainer bgImage="bg-image" />
        <EntryLevelRightSideContainer formWidth="col-md-6 col-lg-6" formHeaderClassName="login-heading mb-5" formTitle="Sign In to Second Careers" form={<LoginForm/>} formName='login' />
      </div>
    </div>
  );
};

export default Login;
