import React from "react";
import "../../styles/components/Navbar/SubNav.css";

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
          <a className="a-subnav prijava" href="/">
            Prijava za putovanje!
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default SubNav;
