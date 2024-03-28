import React from 'react'
import EntryLevelLeftSideContainer from '../../components/Container/EntryLevelLeftSideContainer'
import EntryLevelRightSideContainer from '../../components/Container/EntryLevelRightSideContainer'
import ForgetPasswordForm from '../../components/Forms/ForgetPasswordForm'
const ResetPassword = () => {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <EntryLevelLeftSideContainer bgImage="forget-password-bg-image" />
        <EntryLevelRightSideContainer formTitle="Change your Password" formWidth="col-md-6 col-lg-6" formHeaderClassName="login-heading mb-5" form={<ForgetPasswordForm/>}/>
      </div>
    </div>
  )
}

export default ResetPassword