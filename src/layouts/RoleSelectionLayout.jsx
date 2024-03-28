import React from "react";
import EntryLevelNavbar from "../components/Navbar/EntryLevelNavbar";
import CardWithImage from "../components/Cards/CardWithImage";
import Image from "../utils/images.js";


const RoleSelectionLayout = () => {
  return (
    <div className="col-md-8 col-lg-7">
      <EntryLevelNavbar />
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-9 mx-auto">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <CardWithImage
                    cardImage={Image.logo}
                    cardTitle="Professional"
                    cardText=" Empowering Experienced semi-retired or retired
                    Professionals with Fulfilling Opportunities – CXOs,
                    HR Professionals; Finance Professionals, Sales &
                    Marketing Professionals, Tech Experts, and Board"
                    carTextClassName="role-selection-description"
                  />
                </div>
                <div className="col">
                  <CardWithImage
                    cardImage={Image.logo}
                    cardTitle="Employer"
                    cardText="Enabling enterprises, start-ups, and NGOs to find
                    well-screened experienced talent from a pool of
                    well-qualified semi-retired or retired professionals"
                    carTextClassName="role-selection-description"
                  />
                </div>
                <div className="col">
                  <CardWithImage
                    cardImage={Image.logo}
                    cardTitle="Partner"
                    cardText=" Engaging platform for Recruiting firms, Skills Development  Firms, and Coaching Firms to partner"
                    carTextClassName="role-selection-description"
                  />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionLayout;
