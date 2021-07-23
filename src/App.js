import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Services from './Components/Services';
import Training from './Components/Training';
import HireDevelopers from './Components/HireDevelopers';
import Iosappdevelopment from './Components/MobileAppDev/Iosappdevelopment';
import Androidappdevelopment from './Components/MobileAppDev/Androidappdevelopment';
import Hybridappdevelopment from './Components/MobileAppDev/Hybridappdevelopment';
import Webappdev from './Components/WebAppDev/Webappdev';
import Ecommercedev from './Components/WebAppDev/Ecommercedev';
import Webandcmsdev from './Components/WebAppDev/Webandcmsdev';
import Customersoftwaredev from './Components/WebAppDev/Customersoftwaredev';
import Hirenodejsdev from './Components/HireDevelopers/Hirenodejsdev';
import Hirereactjsdev from './Components/HireDevelopers/Hirereactjsdev';
import Hirecrossplatformdev from './Components/HireDevelopers/Hirecrossplatformdev';
import Hirejavadev from './Components/HireDevelopers/Hirejavadev';
import Hireaspdotnetdev from './Components/HireDevelopers/Hireaspdotnetdev';
import Hireecommercedev from './Components/HireDevelopers/Hireecommercedev';
import Portfolio from './Components/Portfolio';
import Aboutus from './Components/Aboutus';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {
        <>
          <Navbar />

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Home">
            <Home />
          </Route>

          <Route exact path="/Services">
            <Services />
          </Route>

          <Route exact path="/Training">
            <Training />
          </Route>

          <Route exact path="/Contact">
            <Contact />
          </Route>

          <Route exact path="/Iosappdevelopment">
            <Iosappdevelopment />
          </Route>

          <Route exact path="/Androidappdevelopment">
            <Androidappdevelopment />
          </Route>

          <Route exact path="/Hybridappdevelopment">
            <Hybridappdevelopment />
          </Route>

          <Route exact path="/Webappdev">
            <Webappdev />
          </Route>

          <Route exact path="/Ecommercedev">
            <Ecommercedev />
          </Route>

          <Route exact path="/HireDevelopers">
            <HireDevelopers />
          </Route>

          <Route exact path="/Webandcmsdev">
            <Webandcmsdev />
          </Route>

          <Route exact path="/Customersoftwaredev">
            <Customersoftwaredev />
          </Route>

          <Route exact path="/Hirenodejsdev">
            <Hirenodejsdev />
          </Route>

          <Route exact path="/Hirereactjsdev">
            <Hirereactjsdev />
          </Route>

          <Route exact path="/Hirecrossplatformdev">
            <Hirecrossplatformdev />
          </Route>

          <Route exact path="/Hireaspdotnetdev">
            <Hireaspdotnetdev />
          </Route>

          <Route exact path="/Hirejavadev">
            <Hirejavadev />
          </Route>

          <Route exact path="/Hireecommercedev">
            <Hireecommercedev />
          </Route>

          <Route exact path="/Aboutus">
            <Aboutus />
          </Route>

          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>

          <Footer />
        </>
      }
    </div>
  )
}

export default App;
