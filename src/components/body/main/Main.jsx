import React from "react";
import Image from "../../../assets/evgeny-bauder-POtlM7Oa0mE-unsplash.jpg";
import Fingerprint from "../../../assets/fingerprint.webp"
import Signature from "../../../assets/signature.jpg"


function toggleFn(e) {
    if (e.getAttribute("class") === "toggle_ball") {
      e.setAttribute("class", "toggled_ball");
    } else if (e.getAttribute("class") === "toggled_ball") {
      e.setAttribute("class", "toggle_ball");
    }
  }
const Main = () => {


  return (
    <main>
      <header>
        <div className="toggle_container">
          <div className="menu_toggle">
            <p>Edit Profile</p>
            <p className="toggle">
              <span onClick={(e)=>toggleFn(e.target)} className="toggled_ball"></span>
            </p>
          </div>
        </div>

        <p className="text">
          Contrary to popular belief, Lorem ipsum is not simply a random text.
          It has roots in a pieceof classical Latin literature from 45BC, making
          it over 2000 years old. Richard Mcclintock, a Latin professor at
          Hampdan-Sydney College.
        </p>
      </header>

      <div >
        <div className="img_container">
          <img src={Image} alt="image" />
          <div className="img_options">
            <p>View Photo</p>
            <p>Upload Photo</p>
          </div>

          <p className="opt">Update Profile</p>
        </div>

        <div className="bio_data_container">
          <Data head={"Bio Data Information"}>
            <div className="info">
              <p>Title</p>
              <select name="value" id="title_value">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </select>
            </div>

            <div className="info">
              <p>First Name</p>
              <p>EBENEZER</p>
            </div>

            <div className="info">
              <p>Other Names</p>
              <p>TAIWO</p>
            </div>

            <div className="info">
              <p>Last Name</p>
              <p>BABALOLA</p>
            </div>

            <div className="info">
              <p>LGA</p>
              <p>ILESHA WEST</p>
            </div>

            <div className="info">
              <p>State Of Origin</p>
              <p>OGUN STATE</p>
            </div>

            <div className="info">
              <p>Country</p>
              <p>NIGERIA</p>
            </div>
          </Data>

          <Data head={"Employment Information"}>
            <div className="info">
              <p>Employer Number</p>
              <p>965-002</p>
            </div>

            <div className="info">
              <p>Employment Type</p>
              <p>FULL-TIME</p>
            </div>

            <div className="info">
              <p>Employment/Resumption Date</p>
              <p>2023-31-01</p>
            </div>

            <div className="info">
              <p>Designation</p>
              <p>SOFTWARE DEVERLOPER 1</p>
            </div>

            <div className="info">
              <p>Department</p>
              <p>ENTERPRISE UNIT</p>
            </div>
          </Data>

          <Data head={"Contact Informtion"}>
            <div className="info">
              <p>Mobile Number</p>
              <p>EBENEZER</p>
            </div>

            <div className="info">
              <p>Phone Number</p>
              <p>TAIWO</p>
            </div>

            <div className="info">
              <p>Primary Email</p>
              <p>BABALOLAEBENEZERTAIWO@GMAIL.COM</p>
            </div>

            <div className="info">
              <p>Secondary Email</p>
              <p>TAIWO</p>
            </div>
          </Data>
        </div>

       <div className="others">
       <Data head={"Others"}>
        <div className="info">
              <p>Signature</p>
              <img src={Signature} alt="Signature" />
            </div>

            <div className="info">
              <p>Fingerprint</p>
              <img src={Fingerprint} alt="Signature" />

            </div>

        </Data>
       </div>
      </div>
    </main>
  );
};

export default Main;

function Data({ head, children }) {
  return (
    <div className="bio_data">
      <div className="menu_toggle">
        <p>{head}</p>
        <p className="toggle">
          <span onClick={(e)=>toggleFn(e.target)} className="toggle_ball"></span>
        </p>
      </div>

      <div className="data">{children}</div>
    </div>
  );
}
