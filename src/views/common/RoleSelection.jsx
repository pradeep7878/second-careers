import React from "react";
import EntryLevelLeftSideContainer from "../../components/Container/EntryLevelLeftSideContainer";
import RoleSelectionLayout from "../../layouts/RoleSelectionLayout";

const RoleSelection = () => {
  return (
    <div className="container-fluid ps-md-0">
      <div className="row g-0">
        <EntryLevelLeftSideContainer bgImage="role-selectors-bg-image" />
        <RoleSelectionLayout/>
      </div>
    </div>
  );
};

export default RoleSelection;
