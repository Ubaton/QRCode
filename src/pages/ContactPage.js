import React, { useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";

function ContactPage({ darkMode }) {
  const handleNavLinkClick = (page) => {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className={`h-screen text-gray-500 ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
      }`}
    >
      <Button>
        <NavLink
          onClick={() => handleNavLinkClick("home")}
          exact
          to="/"
          activeClassName="bg-blue-500 text-white"
          className="rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
        >
          <ArrowBackIcon />
        </NavLink>
      </Button>
      <div className="p-5 shadow-xl rounded-md m-8">
        <div className="text-center p-8">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-4">
            We'd love to hear from you! If you have any questions or inquiries,
            please feel free to get in touch with us using the contact
            information below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="rounded-md p-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="rounded-md p-2"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="rounded-md p-2"
                required
              ></textarea>
            </div>
            <Button
              type="submit"
              variant="contained"
              className="mt-4 pt-5 bg-blue-500 text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
