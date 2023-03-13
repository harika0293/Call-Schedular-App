import React, { useState } from "react";
import { Form, GroupItem } from "devextreme-react/form";
import TextBox from "devextreme-react/text-box";
import notify from "devextreme/ui/notify";
import "devextreme-react/text-area";
import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";

import { auth } from "./firebase";
import Validator, { RequiredRule, EmailRule } from "devextreme-react/validator";

import ValidationGroup from "devextreme-react/validation-group";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { sendEmailVerification } from "firebase/auth";
import { db } from "./firebase.js";

const ValidEmailMain = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const namePattern = /^[^0-9]+$/;
  const phonePattern = /^[02-9]\d{9}$/;
  const phoneRules = {
    X: /[02-9]/,
  };
  // For Email Validation
  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };
  const handleEmailVerification = async (e) => {
    //e.preventDefault();
    try {
      sendEmailVerification(auth.currentUser);
      alert("check your mail");
      navigate(
        "/scheduleTime/phoneAuthentication/EnterDetails/EmailVerification/Status"
      );

      // const res = await createUserWithEmailAndPassword(auth, email, password);
      //  const user = res.user;
      //   console.log("verification",auth.emailVerified)
      //   if(auth.currentUser.emailVerified)
      //   {
      //     await addDoc(collection(db, "userscollection"), {
      //       username :username,
      //       email : email,
      //       password:password,
      //       confirmpassword:confirmpassword
      //     });
      //     //setIsVerified(true)
      //     alert("register Successufully")
      //     navigate("/login")
      //   }
      //   else{
      //     setIsVerified(false)
      //     console.log("error")
      //     alert("email is not Verified")
      //     console.log("email is not Verified")
      //     navigate("/register")
      //   }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const scheduleEvent = async (e) => {
    // e.preventDefault();
    if (email === "") {
      notify(
        {
          message: "Please fill all the fields",
          width: 300,
          // shading: true,
          // position: "center",
        },
        "error",
        500
      );
    } else {
      notify(
        {
          message:
            "Thanks for Scheduling a Meeting with us. You will receive a mail Shortly.",
          width: 600,
          shading: true,
          position: "center",
        },
        "success",
        1200
      );
      // setTimeout(() => {
      //   window.location.reload(true);
      // }, 1400);
      navigate("/");
      // refreshPage();
    }
  };

  return (
    <React.Fragment>
      <div
        style={{
          marginRight: "25px",
          marginLeft: "25px",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            marginBottom: "5px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              marginTop: "25px",
              marginBottom: "22px",
            }}
          >
            Enter your Registered Email
          </h3>
        </div>
        <div
          style={{
            marginTop: "5px",
          }}
        >
          <ValidationGroup>
            <Form
              colCount={2}
              labelMode="floating"
              labelLocation="left"
              // onContentReady={validateForm}
              //label="Select the"
            >
              <GroupItem>
                <TextBox
                  label="Email Address"
                  labelMode="floating"
                  mode="email"
                  defaultValue={email}
                  //id="userEmail"
                  //onChange={(e) => validateEmail(e)}
                  onValueChanged={(e) => {
                    setEmail(e.value);
                    console.log(e.value);
                  }}
                  height={40}
                >
                  {emailError}
                  <Validator>
                    <RequiredRule message="Email is required" />
                    <EmailRule message="Email Format is invalid" />
                  </Validator>
                </TextBox>
              </GroupItem>
            </Form>
          </ValidationGroup>
        </div>
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            width={205}
            height={40}
            text="Send Link to your Email"
            type="default"
            stylingMode="contained"
            //onClick={scheduleEvent}
            onClick={handleEmailVerification}
          ></Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ValidEmailMain;
