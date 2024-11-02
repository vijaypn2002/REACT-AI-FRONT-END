import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SupportSection from "./components/SupportSection";
import SolutionSection from "./components/SolutionSection";
import AgentSection from "./components/AgentSection";
import BusinessSolutionsSection from "./components/BusinessSolutionsSection"; // Import the BusinessSolutions section

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SupportSection />
      <SolutionSection />
      <AgentSection />
      <BusinessSolutionsSection /> {/* Add the BusinessSolutionsSection here */}
    </div>
  );
}

export default App;
