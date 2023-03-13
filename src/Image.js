import React from "react";
import image from "./QIT Logo.png";
import Avatar from "@material-ui/core/Avatar";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import Card from "./ImageMain";
import CalendarMain from "./CalenderMain.js";
import { Link } from "react-router-dom";
import Button from "devextreme-react/button";

const CalendarRender = () => {
  return (
    <div>
      <Card>
        <div className="Container">
          <div className="row">
            <div className="col-md-5">
              <img
                src={image}
                alt=""
                style={{
                  width: "200px",
                  marginLeft: "60px",
                  marginTop: "30px",
                }}
              />
              <hr />
              <div style={{ marginLeft: "30px", paddingBottom: "5px" }}>
                <h2 style={{ fontWeight: 700 }}>
                  Discovery Call with Quantum IT
                </h2>
                <div style={{ marginTop: "30px" }}>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#737373",
                    }}
                  >
                    {" "}
                    <FaClock
                      style={{ fontSize: "15px", marginRight: "10px" }}
                    />
                    30 min
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#737373",
                    }}
                  >
                    {" "}
                    <FaVideo
                      style={{ fontSize: "15px", marginRight: "10px" }}
                    />
                    Web conferencing details provided upon confirmation.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <CalendarMain />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CalendarRender;
