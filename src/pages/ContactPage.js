import React, { useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";
import emailjs from "emailjs-com";

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

    // Email JS parameters
    const serviceId = "service_rl7zw8b";
    const templateId = "template_2wgukvc";
    const userId = "S08JiKSAzUq8Rb3KH";

    // Prepare the data for sending the email
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Sending the email using Email JS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Clear the form fields after submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
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
      <div
        className={`p-2 shadow-xl rounded-md m-4 text-gray-500 ${
          darkMode ? "dark bg-DarkMode-cards" : "bg-slate-100"
        }`}
      >
        <div className="text-center p-2">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-4">
            We'd love to hear from you! If you have any questions or inquiries,
            please feel free to get in touch with us using the contact
            information below.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex p-5 flex-col space-y-2">
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
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white rounded-md p-2 m-2"
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
