import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Home/Homepage';
import Information from './components/Information/Information';
import About from './components/About/About';
import Mission from './components/Mission/Mission';
import Challenge from './components/Challenges/Challenge';
import Footer from './components/footer/Footer';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <div id="homeroute"><Homepage /></div>
      <div id="informationroute"><Information /></div>
      <div id="aboutroute"><About /></div>
      <div id="missionroute"><Mission /></div>
      <div id="challengeroute"><Challenge /></div>
      <div id="contactroute"><Contact /></div>
      <Footer />
    </>
  );
};

export default App;