import React from "react";
import PageSection from "./PageSection";
import contactImage from "../assets/contact-us.jpg";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <PageSection
      name="contact"
      title="Contact"
      subtitle={
        "empor viverra.malesuada sodales iaculis in eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae"
      }
    >
      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center flex-col justify-center">
          <img
            src={contactImage}
            alt=""
            className="rounded-full object-cover w-72 h-72 shadow-lg shadow-thPurple"
          />
          <p className="py-12 max-w-md">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less
          </p>
          <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
            <div className=" flex items-center justify-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaLinkedin size={25} />
            </div>
            <div className=" flex justify-center items-center rounded-full shadow-md shadow-thPurple hover:scale-105 duration-200 p-3 cursor-pointer">
              <FaTwitter size={25} />
            </div>
          </div>
        </div>

<div className="w-full lg:w-1/2 h-full rounded-xl p-4">
    <ContactForm/>

</div>

      </div>
    </PageSection>
  );
};

export default Contact;
