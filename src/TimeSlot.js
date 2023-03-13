import React from "react";
import image from "./QIT Logo.png";
import { FaClock } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./ImageMain";
import { Link } from "react-router-dom";
// import Button from "devextreme-react/button";
// import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DateBox } from "devextreme-react";
import SelectBox from "devextreme-react/select-box";

const timeSlotSelection = [
  "11.00 AM",
  "12.00 PM",
  "01.00 PM",
  "02.00 PM",
  "03.00 PM",
  "04.00 PM",
  "05.00 PM",
  "06.00 PM",
];
const now = new Date();

const TimeSlot = () => {
  const navigate = useNavigate();
  const [timeSlotValue, setTimeSlotValue] = React.useState(new Date());
  const [minTimeValue, setMinTimeValue] = React.useState(new Date());
  const [fromDateOne, setFromDateOne] = React.useState("");
  console.log("Date", fromDateOne);
  const [timeSlots, setTimeSlots] = React.useState([]);
  React.useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();
    const startHour = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      currentHour + 1
    ); // Start from next hour
    const endHour = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      18
    ); // End at 6 PM
    const slots = [];

    for (let i = 0; i < 8; i++) {
      // 8 slots for 1 hour interval from current hour to 6 PM
      const hour = startHour.getHours() + i;
      if (hour > endHour.getHours()) {
        break; // Exit loop if current slot goes beyond 6 PM
      }
      const meridian = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 || 12;
      const slotTime = `${formattedHour
        .toString()
        .padStart(2, "0")}:00 ${meridian}`; // Always show whole hour with :00
      slots.push(slotTime);
    }

    setTimeSlots(slots);
  }, []);
  const onTimeSlotChanged = (e) => {
    console.log(e.value);
  };
  //setFromDateOne(new Date());
  // const now = new Date();
  // const [maxTimeValue, setMaxTimeValue] = React.useState("11.23 PM");
  return fromDateOne === "" ? (
    <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
      <div className="col-md-7">
        <h4
          style={{
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "25px",
            marginBottom: "22px",
          }}
        >
          Select a Time Slot
        </h4>
        <div style={{ marginBottom: "50px" }}>
          <SelectBox
            // dataSource={timeSlotSelection}
            dataSource={timeSlotSelection}
            label="Time Slot"
            labelMode="floating"
            // minTimeValue={minTimeValue}
            //value={timeSlotSelection[0]}
            defaultValue={timeSlotValue}
            onValueChanged={(e) => {
              setTimeSlotValue(e.value);
              console.log(e.value);
            }}
            //onValueChanged={onTimeSlotChanged}
          />

          <br />
          <Link to="./phoneAuthentication" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                width: "160px",
                height: "40px",
                backgroundColor: "#337AB7",
                fontSize: "15px",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
      <div className="col-md-7">
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "25px",
            marginBottom: "22px",
          }}
        >
          Select a Time Slot
        </h3>
        <div style={{ marginBottom: "50px" }}>
          {/* <DateBox
        label="Select Time Slot"
        labelMode="floating"
        type="time"
        pickerType="list"
        interval={60}
        min={minTimeValue}
        showClearButton={true}
        defaultValue={timeSlotValue}
        valueChangeEvent="change"
        onValueChanged={(e) => {
          setTimeSlotValue(e.value);
          console.log(e);
        }}
      ></DateBox> */}
          <SelectBox
            // dataSource={timeSlotSelection}
            dataSource={timeSlots}
            label="Time Slot"
            labelMode="floating"
            // minTimeValue={minTimeValue}
            value={timeSlotSelection[0]}
            // defaultValue={timeSlotValue}
            // onValueChanged={(e) => {
            //   setTimeSlotValue(e.value);
            //   console.log(e.value);
            // }}
            onValueChanged={onTimeSlotChanged}
          />

          <br />
          <Link to="./phoneAuthentication" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              style={{
                marginTop: "30px",
                width: "200px",
                height: "40px",
                backgroundColor: "#337AB7",
                fontSize: "15px",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default TimeSlot;
