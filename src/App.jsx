import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <Footer />
    </>
  );
};

export default App;
