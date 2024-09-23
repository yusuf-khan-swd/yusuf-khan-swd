import React from "react";
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="my-12 m-2 lg:m-0">
      <div className="text-center  mb-6">
        <h3 className="text-xl">Contact</h3>
        <h3 className="text-2xl">Get in Touch</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-8 text-center border border-gray-600 rounded-lg shadow-lg">
          <p className="flex justify-center mb-3">
            <a href="tel:8801629090158">
              <FaPhoneSquareAlt className="text-slate-500 hover:text-slate-600 text-5xl"></FaPhoneSquareAlt>
            </a>
          </p>
          <p className="mb-2 font-semibold">Phone</p>
          <p>+880 16290 90158</p>
        </div>
        <div className="p-8 text-center border border-gray-600 rounded-lg shadow-lg">
          <p className="flex justify-center mb-3">
            <a href="mailto:yusufkhan.swd@gmail.com">
              <FaEnvelope className="text-slate-500 hover:text-slate-600 text-5xl"></FaEnvelope>
            </a>
          </p>
          <p className="mb-2 font-semibold">Email</p>
          <p>yusufkhan.swd@gamil.com</p>
        </div>
        <div className="p-8 text-center border border-gray-600 rounded-lg shadow-lg">
          <p className="flex justify-center mb-3">
            <FaLocationDot className="text-slate-500 hover:text-slate-600 text-5xl"></FaLocationDot>
          </p>
          <p className="mb-2 font-semibold">Address</p>
          <p>Chittagong, Bangladesh</p>
        </div>
      </div>
      <p className="my-4 text-center font-bold">Or</p>
      <div className="text-center">
        <a
          href="https://form.jotform.com/223433296548058"
          target={`_blank`}
          className="btn w-full lg:w-72"
        >
          Send Message
        </a>
      </div>
    </div>
  );
};

export default Contact;
<h3>Contact</h3>;
