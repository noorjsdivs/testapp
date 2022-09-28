import React from "react";
import Button from "../components/Button";

const Contact = () => {
  const handleSubmit = () => {
    console.log("done");
  };
  return (
    <div className="max-w-7xl mx-auto px-4">
      <form className="max-w-[500px] mt-10 mx-auto text-center bg-primary py-8 px-6">
        <h3 className="text-4xl font-titleFont underline mb-6">Contact Form</h3>
        <div className="flex flex-col justify-center items-center gap-2">
          <input
            className="contactInput"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            className="contactInput"
            type="text"
            placeholder="Enter your Email"
          />
          <input
            className="contactInput"
            type="number"
            placeholder="Enter your Phone Number"
          />
          <div onClick={handleSubmit} className="w-full">
            <Button />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
