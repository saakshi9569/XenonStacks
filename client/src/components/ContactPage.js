import React from "react";
// import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import LayoutPage from "./LayoutPage";
const ContactPage = () => {
  return (
    <LayoutPage title={"Contact us"}>
      <div className="row contactus mt-5">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/premium-photo/people-connect-through-contact-us-customer-support-hotline-concept-finger-touch-access-contact-icons-email-address-virtual-screen-internet-wifi-represents-digital-communication-banner_143683-12449.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </LayoutPage>
  );
};

export default ContactPage;