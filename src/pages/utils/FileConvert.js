import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import WebSite from "../../assets/images/SiteConsturction.png";

function FileConvertPage({ darkMode }) {
  return (
    <div
      className={`flex items-center justify-center ${
        darkMode ? "dark bg-DarkMode-background" : "bg-slate-100"
      }`}
    >
      <div className="fixed left-0">
        <SideBar darkMode={darkMode} />
      </div>
      <div className="items-center justify-center h-screen grid-cols-2 p-8">
        <img
          src={WebSite}
          alt="WebSite Consturction"
          width="600"
          height="600"
          className=""
        />
      </div>
    </div>
  );
}

export default FileConvertPage;
