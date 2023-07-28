import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";

function ContactPage() {
  const handleNavLinkClick = (page) => {};
  return (
    <div>
      <Button>
        <NavLink
          onClick={() => handleNavLinkClick("home")}
          exact
          to="/"
          activeClassName="bg-blue-500 text-white"
          className=" rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
        >
          <ArrowBackIcon />
        </NavLink>
      </Button>
      <div className="p-5 shadow-xl border-spacing-1 rounded-md m-8">
        <div className="text-center p-8">
          <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
          <p className="mb-4">
            We'd love to hear from you! If you have any questions or inquiries,
            please feel free to get in touch with us using the contact
            information below.
          </p>
          <div className="flex flex-col space-y-2">
            <div>
              <span className="font-semibold">Email:</span>{" "}
              cmg@grapgi-designer.com
            </div>
            <div>
              <span className="font-semibold">Phone:</span> 079 541 3772
            </div>
            <div>
              <span className="font-semibold">Address:</span> 4912 De Bruyn
              Street, Kempton Prak, South Africa,1624
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
