import React from "react";

const Nav = () => {
  return (
    <nav>
      <h4>LAVIDALOCAL ENTERPRISES</h4>
      <div>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Payroll</a>
        </li>
        <li>
          <a href="#">Leave</a>
        </li>
        <li>
          <a href="#">Loan</a>
        </li>
        <li>
          <a href="#">Appraisal</a>
        </li>
        <li>
          <a href="#">Subscription</a>
        </li>
        <li>
                 </li>
      </ul>

      <div className="utility_tab">
            <div className="utility">
              <p className="icon"></p>
              <p>Profile</p>
            </div>
            <div  className="utility">
              <p className="icon"></p>
              <p>Settings</p>
            </div>{" "}
            <div  className="utility">
              <p className="icon"></p>
              <p>Logout</p>
            </div>
          </div>

      </div>
    </nav>
  );
};

export default Nav;
