import React, { useState } from "react";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(true);

  function toggleFn(e) {
    if (e.getAttribute("class") === "toggle_ball") {
      e.setAttribute("class", "toggled_ball");
    } else if (e.getAttribute("class") === "toggled_ball") {
      e.setAttribute("class", "toggle_ball");
    }
  }

  return (
    <aside>
      <menu>
        <h5>Menu</h5>
        <p onClick={()=>{
          setOpenMenu(!openMenu)
        }}>&#9776;</p>
      </menu>

      {openMenu && (
        <ul>
          <li>
            <div className="menu_toggle">
              <p>Edit Profile</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggled_ball"
                ></span>
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="menu_toggle">
              <p>Medical</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggle_ball"
                ></span>
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="menu_toggle">
              <p>Next of Kin</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggle_ball"
                ></span>
              </p>
            </div>
          </li>
          <li>
            <div className="menu_toggle">
              <p>Dependents</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggle_ball"
                ></span>
              </p>
            </div>
          </li>
          <li>
            <div className="menu_toggle">
              <p>Education History</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggle_ball"
                ></span>
              </p>
            </div>
          </li>
          <li>
            <div className="menu_toggle">
              <p>Employment History</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggle_ball"
                ></span>
              </p>
            </div>
          </li>
          <li>
            <div className="menu_toggle">
              <p>Documents</p>
              <p className="toggle">
                <span
                  onClick={(e) => {
                    toggleFn(e.target);
                  }}
                  className="toggle_ball"
                ></span>
              </p>
            </div>
          </li>
        </ul>
      )}
    </aside>
  );
};

export default Menu;
