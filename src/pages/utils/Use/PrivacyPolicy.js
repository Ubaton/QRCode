import React from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PrivacyPolicy({ darkMode }) {
  const handleNavLinkClick = (page) => {};

  const update = {
    title: "Last update",
    time: "12:16",
    date: "23 August 2023",
  };

  return (
    <div
      className={`min-h-screen md:h-auto lg:h-auto p-4 ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-50"
      }`}
    >
      <div className="container mx-auto text-gray-500">
        <button className="fixed left-4 top-4">
          <NavLink
            onClick={() => handleNavLinkClick("home")}
            exact
            to="/profilepage"
            activeClassName="bg-blue-500 text-white"
            className="p-1 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
          >
            <ArrowBackIcon />
          </NavLink>
        </button>
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Privacy Policy
        </h1>
        <span className="flex flex-row space-x-2">
          <p>{update.title}</p> <p>{update.date}</p> <p>{update.time}</p>
        </span>
        <hr></hr>
        <div className="p-6">
          <p>
            Privacy is a core value at Creative Minds Graphics (Pty) Ltd. This
            Privacy Policy serves to elucidate the methodologies we employ to
            gather, employ, reveal, and uphold the sanctity of your information
            throughout your engagement with our services.
          </p>
          <br></br>
          <p>
            In the course of facilitating our services, we intentionally curate
            only the essential personal information, thereby adhering to the
            principle of minimalism. This data encapsulates fundamental user
            particulars and usage insights, which in turn aids us in refining
            the quality of our services. Be assured that our data collection
            practices are judicious and calculated, designed solely to enhance
            your experience.
          </p>
          <br></br>
          <p>
            It is our unwavering commitment to adopt security protocols that are
            in tandem with industry norms. These protocols are meticulously
            woven into our operational framework to act as an impervious
            fortress, safeguarding your data. However, it is prudent to
            acknowledge that while we fortify our digital boundaries with the
            best defenses available, no internet-based communication or
            electronic data storage system can be entirely impervious to
            external threats.
          </p>
          <br></br>
          <p>
            As you engage with our services, your implicit consent to the terms
            enshrined in this Privacy Policy is understood. By continuing to
            avail our services, you acknowledge and consent to the assortment
            and utilization of information in accordance with the tenets
            outlined herein.
          </p>
          <br></br>
          <p>
            Your trust remains the cornerstone of our endeavors. We remain
            steadfast in our commitment to protecting your privacy, recognizing
            it as an indispensable facet of your interaction with Creative Minds
            Graphics (Pty) Ltd.
          </p>
          <br></br>
          <p>
            We reserve the right to modify this Privacy Policy at any time. Any
            changes will be promptly updated on this page. We encourage you to
            periodically review this Privacy Policy to stay informed about how
            we are helping to protect the personal information we collect.
          </p>
          <br></br>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please feel free to contact us at any time. We are committed to
            resolving any complaints about our collection or use of your
            personal information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
