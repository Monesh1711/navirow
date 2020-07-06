import React from "react";
import "./App.css";
import TopNavbar from './components/navbar/TopNavbar';
import { Route, Switch } from 'react-router-dom';
import DeliveryService from "./components/services/DeliveryService";
import Footer from "./components/footer/Footer";
import ContactDashboard from "./components/contact/ContactDashboard";


function App() {
  return <div className="App">
    <>
      <TopNavbar />
      <DeliveryService />
      <ContactDashboard />
      <Footer />

    </>

  </div>;
}

export default App;
