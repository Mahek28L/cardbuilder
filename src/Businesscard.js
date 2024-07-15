import React from "react";
import "./Businesscard.css";
function Businesscard(props) {
    console.log("props---", props);
  return (
    <div id="">
      <center>
        {" "}
        <div id="crt1"><p><b>{props.companyname}</b></p></div>
      </center>
      <div id="crt2"></div>
      <div id="crt3">
        <p id="i1">
          <b>{props.fullname}</b>
        </p>
        <p id="i2">
          <u>{props.position}</u>
        </p>
        <p id="i3">
          <i class="bx bx-envelope" style={{ color: "white" }}></i>
          {props.email}
        </p>
        <p id="i4">
          <i class="bx bxs-phone-call" style={{ color: "white" }}></i>
          {props.phonenumber}
        </p>
        <p id="i5" >
          <i class="bx bxs-location-plus"></i>{props.address}</p>

        <p id="i6"></p>
      </div>
    </div>
  )
}

export default Businesscard;