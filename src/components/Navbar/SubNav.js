import React from "react";
import "../../styles/components/Navbar/SubNav.css";
import FormSelectorModal from "./FormSelectorModal";

function SubNav() {
  return (
    <div className="subnav">
      <div className="subnav-inner">
        <div className="subnav-links">
          <a className="a-subnav" href="tel:+38521344842">
          +385 (0)21 344 842
          </a>
          <a className="a-subnav" href="mailto:desk@f-tours.hr">
          desk@f-tours.hr
          </a>
          <FormSelectorModal />
        </div>
      </div>
    </div>
  );
}

export default SubNav;
