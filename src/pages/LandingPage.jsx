import { useState } from "react";

import Hero from "../components/Hero";
import AboutUs from "../sections/AboutUs";
import Impact from "../sections/Impact";
import Goals from "../sections/Goals";
import Press from "../sections/Press";
import Founder from "../sections/Founder";
import Blogs from "../sections/blogs";
import People from "../sections/People";
import Partners from "../sections/Partners";
import Footer from "../components/Footer";
import Header from "../components/Header";

function LandingPage() {
  return (
    <div className="header container overflow-x-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Impact />
      <Goals />
      <Press />
      <Founder />
      <Blogs />
      <People />
      <Partners />
      <Footer />
    </div>
  );
}

export default LandingPage;
