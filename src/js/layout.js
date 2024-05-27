import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { VehicleSingle } from "./views/vehicleSingle";
import { PlanetSingle } from "./views/planetSingle";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import("../styles/index.css");

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="mainContainer">
      <BrowserRouter basename={basename}>
        {/* <ScrollToTop> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/single/:theid" element={<Single />} />
          <Route path="/vehicleSingle/:theid" element={<VehicleSingle />} />
          <Route path="/planetSingle/:theid" element={<PlanetSingle />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
        {/* </ScrollToTop> */}
      </BrowserRouter>
      <Analytics />
    </div>
  );
};

export default injectContext(Layout);