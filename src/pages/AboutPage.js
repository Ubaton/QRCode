import { Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const cardData = [
  {
    title: "Our Story",
    content:
      "Founded with a vision to revolutionize the digital design landscape, Creative Minds Graphics (Pty) Ltd has evolved into a powerhouse of creativity and strategic thinking. With years of experience in the industry, we have honed our skills to deliver exceptional results that leave a lasting impact on our clients and their audiences.",
  },
  {
    title: "Our Mission",
    content:
      "At Creative Minds Graphics (Pty) Ltd, we are driven by a simple yet powerful mission: to empower brands and individuals with innovative design solutions that elevate their presence in the digital world. We strive to go beyond aesthetics and create designs that not only captivate but also drive tangible results for our clients.",
  },
  {
    title: "Our Services",
    content:
      "Our diverse range of services includes website development, 3D digital art, photo editing, video editing, motion graphics, and strategic advertising. Whether you need a visually stunning website to showcase your brand or engaging motion graphics to tell your story, we have the expertise to bring your ideas to life.",
  },
  // Add more card data as needed
];

const Card = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="p-4 border rounded-lg mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {isExpanded ? (
        <p className="text-gray-700 mb-4">{content}</p>
      ) : (
        <p className="text-gray-700 mb-4 line-clamp-3">{content}</p>
      )}
      <button
        className="text-blue-500 hover:text-blue-700 focus:outline-none text-sm"
        onClick={handleToggleExpand}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

const AboutPage = () => {
  const handleNavLinkClick = (page) => {};

  return (
    <div>
      <div className="p-8 ">
        <Button>
          <NavLink
            onClick={() => handleNavLinkClick("home")}
            exact
            to="/"
            activeClassName="bg-blue-500 text-white"
            className="block  rounded-md text-gray-500 hover:text-gray-700 hover:bg-gradient-to-r from-gray-100 to-gray-200"
          >
            <ArrowBackIcon />
          </NavLink>
        </Button>
        <div className="justify-center items-center p-6 mt-5">
          <h1 className=" flex justify-center items-center">
            <strong className="text-xl">About Us</strong>
          </h1>
          <p className=" text-center ">
            Welcome to Creative Minds Graphics (Pty) Ltd, your gateway to
            innovative and visually captivating design solutions. We are a
            dynamic team of passionate artists, web developers, and brand
            strategists, dedicated to helping businesses and individuals bring
            their creative visions to life.
          </p>
          <div className="flex justify-center items-center p-12 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cardData.map((card, index) => (
                <Card key={index} title={card.title} content={card.content} />
              ))}
            </div>
          </div>
          <h1 className=" flex justify-center items-center pt-2">
            <strong className="text-xl">Why Choose Us</strong>
          </h1>
          <p className=" text-center ">
            Creativity at its Best: Our team of talented designers and artists
            have an innate ability to transform ideas into visually stunning
            masterpieces that make an impact. Strategic Approach: We blend
            creativity with strategic thinking to create designs that align with
            your business goals and captivate your target audience.
            Customer-Centric: Our clients' satisfaction is at the heart of
            everything we do. We work closely with you to understand your unique
            needs and deliver personalized solutions that exceed expectations.
            <br></br> Cutting-Edge Technology: We stay up-to-date with the
            latest design trends and technologies to ensure that your projects
            are at the forefront of innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;