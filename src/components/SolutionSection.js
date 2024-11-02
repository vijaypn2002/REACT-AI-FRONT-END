// src/components/SolutionSection.js
import React, { useEffect, useState } from "react";

function SolutionSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: {
      background: "#0a0f1b",
      color: "#fff",
      padding: "80px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    heading: {
      fontSize: isMobile ? "2em" : "2.5em",
      fontWeight: "bold",
      margin: "0",
      lineHeight: "1.2",
      color: "#FFFFFF",
    },
    mainContainer: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: isMobile ? "100%" : "80%",
      maxWidth: "1000px",
      marginTop: "40px",
      borderRadius: "20px",
      background: "linear-gradient(145deg, #0f1624, #242b49)",
      padding: isMobile ? "20px" : "40px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
      textAlign: "center",
    },
    checkOutContainer: {
      backgroundColor: "#1c2541",
      padding: isMobile ? "15px" : "30px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      width: isMobile ? "100%" : "320px",
      marginBottom: isMobile ? "20px" : "0",
    },
    textItem: {
      backgroundColor: "#ffffff",
      padding: isMobile ? "8px 15px" : "10px 20px",
      borderRadius: "10px",
      color: "#000",
      marginBottom: "15px",
      width: isMobile ? "80%" : "100%", // Reduced width on mobile
      maxWidth: "320px", // Set a maximum width for larger screens
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      fontSize: isMobile ? "0.9em" : "1em",
    },
    salesAutomation: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: isMobile ? "0" : "40px",
      alignItems: isMobile ? "center" : "flex-start",
      textAlign: isMobile ? "center" : "left",
    },
    subtitle: {
      fontSize: isMobile ? "1.5em" : "1.8em",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#d4e0f4",
    },
    description: {
      fontSize: isMobile ? "1em" : "1.1em",
      color: "#b0c4de",
      marginBottom: "20px",
      maxWidth: isMobile ? "100%" : "300px",
      lineHeight: "1.5",
      opacity: "0.85",
    },
    button: {
      backgroundColor: "transparent",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "8px",
      border: "1px solid #fff",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontWeight: "bold",
      marginTop: "20px",
      width: "auto",
    },
  };

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>
        Transform Your Business with<br />AI-Powered Solutions
      </h2>
      <div style={styles.mainContainer}>
        <div style={styles.checkOutContainer}>
          <div style={styles.textItem}>Check my order status</div>
          <div style={styles.textItem}>Check my order status</div>
          <div style={styles.textItem}>Check my order status</div>
        </div>

        <div style={styles.salesAutomation}>
          <h3 style={styles.subtitle}>Sales Automation</h3>
          <p style={styles.description}>
            Unlock new revenue streams by automating the sales process. Yugaa AI assists in lead qualification, product recommendations.
          </p>
          <button style={styles.button}>Know more</button>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
