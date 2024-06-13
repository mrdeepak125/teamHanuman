import React, { useEffect, useState } from "react";
import '../assets/css/Joining.css';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Home from "./Home";
function Joining () {
  return (
    <>
      <div className="joinsec">
        <div className="container1">
          <div className="text">Joining Form</div>
          <form action="#" name="google-sheet">
            <div className="form-row">
              <div className="input-data">
                <input name="First" required type="text" />
                <div className="underline" />
                <label>First Name</label>
              </div>
              <div className="input-data">
                <input name="Last" required type="text" />
                <div className="underline" />
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input name="Email" required type="email" />
                <div className="underline" />
                <label>Email Address</label>
              </div>
              <div className="input-data">
                <input name="Mobile" required type="text" />
                <div className="underline" />
                <label>Mobile no.</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input name="D.O.B" required type="date" placeholder="D.O.B" />
                <div className="underline" />
                <label>D.O.B</label>
              </div>
              <div className="input-data">
                <input name="Work" required type="text" />
                <div className="underline" />
                <label>Work</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data" id="Location">
                <select
                  className="ih-inp-style"
                  fdprocessedid="krz9hk"
                  id="Location"
                  name="Location"
                >
                  <option value="ब्रह्मपुरी">ब्रह्मपुरी</option>
                  <option value="चौगान स्टेडियम">चौगान स्टेडियम</option>
                  <option value="मोहन नगर  ">मोहन नगर</option>
                  <option value="गोविन्द नगर ईस्ट">गोविन्द नगर ईस्ट</option>
                  <option value="गोविन्द नगर वेस्ट">गोविन्द नगर वेस्ट</option>
                  <option value="गंगापोल">गंगापोल</option>
                  <option value="बदनपुरा">बदनपुरा</option>
                  <option value="खोर ">खोर</option>
                  <option value="आमेर ">आमेर</option>
                  <option value="सरायबावडी ">सरायबावडी</option>
                  <option value="जल महल">जल महल</option>
                  <option value="शंकर नगर">शंकर नगर</option>
                  <option value="सुभाष चौक">सुभाष चौक</option>
                  <option value="बड़ी चौपड़">बड़ी चौपड़</option>
                  <option value="छोटी चौपड़">छोटी चौपड़</option>
                  <option value="किशन पोल">किशन पोल</option>
                  <option value="सिविल लाइन">सिविल लाइन</option>
                  <option value="मालवीय नगर">मालवीय नगर</option>
                  <option value="मानसरोवर ">मानसरोवर</option>
                  <option value="सांगानेर ">सांगानेर</option>
                  <option value="रामगंज ">रामगंज</option>
                  <option value="कोलियों की कोठी">कोलियों की कोठी</option>
                  <option value="मीठी कोठी">मीठी कोठी</option>
                </select>
                <div className="underline" />
                <label></label>
              </div>
              <div className="input-data textarea">
                <textarea cols="80" name="Address" rows="8" />
                <br />
                <div className="underline" />
                <label>Write your Address</label>
                <br />
                <div className="form-row submit-btn"></div>
                <button id="send" name="submit" type="submit">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <span>SUBMIT</span>
                </button>
              </div>
            </div>
          </form>
          NOTE:-On click submit-button please wait few second
        </div>
        <div className="container2">
        <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse?.credential);
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
      useOneTap
      auto_select
      icon
  }}
/>
        </div>
      </div>
    </>
  );
};

export default Joining;
