import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewsFeed from "./components/NewsFeed";
import Tasks from "./components/Tasks";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("NewsFeed");

  const renderContent = () => {
    switch (activeTab) {
      case "NewsFeed":
        return <NewsFeed />;
      case "Tasks":
        return <Tasks />;
      default:
        return <NewsFeed />;
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Makerble Dashboard</h1>
      </header>
      <div className="container">
        <Sidebar setActiveTab={setActiveTab} />
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
}

export default App;
