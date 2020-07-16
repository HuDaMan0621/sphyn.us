import React from "react";
import Header from "./Header";
import Showcase from "./Showcase";
import About from "./About";
import Demo from "./Demo";
import Packages from "./Packages";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Showcase />
      <About />
      <Demo />
      <Packages />
      <Footer />
    </div>
  );
}
