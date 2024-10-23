import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveTab("NewsFeed")}>NewsFeed</li>
        <li onClick={() => setActiveTab("Tasks")}>Tasks</li>
        <li onClick={() => setActiveTab("Contacts")}>Contacts</li>
        <li onClick={() => setActiveTab("Projects")}>Projects</li>
        <li onClick={() => setActiveTab("Albums")}>Albums</li>
      </ul>
    </div>
  );
};

export default Sidebar;
