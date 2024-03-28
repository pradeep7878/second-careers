import React from "react";
import EntryLevelNavbar from "../Navbar/EntryLevelNavbar.jsx";
import SocialMediaContainer from "./SocialMediaContainer.jsx";
import FormFooter from "./FormFooter.jsx";
import Label from "../Label/Label.jsx";

const EntryLevelRightSideContainer = ({
  formTitle,
  form,
  formName,
  formWidth,
  formHeaderClassName,
  formFooterQuestion,
  footerNavigationLink,
}) => {
  return (
    <div className="col-md-8 col-lg-7">
      <EntryLevelNavbar />
      <div className="login d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className={`${formWidth} mx-auto`}>
              <h4 className={`${formHeaderClassName} `}>{formTitle}</h4>
              {form}

              {formName === "login" ? <SocialMediaContainer /> : null}

              <div className="text-center mt-3">
                {formFooterQuestion}
                <Label
                  className="brand-color ms-1 signup-link"
                  title={footerNavigationLink}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryLevelRightSideContainer;
